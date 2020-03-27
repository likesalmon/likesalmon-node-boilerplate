module.exports = plop => {
  plop.setGenerator('module', {
    description: 'Create a module.',
    prompts: [
      {
        type: 'input',
        name: 'moduleName',
        message: 'Module Name',
        default: 'my-module',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{moduleName}}/index.js',
        templateFile: 'internals/plop-templates/module/index.js.hbs',
      },
      {
        type: 'add',
        path: 'src/{{moduleName}}/tests/index.test.js',
        templateFile: 'internals/plop-templates/module/index.test.js.hbs',
      },
    ],
  });
};
