import angular from 'angular';
import Menu from './menu/menu';
import Sidebar from './sidebar/sidebar';

let commonModule = angular.module('app.common', [
  Menu.name,
  Sidebar.name
]);

export default commonModule;
