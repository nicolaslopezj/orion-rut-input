Package.describe({
  name: 'nicolaslopezj:orion-rut-input',
  summary: 'Rut input for orion',
  version: '2.0.0',
  git: 'https://github.com/nicolaslopezj/orion-rut-input'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'blaze-html-templates@1.0.1',
    'ecmascript@0.1.6',
    'orionjs:base@1.5.0',
    'orionjs:attributes@1.5.0'
  ]);

  api.addFiles('attribute.js');
  api.addFiles(['input.html', 'input.js'], 'client');
});

Package.onTest(function(api) {
});
