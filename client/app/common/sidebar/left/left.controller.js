class LeftSidebarController {
  constructor() {
    let vm = this;

    vm.name = 'left-sidebar';
    vm.menus = [
      {
        type: 'heading',
        name: 'Documentation Version',
        children: [
          {
            type: 'toggle',
            name: 'HEAD (master)',
            pages: [
              {
                type: 'link',
                name: 'Latest Release (1.1.0-rc1)',
                    },
              {
                type: 'link',
                name: 'Release 1.0.6',
                    },
              {
                type: 'link',
                name: 'Release 1.0.5',
                    },
              {
                type: 'link',
                name: 'Release 1.0.4',
                    },
              {
                type: 'link',
                name: 'Release 1.0.3',
                    },
              {
                type: 'link',
                name: 'Release 1.0.2',
                    },
              {
                type: 'link',
                name: 'Release 1.0.1',
                    },
              {
                type: 'link',
                name: 'Release 1.0.0',
                    },
              {
                type: 'link',
                name: 'Release 0.11.4',
                    },
              {
                type: 'link',
                name: 'Release 0.11.3',
                    },
              {
                type: 'link',
                name: 'Release 0.11.2',
                    },
              {
                type: 'link',
                name: 'Release 0.11.1',
                    },
              {
                type: 'link',
                name: 'Release 0.11.0',
                    },
              {
                type: 'link',
                name: 'Release 0.10.3',
              },
            ]
          }
        ]
      },
      {
        type: 'link',
        name: 'Getting Started',
      },
      {
        type: 'toggle',
        name: 'Demos',
      },
      {
        type: 'heading',
        name: 'Customization',
        children: [
          {
            type: 'toggle',
            name: 'CSS',
            pages: [
              {
                type: 'link',
                name: 'Typography'
              },
              {
                type: 'link',
                name: 'Button',
                    },
              {
                type: 'link',
                name: 'Checkbox',
              },
            ]
          },
          {
            type: 'toggle',
            name: 'Theming',
            pages: [
              {
                type: 'link',
                name: 'Introduction and Terms'
              },
              {
                type: 'link',
                name: 'Declarative Syntax',
              },
              {
                type: 'link',
                name: 'Configuring a Theme',
              },
              {
                type: 'link',
                name: 'Multiple Themes',
              },
              {
                type: 'link',
                name: 'Under the Hood',
              },
            ]
          }
        ]
      }
    ];
  }

  isOpen(section) {
    let vm = this;
    return vm.openedSection === section;
  }

  toggleOpen(section) {
    let vm = this;
    vm.openedSection = (vm.openedSection === section ? null : section);
  }
}

export default LeftSidebarController;
