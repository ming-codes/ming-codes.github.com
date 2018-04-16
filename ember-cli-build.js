'use strict';

const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let isProduction = EmberApp.env() === 'production';
  let app = new EmberApp(defaults, {
    prember: {
      enabled: isProduction,
      urls: [
        '/',
        '/blog',
        '/projects'
      ]
    },
    'ember-web-app': {
      enabled: isProduction
    },
    'ember-cli-critical': {
      enabled: isProduction,
      critical: {
        // critical options
        penthouse: {
          renderWaitTime: 1000
        },

      }
    },
    'ember-service-worker': {
      enabled: isProduction
    }
  });

  app.import('node_modules/marked/marked.min.js');

  let appTree = app.toTree();

  process.env.FASTBOOT_DISABLED = !isProduction;

  return new MergeTrees([
    appTree,
    new Funnel(appTree, {
      files: [ 'index.html' ],
      getDestinationPath() {
        return '404.html';
      }
    })
  ]);
};
