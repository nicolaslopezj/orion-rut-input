ReactiveTemplates.onRendered('attribute.rut', function () {

});

ReactiveTemplates.helpers('attribute.rut', {
  valueIn: function() {
    var schema = AutoForm.getSchemaForField(this.name);
    var visible = schema.orion.formatValue(this.value);
    return visible;
  }
});

ReactiveTemplates.events('attribute.rut', {
  'keyup input': function(event, template) {
    var schema = AutoForm.getSchemaForField(template.data.name);
    var value = schema.orion.parseValue(event.currentTarget.value);
    var visible = schema.orion.formatValue(value);
    event.currentTarget.value = visible;
  }
});
