const MD_SIDENAV = new WeakMap();
const LOG = new WeakMap();

class RightSidebarController {
  /**
   * [[Description]]
   * @param {[[Type]]} $mdSidenav [[Description]]
   * @ngInject
   */
  constructor($mdSidenav, $log) {
    let vm = this;
    LOG.set(vm, $log);
    MD_SIDENAV.set(vm, $mdSidenav);

    vm.name = 'right-sidebar';
  }

  close() {
    let vm = this;

    MD_SIDENAV.get(vm)('right').close()
      .then(function () {
        LOG.get(vm).debug('close RIGHT is done');
      });
  }
}

export default RightSidebarController;
