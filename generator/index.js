const lowerFirst = require('lodash.lowerFirst')

module.exports = (api, options, rootOptions) => {
  api.render('./template')
  api.extendPackage({
    name: "project-name",
    version: "0.1.0",
    description: "project-desc",
    main: "prompts.js",
    repository: {
      "type": "git",
      "url": ""
    },
    keywords: [],
    author: "tracy-chang",
    license: "ISC",
    dependencies: {
    },
    devDependencies: {
      "git-cz": "^4.3.1",
      "standard-version": "^7.1.0"
    },
    config: {
      commitizen: {
        path: "./node_modules/git-cz"
      }
    },
    scripts: {
      "changelog": "standard-version",
      "commit": "git add . && npx git-cz"
    },
  });
}
