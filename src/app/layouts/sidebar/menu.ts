import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.MENU.TEXT',
    isTitle: true
  },
  {
    id: 2,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    icon: 'ri-dashboard-2-line',
    subItems: [
      {
        id: 9,
        label: 'Weather',
        link: '',
        parentId: 2,
      },
      // {
      //   id: 3,
      //   label: 'MENUITEMS.DASHBOARD.LIST.ANALYTICS',
      //   link: '/analytics',
      //   parentId: 2
      // },
      // {
      //   id: 4,
      //   label: 'MENUITEMS.DASHBOARD.LIST.CRM',
      //   link: '/crm',
      //   parentId: 2
      // },
      // {
      //   id: 5,
      //   label: 'MENUITEMS.DASHBOARD.LIST.ECOMMERCE',
      //   link: '',
      //   parentId: 2
      // },
      // {
      //   id: 6,
      //   label: 'MENUITEMS.DASHBOARD.LIST.CRYPTO',
      //   link: '/crypto',
      //   parentId: 2
      // },
      // {
      //   id: 7,
      //   label: 'MENUITEMS.DASHBOARD.LIST.PROJECTS',
      //   link: '/projects',
      //   parentId: 2
      // },
      // {
      //   id: 7,
      //   label: 'MENUITEMS.DASHBOARD.LIST.NFT',
      //   link: '/nft',
      //   parentId: 2,
      // },
      // {
      //   id: 8,
      //   label: 'MENUITEMS.DASHBOARD.LIST.JOB',
      //   link: '/job',
      //   badge: {
      //     variant: 'bg-success',
      //     text: 'MENUITEMS.DASHBOARD.BADGE',
      //   },
      //   parentId: 2,
      // },
      
    ]
  },
];
