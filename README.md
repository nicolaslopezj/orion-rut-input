Orion Rut Input
===============

```sh
meteor add nicolaslopezj:orion-rut-input
```

Rut input for Orion.

**Only for Chile**


> Usage: Simply add the field to your schema

```js
// Example
myCollection.attachSchema(new SimpleSchema({
  rut: orion.attribute('rut', {
    label: 'RUT',
    optional: true
  }),
}));
```
