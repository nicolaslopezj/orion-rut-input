orion.attributes.registerAttribute('rut', {
template: 'orionAttributesRutInput',
previewTemplate: 'orionAttributesRegexRutColumn',
getSchema: function(options) {
  return {
    type: String,
    regEx: /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/,
    min: 9,
    custom: function() {
      if (this.isSet && this.value) {
        var validator = function(T){var M=0,S=1;for(;T;T=Math.floor(T/10))S=(S+T%10*(9-M++%6))%11;return S?S-1:'K';}
        var numbers = this.value.replace(/[^\dkK]/g, '');
        var parts = numbers.split('');
        var last = parts.pop().toUpperCase();
        var sinDigito = parts.join('');
        var realLast = validator(sinDigito);
        if (last != realLast) {
          console.log(this.value, last, realLast);
        }
        return last != realLast && 'invalidRut';
      }
    },
    orion: {
      parseValue: function(value) {
        return value;
      },
      formatValue: function(value) {
        var numbers = value.replace(/[^\dkK]/g, '');
        var parts = numbers.split('');
        if (parts.length === 0) return numbers;
        var last = parts.pop();
        if (parts.length === 0) return numbers;
        return numeral(parts.join('')).format('0,0') + '-' + last;
      }
    }
  };
}
});
