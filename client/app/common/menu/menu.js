import menuToggleDirective from './toggle/toggle.directive';
import menuLinkDirective from './link/link.directive';

let menuModule = angular.module('app.common.menu', [])
  .directive('salonMenuToggle', menuToggleDirective)
  .directive('salonMenuLink', menuLinkDirective);

export default menuModule;
