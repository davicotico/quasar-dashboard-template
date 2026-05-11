//import { type MenuItem } from 'src/shared/components/sidebar/sidebar.type';

export const MENU_ITEMS = [
  {
    text: 'Forms',
    href: '/forms',
    icon: 'edit',
    tooltip: 'Form components',
    children: [],
  },
  {
    text: 'Sidebar Menu',
    href: '/sidebar',
    icon: 'menu',
    tooltip: 'Sidebar menu elements',
    children: [],
  },
  {
    text: 'Contact List',
    href: '/contact-list',
    icon: 'person',
    tooltip: 'Active Directory',
    children: [],
  },
  {
    text: 'Dialogs',
    href: '/dialogs-notifications',
    icon: 'chat',
    tooltip: 'How to use',
    children: [],
  },
  {
    text: 'Menu Editor',
    href: '/menu-editor',
    icon: 'menu',
    tooltip: 'How to use',
    children: [],
  },
  {
    text: 'OpenStreetMap',
    href: '/open-layers',
    icon: 'map',
    tooltip: 'Maps with Open Layers',
    children: [],
  },
  {
    text: 'Documents',
    href: '/documents',
    icon: 'folder',
    tooltip: 'Browse your documents',
    children: [
      {
        text: 'Reports',
        href: '/documents/reports',
        icon: 'description',
        tooltip: 'View all reports',
        children: [
          {
            text: 'Sales 2026',
            href: '/reports/sales',
            icon: 'bar_chart',
            tooltip: 'Sales reports for 2025',
            children: [],
          },
          {
            text: 'Monthly Expenses',
            href: '/reports/expenses',
            icon: 'pie_chart',
            tooltip: 'Monthly expense reports',
            children: [],
          },
        ],
      },
      {
        text: 'Receipts',
        href: '/documents/receipts',
        icon: 'receipt',
        tooltip: 'View all receipts',
        children: [],
      },
    ],
  },
  {
    text: 'Configuration',
    href: '/config',
    icon: 'settings',
    tooltip: 'Preferences and settings',
    children: [
      {
        text: 'Profile',
        href: '/config/profile',
        icon: 'person',
        tooltip: 'Manage your profile',
        children: [],
      },
      {
        text: 'Security',
        href: '/config/security',
        icon: 'lock',
        tooltip: 'Security settings',
        children: [],
      },
    ],
  },
  {
    text: 'Login',
    href: '/login',
    icon: 'lock',
    tooltip: 'Go to login page',
    children: [],
  },
];
