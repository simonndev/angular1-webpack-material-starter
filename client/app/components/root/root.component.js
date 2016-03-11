import template from './root.html';
import controller from './root.controller';
import './_root.scss';

let rootComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default rootComponent;
