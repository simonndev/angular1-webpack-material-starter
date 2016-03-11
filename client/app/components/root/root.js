import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rootComponent from './root.component';

let rootModule = angular.module('app.components.root', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      url: '/',
      template: '<root></root>'
    });
})

.component('root', rootComponent);

export default rootModule;
