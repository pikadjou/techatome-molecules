import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { PreviewDocumentDto, PreviewModal } from '@ta/files-basic';
import { ButtonComponent } from '@ta/ui';

import { ComponentDemo } from '../../demo.types';

// `DatePipe` avec `LOCALE_ID` = `fr` exige `registerLocaleData`, absent de `app.config.ts`.
registerLocaleData(localeFr);

@Component({
  standalone: true,
  selector: 'app-ex-ta-files-preview-modal-toggle',
  imports: [ButtonComponent, PreviewModal],
  template: `
    <ta-button (action)="this.open.set(true)">Ouvrir l'aperçu</ta-button>
    <ta-files-preview-modal
      [open]="this.open()"
      [initial]="this.initial"
      (closeEvent)="this.open.set(false)"
    ></ta-files-preview-modal>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesPreviewModalToggleExample {
  open = signal(false);

  initial: PreviewDocumentDto = {
    filename: 'rapport-financier-2025.pdf',
    url: '/assets/showcase/files-basic/rapport-financier-2025.pdf',
    size: 842_311,
    uploadedDate: '2025-11-03T09:15:00',
  };
}

@Component({
  standalone: true,
  selector: 'app-ex-ta-files-preview-modal-gallery',
  imports: [ButtonComponent, PreviewModal],
  template: `
    <ta-button (action)="this.openAt(2)">Ouvrir la galerie</ta-button>
    <ta-files-preview-modal
      [open]="this.open()"
      [initial]="this.initial()"
      [documents]="this.documents"
      overline="Rue du Bailli 84"
      (closeEvent)="this.open.set(false)"
    ></ta-files-preview-modal>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesPreviewModalGalleryExample {
  open = signal(false);
  initial = signal<PreviewDocumentDto | null>(null);

  documents: PreviewDocumentDto[] = [
    {
      filename: 'Séjour',
      description: "Séjour traversant, parquet d'origine",
      url: '/assets/partners/icon/512.png',
    },
    {
      filename: 'Cuisine',
      description: 'Cuisine équipée ouverte sur le séjour',
      url: '/assets/partners/icon/384.png',
    },
    {
      filename: 'Chambre 1',
      description: 'Chambre principale, exposition sud-ouest',
      url: '/assets/partners/icon/192.png',
    },
    {
      filename: 'Chambre 2',
      description: 'Seconde chambre, vue sur le jardin',
      url: '/assets/partners/icon/152.png',
    },
    {
      filename: 'Salle de bain',
      description: 'Salle de bain avec baignoire',
      url: '/assets/partners/icon/144.png',
    },
  ];

  public openAt(index: number) {
    this.initial.set(this.documents[index]);
    this.open.set(true);
  }
}

@Component({
  standalone: true,
  selector: 'app-ex-ta-files-preview-modal-signed',
  imports: [ButtonComponent, PreviewModal],
  template: `
    <ta-button (action)="this.open.set(true)">Ouvrir une adresse signée</ta-button>
    <ta-files-preview-modal
      [open]="this.open()"
      [initial]="this.initial"
      (closeEvent)="this.open.set(false)"
    ></ta-files-preview-modal>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesPreviewModalSignedExample {
  open = signal(false);

  // URL signée sans extension : seul `filename` donne le type.
  initial: PreviewDocumentDto = {
    filename: 'vue-exterieure.png',
    url: '/assets/partners/icon/512.png?token=demo&v=2',
  };
}

export const DEMO: ComponentDemo = {
  id: 'ta-files-preview-modal',
  group: 'Visionneuses',
  summary: 'Visionneuse plein écran : une pièce isolée, ou une galerie parcourable.',
  examples: [
    {
      title: 'Ouverture / fermeture',
      layout: 'stack',
      description:
        '`open` est piloté par le parent ; fermer la visionneuse (croix ou touche `Esc`) émet `closeEvent`. Sans `documents`, ni flèches ni pellicule.',
      component: TaFilesPreviewModalToggleExample,
    },
    {
      title: 'Galerie',
      layout: 'stack',
      description:
        "`documents` fournit la série ; `initial` désigne la pièce ouverte en premier. Le compteur, les flèches, la pellicule et les raccourcis clavier n'apparaissent qu'à partir de deux éléments.",
      component: TaFilesPreviewModalGalleryExample,
    },
    {
      title: 'Adresse sans extension',
      layout: 'stack',
      description:
        "L'URL se termine ici par une signature (`?token=…`) : lue seule, elle ne dit pas de quel type est la pièce. `filename` tranche, et la photo s'affiche au lieu du message « aucun visualiseur ».",
      component: TaFilesPreviewModalSignedExample,
    },
  ],
  notes:
    "Le visualiseur est choisi d'après `filename` en priorité, l'adresse ne servant que de repli : une pièce servie par une API ou derrière une adresse signée n'a pas d'extension dans son URL, et s'en remettre à celle-ci ferait passer une photo pour un format inconnu. La visionneuse pose son propre calque sombre plein écran : elle n'utilise pas `ta-modal`, dont la surface claire fausserait la lecture des couleurs d'une image. `filename` sert de titre et d'étiquette de vignette, `description` de légende sous la scène. `url` doit se terminer par une extension reconnue par `getFileExtension()` pour qu'un visualiseur s'affiche. Le clavier pilote la visionneuse : flèches gauche/droite pour parcourir, `Esc` pour fermer. Ce fichier appelle `registerLocaleData(localeFr)` en tête de module, pour la même raison que `ta-files-preview.demo.ts` (voir ses notes) : l'application elle-même en a toujours besoin, hors du périmètre de cette vitrine.",
};
