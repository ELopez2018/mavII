export const mockMenuItemsData = (): any[] => {
  return [
    {
      label: 'Principal',
      routerLink: ['../inicio'],
      default: true,
      visible: true,
      url: '#',
      icon: 'mdi mdi-home',
      id: '1',
      order: '1',
      type: 'Vista',
      submenu: [
        {
          label: 'Inicio',
          icon: 'mdi mdi-gauge',
          routerLink: ['/main/dashboard'],
        },
      ],
    },
    {
      label: 'Solicitudes',
      routerLink: ['../inicio'],
      default: true,
      visible: true,
      url: '#',
      icon: 'mdi mdi-archive',
      id: '2',
      order: '2',
      type: 'Vista',
      submenu: [
        {
          label: 'Registro de usuarios',
          icon: 'mdi mdi-gauge',
          routerLink: ['./administracion-usuarios'],
        },
        {
          label: 'Registro de Solicitudes',
          icon: 'mdi mdi-gauge',
          routerLink: ['./administracion-solicitudes'],
        },
      ],
    },
    {
      label: 'Expedientes',
      routerLink: ['../inicio'],
      default: true,
      visible: true,
      url: '#',
      icon: 'mdi mdi-archive',
      id: '2',
      order: '2',
      type: 'Vista',
      submenu: [
        {
          label: 'Registro',
          icon: 'mdi mdi-gauge',
          routerLink: ['./expedientes'],
        },
        {
          label: 'Histórico',
          icon: 'mdi mdi-gauge',
          routerLink: ['./administracion-solicitudes'],
        },
      ],
    },
    {
      label: 'Configuracion',
      routerLink: ['../inicio'],
      default: true,
      visible: true,
      url: '#',
      icon: 'mdi mdi-settings',
      id: '3',
      order: '3',
      type: 'Vista',
      submenu: [
        {
          label: 'Roles',
          icon: 'mdi mdi-gauge',
          routerLink: ['./registro-de-roles'],
        },
      ],
    },
  ];
};
