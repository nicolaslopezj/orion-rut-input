Orion Rut Input
===============

```sh
meteor add nicolaslopezj:orion-rut-input
```

Rut input for Orion.

**Only for Chile**

> Usage: Simply add the field to your schema

```js
import numeral from 'numeral'

// Example
myCollection.attachSchema(new SimpleSchema({
  rut: orion.attribute('rut', {
    label: 'RUT',
    optional: true
  }, {
    numeral: numeral
  }),
}));
```

> From version 2, numeral must be passed as an option.