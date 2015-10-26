Package.describe({
  name: 'nicolaslopezj:orion-rut-input',
  summary: 'Rut input for orion',
  version: '1.0.0',
  git: 'https://github.com/nicolaslopezj/orion-rut-input'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'orionjs:base@1.5.0',
    'orionjs:attributes@1.5.0',
    'numeral:numeral'
    ]);

  api.addFiles('attribute.js');
  api.addFiles(['input.html', 'input.js'], 'client');
});

Package.onTest(function(api) {
});
