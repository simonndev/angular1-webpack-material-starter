import template from './left.html';
import controller from './left.controller';
import './_left.scss';

let leftSidebarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default leftSidebarComponent;
