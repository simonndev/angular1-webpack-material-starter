import template from './topbar.html';
import controller from './topbar.controller';
import './_topbar.scss';

let topbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default topbarComponent;
