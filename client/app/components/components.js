import angular from 'angular';
import Root from './root/root';

let componentModule = angular.module('app.components', [
  Root.name
]);

export default componentModule;
