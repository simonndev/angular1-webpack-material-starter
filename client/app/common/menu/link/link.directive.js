import template from './link.html';

let menuLinkDirective = () => {
  return {
    restrict: 'E',
    scope: {
      section: '='
    },
    template,
    link: (scope, element) => {
      let controller = element.parent().controller();

      scope.focusSection = () => {
        controller.autoFocusContent = true;
      };
    }
  };
};

export default menuLinkDirective;
