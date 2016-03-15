import template from './toggle.html';
import './_toggle.scss';

let menuToggleDirective = () => {
  return {
    restrict: 'E',
    scope: {
      section: '='
    },
    template,
    link: (scope, element) => {
      let controller = element.parent().controller();

      scope.isOpen = () => {
        return controller.isOpen(scope.section);
      };

      scope.toggle = function () {
        controller.toggleOpen(scope.section);
      };

      let parentNode = element[0].parentNode.parentNode.parentNode;
      if (parentNode.classList.contains('parent-list-item')) {
        let heading = parentNode.querySelector('h2');
        element[0].firstChild.setAttribute('aria-describedby', heading.id);
      }
    }
  };
};

export default menuToggleDirective;
