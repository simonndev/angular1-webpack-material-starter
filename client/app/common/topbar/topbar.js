import topbarComponent from './topbar.component';

let topbarModule = angular.module('app.common.topbar', [])
  .component('topbar', topbarComponent);

export default topbarModule;
