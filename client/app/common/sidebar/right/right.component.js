import template from './right.html';
import controller from './right.controller';
import './_right.scss';

let rightSidebarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default rightSidebarComponent;
