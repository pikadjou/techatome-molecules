import { CamIconType } from '@camelot/icons';

import { MenuIcon } from '../../../models/menu/item/icon';
import { Menu } from '../../../models/menu/menu';

export const __smallMenu = new Menu({
  elements: [
    new MenuIcon({
      key: 'home',
      label: 'home',
      link: '',
      order: 1,
      icon: CamIconType.Dashboard,
      exact: true,
    }),
    new MenuIcon({
      key: 'tier',
      label: 'contact',
      link: '',
      order: 2,
      icon: CamIconType.Contacts,
    }),
    new MenuIcon({
      key: 'visit',
      label: 'Visit',
      order: 3,
      icon: CamIconType.Visit,
      link: '',
    }),
  ].sort((a, b) => a.order - b.order),
  direction: 'responsive',
});

export const __classicMenu = new Menu({
  elements: [
    new MenuIcon({
      key: 'home',
      label: 'home',
      link: '',
      order: 1,
      icon: CamIconType.Dashboard,
      exact: true,
      defaultOpen: true,
    }),
    new MenuIcon({
      key: 'tier',
      label: 'contact',
      link: '',
      order: 2,
      icon: CamIconType.Contacts,
      options: { notificationBadge: { label: 4 } },
    }),
    new MenuIcon({
      key: 'visit',
      label: 'Visit',
      order: 3,
      icon: CamIconType.Visit,
      link: '',
    }),
    new MenuIcon({
      key: 'relance',
      label: 'Reminder',
      link: '',
      order: 4,
      icon: CamIconType.Rocket,
    }),
    new MenuIcon({
      key: 'stock',
      label: 'Stock',
      link: '',
      order: 5,
      icon: CamIconType.Van,
    }),
    new MenuIcon({
      key: 'doc',
      label: 'Task',
      link: '',
      order: 6,
      icon: CamIconType.Task,
    }),
  ].sort((a, b) => a.order - b.order),
  direction: 'responsive',
});

export const __classicIconMenu = new Menu({
  elements: [
    new MenuIcon({
      key: 'home',
      link: '',
      order: 1,
      icon: CamIconType.Dashboard,
      exact: true,
    }),
    new MenuIcon({
      key: 'tier',
      link: '',
      order: 2,
      icon: CamIconType.Contacts,
    }),
    new MenuIcon({
      key: 'visit',
      order: 3,
      icon: CamIconType.Visit,
      link: '',
    }),
    new MenuIcon({
      key: 'relance',
      link: '',
      order: 4,
      icon: CamIconType.Rocket,
    }),
    new MenuIcon({
      key: 'stock',
      link: '',
      order: 5,
      icon: CamIconType.Van,
    }),
    new MenuIcon({
      key: 'doc',
      link: '',
      order: 6,
      icon: CamIconType.Task,
    }),
  ].sort((a, b) => a.order - b.order),
  direction: 'responsive',
});

export const __labelMenu = new Menu({
  elements: [
    new MenuIcon({
      key: 'home',
      label: 'home',
      link: '',
      order: 1,
      exact: true,
      defaultOpen: true,
    }),
    new MenuIcon({
      key: 'tier',
      label: 'contact',
      link: '',
      order: 2,
    }),
    new MenuIcon({
      key: 'visit',
      label: 'Visit',
      order: 3,
      link: '',
    }),
    new MenuIcon({
      key: 'relance',
      label: 'Reminder',
      link: '',
      order: 4,
    }),
    new MenuIcon({
      key: 'stock',
      label: 'Stock',
      link: '',
      order: 5,
    }),
    new MenuIcon({
      key: 'doc',
      label: 'Task',
      link: '',
      order: 6,
    }),
  ].sort((a, b) => a.order - b.order),
  direction: 'responsive',
});

export const __fontIconMenu = new Menu({
  elements: [
    new MenuIcon({
      key: 'home',
      link: '',
      order: 1,
      icon: 'home',
      label: 'Home',
      exact: true,
    }),
    new MenuIcon({
      key: 'tier',
      link: '',
      order: 2,
      icon: 'contacts',
      label: 'Contacts',
    }),
    new MenuIcon({
      key: 'visit',
      order: 3,
      icon: 'calendar',
      label: 'Calendar',
      link: '',
    }),
    new MenuIcon({
      key: 'relance',
      link: '',
      order: 4,
      icon: 'send',
      label: 'Send',
    }),
    new MenuIcon({
      key: 'stock',
      link: '',
      order: 5,
      icon: 'sort-list',
      label: 'Stock',
    }),
    new MenuIcon({
      key: 'doc',
      link: '',
      order: 6,
      icon: 'note',
      label: 'Document',
      callback: () => alert('coucou'),
    }),
  ].sort((a, b) => a.order - b.order),
  direction: 'responsive',
});

export const __contextMenu = new Menu({
  elements: [
    new MenuIcon({
      key: 'home',
      label: 'Home',
      link: '',
      order: 1,
      icon: 'home',
      exact: true,
    }),
    new MenuIcon({
      key: 'tier',
      label: 'Tier',
      link: '',
      order: 2,
      icon: 'contacts',
      disabled: true,
    }),
    new MenuIcon({
      key: 'visit',
      label: 'Visites',
      order: 3,
      icon: 'calendar',
      link: '',
    }),
    new MenuIcon({
      key: 'relance',
      label: 'Relance',
      link: '',
      order: 4,
      icon: 'send',
    }),
    new MenuIcon({
      key: 'stock',
      label: 'Stock',
      link: '',
      order: 5,
      icon: 'sort-list',
    }),
    new MenuIcon({
      key: 'doc',
      label: 'Documents',
      link: '',
      order: 6,
      icon: 'note',
    }),
  ].sort((a, b) => a.order - b.order),
  direction: 'responsive',
});

export const __onClickMenu = new Menu({
  elements: [
    new MenuIcon({
      key: 'home',
      label: 'Home',
      order: 1,
      icon: 'home',
      defaultOpen: true,
      callback: () => {
        alert('Home');
      },
    }),
    new MenuIcon({
      key: 'tier',
      label: 'Tier',
      order: 2,
      icon: 'contacts',
      callback: () => {
        alert('Tier');
      },
    }),
  ].sort((a, b) => a.order - b.order),
  direction: 'responsive',
});

export const __textTooLongMenu = new Menu({
  elements: [
    new MenuIcon({
      key: 'home',
      label:
        'Home oui cest la home mais cest aussi trop long pour tester le text-truncate, du coup: Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux',
      order: 1,
      icon: 'home',
      callback: () => {
        alert('Home');
      },
      translationData: { length: 5 },
    }),
    new MenuIcon({
      key: 'tier',
      label: 'Tier',
      order: 2,
      icon: 'contacts',
      callback: () => {
        alert('Tier');
      },
      translationData: { length: 5 },
    }),
  ].sort((a, b) => a.order - b.order),
  direction: 'responsive',
});
