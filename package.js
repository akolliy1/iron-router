Package.describe({
  summary: 'Routing for Meteor'
});

Package.on_use(function (api) {
  api.use([
    'deps',
    'underscore',
    'handlebars',
    'posture'
  ], 'client');

  api.add_files([
    'lib/route_path.js',
    'lib/route_context.js',
    'lib/route.js',
    'lib/route_handlers/simple_route_handler.js',
  ], ['client', 'server']);

  api.add_files([
    'lib/client/router.js',
    'lib/client/helpers.js'
  ], 'client');

  api.add_files([
    'router.js'
  ], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('router', 'client');
  api.use('reactive-dict', 'client');
  api.use('tinytest', 'client');
  api.use('test-helpers', 'client');
  api.add_files('test/router_tests.js', 'client');
});
