/* eslint-disable */
// -----------------------------------------------------------------------------
// Fichier généré par scripts/generate-showcase-metadata.mjs — NE PAS ÉDITER.
// Régénérer : yarn showcase:metadata
// -----------------------------------------------------------------------------

export interface DemoSource {
  /** Template exact du composant d'exemple. */
  template: string;
  /** Corps de sa classe : modèle, données, gestionnaires. Vide s'il n'en a pas. */
  members: string;
}

/** Code source de chaque classe d'exemple, indexé par nom de classe. */
export const DEMO_SOURCES: Record<string, DemoSource> = {
  "TaActionButtonMultipleExample": { template: `<ta-action-button [actions]="this.actions"></ta-action-button>
<p>{{ this.lastAction }}</p>`, members: `lastAction = "Aucune action déclenchée.";

readonly actions: ActionButtonData[] = [
    { icon: "edit", label: "Modifier", callback: () => (this.lastAction = "« Modifier » déclenché.") },
    { icon: "delete", label: "Supprimer", callback: () => (this.lastAction = "« Supprimer » déclenché.") },
    { icon: "settings", label: "Paramètres", callback: () => (this.lastAction = "« Paramètres » déclenché.") },
  ];` },
  "TaActionButtonSingleExample": { template: `<ta-action-button [actions]="this.actions"></ta-action-button>
<p>{{ this.lastAction }}</p>`, members: `lastAction = "Aucune action déclenchée.";

readonly actions: ActionButtonData[] = [
    { icon: "edit", label: "Modifier", callback: () => (this.lastAction = "« Modifier » déclenché.") },
  ];` },
  "TaAddressValuesExample": { template: `<ta-address [address]="this.brussels"></ta-address>
<ta-address [address]="this.paris"></ta-address>
<ta-address [address]="this.noCountry"></ta-address>`, members: `readonly brussels: Address = {
    id: "1",
    street: "Rue de la Loi",
    number: "16",
    city: "Bruxelles",
    zipCode: "1000",
    country: "BE",
    floor: "3",
  };

readonly paris: Address = {
    id: "2",
    street: "Avenue des Champs-Élysées",
    number: "8",
    city: "Paris",
    zipCode: "75008",
    country: "FR",
    floor: "0",
  };

readonly noCountry: Address = {
    id: "3",
    street: "Rue Neuve",
    number: "22",
    city: "Liège",
    zipCode: "4000",
    floor: "1",
  };` },
  "TaBadgeClickableExample": { template: `<ta-badge type="info" value="Cliquer ici" (clickAction)="this.clicks = this.clicks + 1"></ta-badge>
<p>Cliqué {{ this.clicks }} fois.</p>`, members: `clicks = 0;` },
  "TaBadgeIconExample": { template: `<ta-badge type="success" value="Validé" icon="check"></ta-badge>
<ta-badge type="danger" value="Erreur" icon="close"></ta-badge>`, members: `` },
  "TaBadgeTypesExample": { template: `<ta-badge type="primary" value="Primary"></ta-badge>
<ta-badge type="secondary" value="Secondary"></ta-badge>
<ta-badge type="info" value="Info"></ta-badge>
<ta-badge type="success" value="Success"></ta-badge>
<ta-badge type="warning" value="Warning"></ta-badge>
<ta-badge type="danger" value="Danger"></ta-badge>
<ta-badge type="purple" value="Purple"></ta-badge>
<ta-badge type="orange" value="Orange"></ta-badge>`, members: `` },
  "TaBannerTypesExample": { template: `<ta-banner [inline]="true" type="default" message="Message par défaut"></ta-banner>
<ta-banner [inline]="true" type="secondary" message="Message secondaire"></ta-banner>
<ta-banner [inline]="true" type="success" message="Opération réussie"></ta-banner>
<ta-banner [inline]="true" type="warning" message="Vérifiez cette information"></ta-banner>
<ta-banner [inline]="true" type="alert" message="Une erreur est survenue"></ta-banner>
<ta-banner [inline]="true" type="purple" message="Message purple"></ta-banner>
<ta-banner [inline]="true" type="new" message="Nouveauté"></ta-banner>`, members: `` },
  "TaBarChartComparisonExample": { template: `<div style="max-width: 640px">
  <ta-bar-chart [labels]="this.labels" [datasets]="this.datasets" [chartHeight]="280"></ta-bar-chart>
</div>`, members: `labels = ["T1", "T2", "T3", "T4"];

datasets: ChartDataset[] = [
    { label: "Chiffre d'affaires (k€)", data: [180, 210, 195, 260], backgroundColor: ChartColors.blue700 },
    { label: "Charges (k€)", data: [120, 130, 125, 150], backgroundColor: ChartColors.warning },
  ];` },
  "TaBarChartHorizontalExample": { template: `<div style="max-width: 640px">
  <ta-bar-chart
    [labels]="this.labels"
    [datasets]="this.datasets"
    [chartOptions]="this.options"
    [chartHeight]="240"
  ></ta-bar-chart>
</div>`, members: `labels = ["Marketing", "R&D", "Support", "Ventes"];

datasets: ChartDataset[] = [{ label: "Effectif", data: [12, 28, 9, 17], backgroundColor: ChartColors.blue600 }];

options: ChartConfiguration<"bar">["options"] = { indexAxis: "y" };` },
  "TaBenefitItemTypesExample": { template: `<ta-benefit-item type="success" text="Dossier complet, aucune action requise."></ta-benefit-item>
<ta-benefit-item type="warning" text="Un document est encore attendu."></ta-benefit-item>
<ta-benefit-item type="alert" text="La demande a été refusée."></ta-benefit-item>`, members: `` },
  "TaBooleanIconSizesExample": { template: `<ta-boolean-icon [value]="true" size="sm"></ta-boolean-icon>
<ta-boolean-icon [value]="true" size="md"></ta-boolean-icon>
<ta-boolean-icon [value]="true" size="lg"></ta-boolean-icon>`, members: `` },
  "TaBooleanIconStatesExample": { template: `<ta-boolean-icon [value]="true"></ta-boolean-icon>
<ta-boolean-icon [value]="false"></ta-boolean-icon>
<ta-boolean-icon [value]="null"></ta-boolean-icon>`, members: `` },
  "TaBottomSheetTemplateBasicSecureExample": { template: `<div class="flex-column g-space-sm">
  <ta-bottom-sheet-template-basic></ta-bottom-sheet-template-basic>
  <ta-text size="sm">Dernière action exécutée : {{ this.lastAction() ?? "aucune" }}</ta-text>
</div>`, members: `protected readonly lastAction = signal<string | null>(null);

protected readonly actions: BottomSheetData[] = [
    { label: "Renommer", icon: "settings", action: () => this.lastAction.set("Renommer") },
    {
      label: "Supprimer",
      icon: "delete",
      subtitle: "Confirmation requise",
      secure: true,
      action: () => this.lastAction.set("Supprimer (confirmé)"),
    },
  ];

constructor() {
    horizontalData.menu$ = of(this.actions);
  }` },
  "TaBottomSheetTemplateBasicVerticalExample": { template: `<ta-bottom-sheet-template-basic></ta-bottom-sheet-template-basic>`, members: `protected readonly actions: BottomSheetData[] = [
    { label: "Nouveau contact", icon: "person", action: () => {} },
    { label: "Nouvelle visite", icon: "favorite", action: () => {} },
    { label: "Exporter", icon: "download", subtitle: "Format CSV", action: () => {} },
  ];

constructor() {
    verticalData.menu$ = of(this.actions);
  }` },
  "TaBulletNotifExample": { template: `<ta-bullet type="notif">12</ta-bullet>`, members: `` },
  "TaBulletSizesExample": { template: `<ta-bullet type="success" size="xs"></ta-bullet>
<ta-bullet type="success" size="sm"></ta-bullet>
<ta-bullet type="success" size="md"></ta-bullet>
<ta-bullet type="success" size="lg"></ta-bullet>`, members: `` },
  "TaBulletTypesExample": { template: `<ta-bullet type="default"></ta-bullet>
<ta-bullet type="secondary"></ta-bullet>
<ta-bullet type="success"></ta-bullet>
<ta-bullet type="warning"></ta-bullet>
<ta-bullet type="alert"></ta-bullet>
<ta-bullet type="purple"></ta-bullet>
<ta-bullet type="new"></ta-bullet>`, members: `` },
  "TaButtonIconExample": { template: `<ta-button icon="add">Ajouter</ta-button>
<ta-button icon="edit" type="secondary">Modifier</ta-button>
<ta-button icon="delete" type="danger">Supprimer</ta-button>`, members: `` },
  "TaButtonSizesExample": { template: `<ta-button size="small">Small</ta-button>
<ta-button size="medium">Medium</ta-button>
<ta-button size="large">Large</ta-button>`, members: `` },
  "TaButtonStatesExample": { template: `<ta-button state="classic">Classic</ta-button>
<ta-button state="disabled">Disabled</ta-button>
<ta-button state="inactive">Inactive</ta-button>`, members: `` },
  "TaButtonToolReadonlyExample": { template: `<ta-button-tool icon="save" size="lg" [readonly]="false" (action)="this.clicks = this.clicks + 1"></ta-button-tool>
<ta-button-tool icon="save" size="lg" [readonly]="true" (action)="this.clicks = this.clicks + 1"></ta-button-tool>
<p>Clics émis : {{ this.clicks }}</p>`, members: `clicks = 0;` },
  "TaButtonToolSizesExample": { template: `<ta-button-tool icon="settings" size="xs"></ta-button-tool>
<ta-button-tool icon="settings" size="sm"></ta-button-tool>
<ta-button-tool icon="settings" size="md"></ta-button-tool>
<ta-button-tool icon="settings" size="lg"></ta-button-tool>
<ta-button-tool icon="settings" size="xl"></ta-button-tool>
<ta-button-tool icon="settings" size="xxl"></ta-button-tool>
<ta-button-tool icon="settings" size="big"></ta-button-tool>`, members: `` },
  "TaButtonToolStatesExample": { template: `<ta-button-tool icon="edit" size="lg" state="classic" (action)="this.clicks = this.clicks + 1"></ta-button-tool>
<ta-button-tool icon="edit" size="lg" state="disabled" (action)="this.clicks = this.clicks + 1"></ta-button-tool>
<ta-button-tool icon="edit" size="lg" state="inactive" (action)="this.clicks = this.clicks + 1"></ta-button-tool>
<p>Clics émis : {{ this.clicks }}</p>`, members: `clicks = 0;` },
  "TaButtonTypesExample": { template: `<ta-button type="primary">Primary</ta-button>
<ta-button type="secondary">Secondary</ta-button>
<ta-button type="tertiary">Tertiary</ta-button>
<ta-button type="danger">Danger</ta-button>`, members: `` },
  "TaCardBasicExample": { template: `<ta-card>
  <ta-card-header>
    <ta-card-title>Titre de la carte</ta-card-title>
  </ta-card-header>
  <ta-card-content>Contenu projeté dans la carte.</ta-card-content>
</ta-card>`, members: `` },
  "TaCardContentBasicExample": { template: `<ta-card>
  <ta-card-header>
    <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
    <ta-card-subtitle>Publié le 3 septembre 2026</ta-card-subtitle>
  </ta-card-header>
  <ta-card-content>
    Trois jours de marche à travers les forêts et vallées de la Semois, avec bivouac en
    pleine nature et étapes ravitaillées dans les villages traversés.
  </ta-card-content>
  <ta-card-cta>
    <ta-button type="secondary" size="small">Lire l'article</ta-button>
  </ta-card-cta>
</ta-card>`, members: `` },
  "TaCardCtaActionsExample": { template: `<ta-card>
  <ta-card-header>
    <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
  </ta-card-header>
  <ta-card-content>Trois jours de marche à travers les forêts et vallées de la Semois.</ta-card-content>
  <ta-card-cta>
    <ta-button type="secondary" size="small">Lire l'article</ta-button>
    <ta-button type="tertiary" size="small">Partager</ta-button>
  </ta-card-cta>
</ta-card>`, members: `` },
  "TaCardDirectionExample": { template: `<ta-card directionCard="vertical">
  <ta-card-content>vertical</ta-card-content>
</ta-card>
<ta-card directionCard="horizontal">
  <ta-card-content>horizontal</ta-card-content>
</ta-card>`, members: `` },
  "TaCardFlagsExample": { template: `<ta-card [highlight]="true">
  <ta-card-content>highlight</ta-card-content>
</ta-card>
<ta-card [shadow]="false">
  <ta-card-content>shadow désactivée</ta-card-content>
</ta-card>
<ta-card [isNew]="true">
  <ta-card-content>isNew</ta-card-content>
</ta-card>`, members: `` },
  "TaCardHeaderCompositionExample": { template: `<ta-card>
  <ta-card-header>
    <ta-card-tag><ta-badge value="Nouveau" type="success"></ta-badge></ta-card-tag>
    <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
    <ta-card-subtitle>Publié le 3 septembre 2026</ta-card-subtitle>
  </ta-card-header>
  <ta-card-content>Trois jours de marche à travers les forêts et vallées de la Semois.</ta-card-content>
</ta-card>`, members: `` },
  "TaCardHeaderMinimalExample": { template: `<ta-card>
  <ta-card-header>
    <ta-card-title>Sans étiquette ni sous-titre</ta-card-title>
  </ta-card-header>
  <ta-card-content>L'en-tête n'affiche que ce que le parent projette : ici, seul le titre.</ta-card-content>
</ta-card>`, members: `` },
  "TaCardImageSrcExample": { template: `<ta-card>
  <ta-card-image src="https://picsum.photos/seed/ardennes/400/200"></ta-card-image>
  <ta-card-header>
    <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
  </ta-card-header>
  <ta-card-content>Trois jours de marche à travers les forêts et vallées de la Semois.</ta-card-content>
</ta-card>
<ta-card>
  <ta-card-image src="https://picsum.photos/seed/bruges/400/200"></ta-card-image>
  <ta-card-header>
    <ta-card-title>Week-end à Bruges</ta-card-title>
  </ta-card-header>
  <ta-card-content>Canaux, chocolatiers et architecture flamande au cœur de la ville.</ta-card-content>
</ta-card>`, members: `` },
  "TaCardSubtitleAbsentExample": { template: `<ta-card>
  <ta-card-header>
    <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
  </ta-card-header>
  <ta-card-content>Sans sous-titre projeté, l'espace qu'il occuperait n'est simplement pas rendu.</ta-card-content>
</ta-card>`, members: `` },
  "TaCardSubtitlePresentExample": { template: `<ta-card>
  <ta-card-header>
    <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
    <ta-card-subtitle>Publié le 3 septembre 2026</ta-card-subtitle>
  </ta-card-header>
  <ta-card-content>Trois jours de marche à travers les forêts et vallées de la Semois.</ta-card-content>
</ta-card>`, members: `` },
  "TaCardTagDangerExample": { template: `<ta-card>
  <ta-card-header>
    <ta-card-tag><ta-badge value="Complet" type="danger"></ta-badge></ta-card-tag>
    <ta-card-title>Week-end à Bruges</ta-card-title>
  </ta-card-header>
  <ta-card-content>Canaux, chocolatiers et architecture flamande au cœur de la ville.</ta-card-content>
</ta-card>`, members: `` },
  "TaCardTagSuccessExample": { template: `<ta-card>
  <ta-card-header>
    <ta-card-tag><ta-badge value="Nouveau" type="success"></ta-badge></ta-card-tag>
    <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
  </ta-card-header>
  <ta-card-content>Trois jours de marche à travers les forêts et vallées de la Semois.</ta-card-content>
</ta-card>`, members: `` },
  "TaCardTitleBasicExample": { template: `<ta-card>
  <ta-card-header>
    <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
  </ta-card-header>
  <ta-card-content>Trois jours de marche à travers les forêts et vallées de la Semois.</ta-card-content>
</ta-card>`, members: `` },
  "TaCivilityValuesExample": { template: `<div>
  <span>Sir</span>
  <ta-civility [civility]="this.Civility.Sir"></ta-civility>
</div>
<div>
  <span>Madame</span>
  <ta-civility [civility]="this.Civility.Madame"></ta-civility>
</div>
<div>
  <span>Dear</span>
  <ta-civility [civility]="this.Civility.Dear"></ta-civility>
</div>
<div>
  <span>Unknown (rien ne s'affiche)</span>
  <ta-civility [civility]="this.Civility.Unknown"></ta-civility>
</div>`, members: `readonly Civility = Civility;` },
  "TaCmsEditorBlocksTypesExample": { template: `<ta-cms-editor-blocks [blocks]="this.blocks"></ta-cms-editor-blocks> `, members: `blocks: OutputBlockData[] = [
    { id: "h1", type: "header", data: { text: "Titre de section", level: 2 } },
    {
      id: "p1",
      type: "paragraph",
      data: { text: "Un paragraphe avec du <b>texte en gras</b> et de l'<i>italique</i>." },
    },
    {
      id: "l1",
      type: "list",
      data: { style: "unordered", items: ["Premier point", "Deuxième point", "Troisième point"] },
    },
    {
      id: "l2",
      type: "list",
      data: { style: "ordered", items: ["Étape une", "Étape deux"] },
    },
    {
      id: "q1",
      type: "quote",
      data: { text: "La simplicité est la sophistication suprême.", caption: "Léonard de Vinci" },
    },
    { id: "d1", type: "delimiter", data: {} },
    {
      id: "i1",
      type: "image",
      data: { file: { url: "https://picsum.photos/seed/cms-editor-blocks/640/360" } },
    },
  ];` },
  "TaCmsEditorInputEmptyExample": { template: `<ta-cms-editor-input [placeholder]="'Commencez à écrire…'"></ta-cms-editor-input> `, members: `` },
  "TaCmsEditorInputInitialExample": { template: `<ta-cms-editor-input
  [initValue]="this.initialBlocks"
  [users]="this.users"
  (changed)="this.onChanged($event)"
></ta-cms-editor-input>
<p>Blocs actuels : {{ this.blockCount() }}</p>`, members: `initialBlocks: WysiswgBlockData[] = [
    { id: "h1", type: "header", data: { text: "Article d'exemple", level: 2 } },
    {
      id: "p1",
      type: "paragraph",
      data: { text: "Cet éditeur repose sur <b>EditorJS</b> et prend en charge plusieurs types de blocs." },
    },
    {
      id: "l1",
      type: "list",
      data: {
        style: "unordered",
        items: ["Titres", "Mise en forme (gras, italique)", "Citations et séparateurs", "Mentions d'utilisateur (@)"],
      },
    },
  ];

users = [
    { id: "u1", name: "Alice Martin" },
    { id: "u2", name: "Bob Dupont" },
    { id: "u3", name: "Claire Fontaine" },
  ];

blockCount = signal(this.initialBlocks.length);

onChanged(data: { blocks: WysiswgBlockData[] }) {
    this.blockCount.set(data.blocks.length);
  }` },
  "TaCmsEditorInputMaxHeightExample": { template: `<ta-cms-editor-input [initValue]="this.blocks" [maxHeight]="true" [enabledTools]="this.tools">
</ta-cms-editor-input>`, members: `blocks: WysiswgBlockData[] = [
    { id: "h1", type: "header", data: { text: "Sommaire", level: 2 } },
    { id: "p1", type: "paragraph", data: { text: "Premier paragraphe." } },
    { id: "p2", type: "paragraph", data: { text: "Deuxième paragraphe." } },
    { id: "p3", type: "paragraph", data: { text: "Troisième paragraphe." } },
    {
      id: "p4",
      type: "paragraph",
      data: { text: "Quatrième paragraphe : le défilement apparaît dans le cadre de l'éditeur, pas dans la page." },
    },
  ];

tools: EditorToolType[] = ["header", "list", "quote"];` },
  "TaCmsEditorInputSaveExample": { template: `<div class="flex-row g-space-sm">
  <ta-button size="small" (action)="this.requestSave$.next()">Enregistrer</ta-button>
  <ta-button size="small" type="secondary" (action)="this.clear$.next()">Vider</ta-button>
</div>
<ta-cms-editor-input
  [initValue]="this.initialBlocks"
  [requestSave$]="this.requestSave$"
  [clear$]="this.clear$"
  (saved)="this.onSaved($event)"
></ta-cms-editor-input>
@if (this.lastSaved(); as saved) {
  <pre>{{ saved | json }}</pre>
}`, members: `initialBlocks: WysiswgBlockData[] = [
    { id: "p1", type: "paragraph", data: { text: "Modifiez ce texte, puis cliquez sur « Enregistrer »." } },
  ];

requestSave$ = new Subject<void>();

clear$ = new Subject<void>();

lastSaved = signal<EditorInputSavedData | null>(null);

onSaved(data: EditorInputSavedData) {
    this.lastSaved.set(data);
  }` },
  "TaCmsErrorExample": { template: `<ta-cms [contentType]="'privacy-policy'"></ta-cms> `, members: `` },
  "TaCmsLoadedExample": { template: `<ta-cms [contentType]="'privacy-policy'"></ta-cms> `, members: `` },
  "TaCmsLoadingExample": { template: `<ta-cms [contentType]="'privacy-policy'"></ta-cms> `, members: `` },
  "TaComponentSelectorModalBasicExample": { template: `<ta-button (action)="this.isOpen.set(true)">Choisir une couleur</ta-button>
<ta-component-selector-modal
  [open]="this.isOpen()"
  [inputData]="this.model"
  (closeEvent)="this.isOpen.set(false)"
></ta-component-selector-modal>
<ng-template #picker let-selectedValue$="selectedValue$">
  <div class="flex-column g-space-sm p-space-md">
    @for (option of this.options; track option) {
      <div class="pointer p-space-sm" (click)="selectedValue$.next(option)">{{ option }}</div>
    }
  </div>
</ng-template>`, members: `@ViewChild("picker") private _picker!: TemplateRef<TypeComponentInputToken>;

readonly options = ["Rouge", "Vert", "Bleu"];

isOpen = signal(false);

model = new InputComponent({ key: "color", label: "Couleur" });

ngAfterViewInit(): void {
    this.model.template = this._picker;
  }` },
  "TaContactInformationEmptyValueExample": { template: `<ta-contact-information [value]="null" icon="call">
  <div>Seul le contenu projeté reste visible : sans valeur, l'en-tête (icône + texte) disparaît.</div>
</ta-contact-information>`, members: `` },
  "TaContactInformationIconsExample": { template: `<ta-contact-information value="+32 470 00 00 00" icon="call">
  <div>Disponible du lundi au vendredi, 9h-17h.</div>
</ta-contact-information>
<ta-contact-information value="contact@techatome.be" [localIcon]="this.TaIconType.Email">
  <div>Réponse sous 48h ouvrées.</div>
</ta-contact-information>`, members: `readonly TaIconType = TaIconType;` },
  "TaContainerValidationConfirmExample": { template: `<ta-container-validation
  title="Supprimer le document ?"
  subtitle="Cette action est définitive et ne peut pas être annulée."
  (validated)="this.confirmations = this.confirmations + 1"
>
  <ta-button type="danger" icon="delete" [stopPropagationActivation]="false">Supprimer</ta-button>
</ta-container-validation>
<p>Suppressions confirmées : {{ this.confirmations }}</p>`, members: `confirmations = 0;` },
  "TaContainerValidationDisabledExample": { template: `<ta-container-validation [disabled]="true" (validated)="this.confirmations = this.confirmations + 1">
  <ta-button type="danger" icon="delete" [stopPropagationActivation]="false">Supprimer (désactivé)</ta-button>
</ta-container-validation>
<p>Suppressions confirmées : {{ this.confirmations }}</p>`, members: `confirmations = 0;` },
  "TaContainerValidationInlineExample": { template: `<div class="card-like">
  <p><strong>Sophie Lenoir</strong> — sophie.lenoir&#64;mail.be</p>
  <ta-container-validation
    variant="inline"
    title="Retirer ce représentant ?"
    subtitle="La personne perdra l'accès aux biens de la société."
    (validated)="this.confirmations = this.confirmations + 1"
  >
    <ta-button type="danger" icon="person_remove" size="small" [stopPropagationActivation]="false">
      Retirer
    </ta-button>
  </ta-container-validation>
</div>
<p>Retraits confirmés : {{ this.confirmations }}</p>`, members: `confirmations = 0;` },
  "TaContextMenuGridExample": { template: `<ta-context-menu [menu]="this.menu"></ta-context-menu>`, members: `readonly menu = new Menu<MenuIcon>({
    elements: [
      new MenuIcon({ key: "home", label: "Tableau de bord", icon: "home" }),
      new MenuIcon({ key: "contacts", label: "Contacts", icon: "person", disabled: true }),
      new MenuIcon({ key: "notifications", label: "Notifications", icon: "notifications" }),
      new MenuIcon({ key: "settings", label: "Paramètres", icon: "settings" }),
      new MenuIcon({ key: "export", label: "Exporter", icon: "download" }),
      new MenuIcon({ key: "search", label: "Rechercher", icon: "search" }),
    ],
  });` },
  "TaCopyLinkButtonSizesExample": { template: `<ta-copy-link-button size="small" value="https://techatome.be">Copier</ta-copy-link-button>
<ta-copy-link-button size="medium" value="https://techatome.be">Copier</ta-copy-link-button>
<ta-copy-link-button size="large" value="https://techatome.be">Copier</ta-copy-link-button>`, members: `` },
  "TaCopyLinkButtonStatesExample": { template: `<ta-copy-link-button state="classic" (action)="this.clicks = this.clicks + 1">Classic</ta-copy-link-button>
<ta-copy-link-button state="disabled" (action)="this.clicks = this.clicks + 1">Disabled</ta-copy-link-button>
<ta-copy-link-button state="inactive" (action)="this.clicks = this.clicks + 1">Inactive</ta-copy-link-button>
<p>Copies déclenchées : {{ this.clicks }}</p>`, members: `clicks = 0;` },
  "TaCriticityValuesExample": { template: `<ta-criticity [criticity]="this.CriticityStatus.Unknown"></ta-criticity>
<ta-criticity [criticity]="this.CriticityStatus.P1"></ta-criticity>
<ta-criticity [criticity]="this.CriticityStatus.P2"></ta-criticity>
<ta-criticity [criticity]="this.CriticityStatus.P3"></ta-criticity>`, members: `readonly CriticityStatus = CriticityStatus;` },
  "TaCultureEmptyExample": { template: `<ta-culture [cultures]="[]"></ta-culture>`, members: `` },
  "TaCultureListExample": { template: `<ta-culture [cultures]="this.cultures"></ta-culture>`, members: `readonly cultures: Culture[] = [Culture.FR_BE, Culture.NL_NL, Culture.EN_EN];` },
  "TaDashboardCardKpisExample": { template: `<ta-dashboard-card icon="trending_up">
  <ta-card-title>Chiffre d'affaires</ta-card-title>
  <ta-card-subtitle>+12 % ce mois-ci</ta-card-subtitle>
  <ta-text size="sm">Comparé au mois précédent.</ta-text>
</ta-dashboard-card>
<ta-dashboard-card icon="group">
  <ta-card-title>Utilisateurs actifs</ta-card-title>
  <ta-card-subtitle>1 234 comptes</ta-card-subtitle>
</ta-dashboard-card>
<ta-dashboard-card icon="inventory_2">
  <ta-card-title>Commandes</ta-card-title>
  <ta-card-subtitle>56 en attente</ta-card-subtitle>
</ta-dashboard-card>`, members: `` },
  "TaDefaultPanelOverlayExample": { template: `<ta-overlay-panel [panelConfig]="{ menuComponent: this.defaultPanel }">
  <ng-template #panelTrigger>
    <ta-button type="secondary" icon="expand_more" [stopPropagationActivation]="false">Ouvrir le panneau</ta-button>
  </ng-template>
  <ng-template #panelContent>
    <div class="p-space-md">Contenu projeté par #panelContent, affiché par ta-default-panel via l'injection MENU_TEMPLATE.</div>
  </ng-template>
</ta-overlay-panel>`, members: `readonly defaultPanel = TaDefaultPanelComponent;` },
  "TaDepartmentIconListWithNameExample": { template: `<ta-department-icon-list [departments]="this.departments" [withName]="true"></ta-department-icon-list>`, members: `readonly departments: Department[] = [
    { id: 1, name: "Menuiserie", iconPath: "/assets/partners/icon/icon.png" },
    { id: 2, name: "Ferronnerie", iconPath: null },
    { id: 3, name: "Électricité", iconPath: null },
  ];` },
  "TaDepartmentIconListWithoutNameExample": { template: `<ta-department-icon-list [departments]="this.departments"></ta-department-icon-list>`, members: `readonly departments: Department[] = [
    { id: 1, name: "Menuiserie", iconPath: "/assets/partners/icon/icon.png" },
    { id: 2, name: "Ferronnerie", iconPath: null },
  ];` },
  "TaDepartmentProfessionsFullExample": { template: `<ta-department-professions [professions]="this.professions"></ta-department-professions>`, members: `readonly professions = ["Menuisier", "Électricien", "Plombier", "Peintre", "Carreleur"];` },
  "TaDepartmentProfessionsMaxVisibleExample": { template: `<ta-department-professions [professions]="this.professions" [maxVisible]="2"></ta-department-professions>`, members: `readonly professions = ["Menuisier", "Électricien", "Plombier", "Peintre", "Carreleur"];` },
  "TaDepartmentsDefaultExample": { template: `<ta-departments [departments]="this.departments" [professions]="this.professions"></ta-departments>`, members: `readonly departments: Department[] = [
    { id: 1, name: "Menuiserie", iconPath: "/assets/partners/icon/icon.png" },
    { id: 2, name: "Ferronnerie", iconPath: null },
  ];

readonly professions = ["Menuisier", "Ferronnier", "Chef de chantier"];` },
  "TaDocumentsListDefaultExample": { template: `<ta-documents-list [documentsIds]="this.documentIds"></ta-documents-list>`, members: `documentIds = ["1", "2", "3", "4", "5"];` },
  "TaDocumentsListDeleteExample": { template: `<ta-documents-list
  [documentsIds]="this.documentIds"
  [actions]="'delete'"
  (remove)="this.onRemove($event)"
></ta-documents-list>`, members: `documentIds = ["1", "2", "3"];

onRemove(id: string) {
    console.log("Document à retirer :", id);
  }` },
  "TaDocumentsListEmptyExample": { template: `<ta-documents-list [documentsIds]="[]" [emptyMessage]="'Aucun document pour ce dossier.'"></ta-documents-list>`, members: `` },
  "TaDocumentsListReadonlyExample": { template: `<ta-documents-list [documentsIds]="this.documentIds" [actions]="'delete'" [readonly]="true"></ta-documents-list>`, members: `documentIds = ["1", "2"];` },
  "TaDocumentsListSelectionExample": { template: `<ta-documents-list
  [documentsIds]="this.documentIds"
  [actions]="'select'"
  [defaultSelected]="this.defaultSelected"
  (checkedFilesChanged)="this.onSelectionChanged($event)"
></ta-documents-list>`, members: `documentIds = ["1", "2", "3", "4", "5"];

defaultSelected = ["2", "4"];

onSelectionChanged(files: InputUploadValue[]) {
    console.log("Documents sélectionnés :", files);
  }` },
  "TaDoughnutChartDevicesExample": { template: `<div style="max-width: 420px">
  <ta-doughnut-chart [labels]="this.labels" [datasets]="this.datasets" [chartHeight]="280"></ta-doughnut-chart>
</div>`, members: `labels = ["Ordinateur", "Mobile", "Tablette"];

datasets: ChartDataset[] = [
    {
      data: [55, 35, 10],
      backgroundColor: [ChartColors.blue700, ChartColors.blue400, ChartColors.warning],
    },
  ];` },
  "TaDualButtonFullExample": { template: `<ta-dual-button [isFull]="true" [first]="this.first" [second]="this.second"></ta-dual-button>`, members: `readonly first: DualButtonInput = { icon: "save", label: "Enregistrer", callback: () => undefined };

readonly second: DualButtonInput = { icon: "delete", label: "Abandonner", callback: () => undefined };` },
  "TaDualButtonTypesExample": { template: `<ta-dual-button type="primary" [first]="this.first" [second]="this.second"></ta-dual-button>
<ta-dual-button type="secondary" [first]="this.first" [second]="this.second"></ta-dual-button>`, members: `readonly first: DualButtonInput = { icon: "check", label: "Confirmer", callback: () => undefined };

readonly second: DualButtonInput = { icon: "close", label: "Annuler", callback: () => undefined };` },
  "TaDurationLongExample": { template: `<ta-duration [startDate]="'2023-04-15'" [endDate]="'2026-09-08'"></ta-duration>`, members: `` },
  "TaDurationShortExample": { template: `<ta-duration [startDate]="'2026-09-08T09:00:00'" [endDate]="'2026-09-08T09:40:00'"></ta-duration>`, members: `` },
  "TaEditFieldBasicExample": { template: `<ta-edit-field [getInput]="this.getInput" (newValue)="this.onNewValue($event)">
  {{ this.name() }}
</ta-edit-field>`, members: `name = signal("Jean Dupont");

getInput = () => new InputTextBox({ key: "name", value: this.name() });

onNewValue(value: unknown) {
    this.name.set(value as string);
  }` },
  "TaEditFieldLoadingExample": { template: `<ta-edit-field [getInput]="this.getInput" [isLoading]="true">En cours de sauvegarde…</ta-edit-field>`, members: `getInput = () => new InputTextBox({ key: "value" });` },
  "TaEditFieldStatesExample": { template: `<ta-edit-field [getInput]="this.getInput" [disabled]="true">Valeur non modifiable</ta-edit-field>
<ta-edit-field [getInput]="this.getInput" [withBorder]="false">Sans bordure</ta-edit-field>`, members: `getInput = () => new InputTextBox({ key: "value" });` },
  "TaEmptyContentExample": { template: `<ta-empty [isEmpty]="false" text="Aucun résultat">
  <ul>
    <li>Devis n°2024-018</li>
    <li>Devis n°2024-021</li>
  </ul>
</ta-empty>`, members: `` },
  "TaEmptyDefaultExample": { template: `<ta-empty text="Aucun résultat" subtitle="Essayez d'élargir vos critères de recherche.">
  <ta-button emptyAction type="secondary" icon="refresh">Réinitialiser les filtres</ta-button>
</ta-empty>`, members: `` },
  "TaEmptyLightExample": { template: `<ta-empty [isLight]="true" text="Aucun document"></ta-empty>`, members: `` },
  "TaErrorNoRetryExample": { template: `<ta-error message="Accès refusé." [showRetry]="false"></ta-error>`, members: `` },
  "TaErrorPassthroughExample": { template: `<ta-error>
  <p>Aucun message d'erreur : le contenu projeté s'affiche à la place.</p>
</ta-error>`, members: `` },
  "TaErrorRetryExample": { template: `<ta-error message="Impossible de charger les données." (retry)="this.retries = this.retries + 1"></ta-error>
<p>Tentatives de réessai : {{ this.retries }}</p>`, members: `retries = 0;` },
  "TaExcelViewerDefaultExample": { template: `<div style="height: 420px">
  <ta-excel-viewer style="display: block; height: 100%" [file]="this.file"></ta-excel-viewer>
</div>`, members: `file: PreviewDocumentDto = {
    filename: "tableau-couts-projet.xlsx",
    url: "/assets/showcase/files-basic/tableau-couts-projet.xlsx",
    size: 96_207,
    uploadedDate: "2025-08-21T11:30:00",
  };` },
  "TaExpandableTextLongExample": { template: `<ta-expandable-text [height]="60" style="width: 240px">
  Un texte nettement plus long que les 60px de height autorisés : sa hauteur réelle
  (mesurée sur l'élément projeté) dépasse ce seuil, hasTooBigText devient vrai et le
  bouton de bascule apparaît pour déplier ou replier le contenu.
</ta-expandable-text>`, members: `` },
  "TaExpandableTextShortExample": { template: `<ta-expandable-text [height]="100" style="width: 240px">
  Un texte court, dont la hauteur réelle reste sous les 100px imposés par height.
</ta-expandable-text>`, members: `` },
  "TaExpansionPanelSectionsExample": { template: `<ta-expansion-panel [templates]="this.panels"></ta-expansion-panel>

<ng-template #titleInfo>Informations générales</ng-template>
<ng-template #contentInfo>
  <p>Premier panneau, replié par défaut comme tous les panneaux de mat-accordion.</p>
</ng-template>

<ng-template #titleBilling>Facturation</ng-template>
<ng-template #contentBilling>
  <p>Second panneau, indépendant du premier — chacun s'ouvre et se ferme séparément.</p>
</ng-template>`, members: `@ViewChild("titleInfo", { static: true }) private _titleInfo!: TemplateRef<unknown>;

@ViewChild("contentInfo", { static: true }) private _contentInfo!: TemplateRef<unknown>;

@ViewChild("titleBilling", { static: true }) private _titleBilling!: TemplateRef<unknown>;

@ViewChild("contentBilling", { static: true }) private _contentBilling!: TemplateRef<unknown>;

panels: ExpansionPanelInput[] = [];

ngOnInit(): void {
    this.panels = [
      { title: this._titleInfo, content: this._contentInfo },
      { title: this._titleBilling, content: this._contentBilling },
    ];
  }` },
  "TaFileImageExtensionsExample": { template: `<ta-file-image fileName="contrat-prestation.docx"></ta-file-image>
<ta-file-image fileName="rapport-financier.pdf"></ta-file-image>
<ta-file-image fileName="tableau-couts.xlsx"></ta-file-image>
<ta-file-image fileName="photo-chantier.jpg"></ta-file-image>
<ta-file-image fileName="dossier-sans-extension"></ta-file-image>`, members: `` },
  "TaFileImageSizesExample": { template: `<ta-file-image fileName="rapport.pdf" size="sm"></ta-file-image>
<ta-file-image fileName="rapport.pdf" size="md"></ta-file-image>
<ta-file-image fileName="rapport.pdf" size="lg"></ta-file-image>`, members: `` },
  "TaFilesDisplayDocumentsExample": { template: `<ta-files-display
  [files$]="this.files$"
  [menu]="this.menu"
  [tempFiles]="[]"
  [fileType]="'Document'"
  (fileSelected)="this.onFileSelected($event)"
  (moreInformationSelected)="this.onMoreInformation($event)"
></ta-files-display>`, members: `menu = new Menu({
    elements: [
      new MenuIcon({ key: "documents", label: "Documents", order: 1, icon: TaIconType.Doc, link: "" }),
      new MenuIcon({ key: "images", label: "Images", order: 2, icon: TaIconType.Image, link: "" }),
    ],
  });

files$: Observable<FileData[]> = of([
    { id: 1, url: "#", type: "Document", fileExtension: EFileExtension.PDF, name: "rapport-annuel.pdf" },
    { id: 2, url: "#", type: "Document", fileExtension: EFileExtension.Word, name: "contrat-prestation.docx" },
    { id: 3, url: "#", type: "Document", fileExtension: EFileExtension.Excel, name: "tableau-de-bord.xlsx" },
  ]);

onFileSelected(file: FileData & { index: number }) {
    console.log("Fichier sélectionné :", file);
  }

onMoreInformation(file: FileData) {
    console.log("Plus d'informations sur :", file);
  }` },
  "TaFilesDisplayImagesExample": { template: `<ta-files-display [files$]="this.files$" [menu]="this.menu" [tempFiles]="[]" [fileType]="'Image'">
</ta-files-display>`, members: `menu = new Menu({
    elements: [
      new MenuIcon({ key: "documents", label: "Documents", order: 1, icon: TaIconType.Doc, link: "" }),
      new MenuIcon({ key: "images", label: "Images", order: 2, icon: TaIconType.Image, link: "" }),
    ],
  });

files$: Observable<FileData[]> = of([
    {
      id: 10,
      url: "https://picsum.photos/seed/files-display-1/800/600.jpg",
      thumbnailUrl: "https://picsum.photos/seed/files-display-1/120/90.jpg",
      type: "Image",
      fileExtension: EFileExtension.Image,
      name: "paysage-montagne.jpg",
    },
    {
      id: 11,
      url: "https://picsum.photos/seed/files-display-2/800/600.jpg",
      thumbnailUrl: "https://picsum.photos/seed/files-display-2/120/90.jpg",
      type: "Image",
      fileExtension: EFileExtension.Image,
      name: "portrait-ville.jpg",
    },
  ]);` },
  "TaFilesDisplayNoAddExample": { template: `<ta-files-display
  [files$]="this.files$"
  [menu]="this.menu"
  [tempFiles]="[]"
  [fileType]="'Document'"
  [canAddFile]="false"
></ta-files-display>`, members: `menu = new Menu({
    elements: [new MenuIcon({ key: "documents", label: "Documents", order: 1, icon: TaIconType.Doc, link: "" })],
  });

files$: Observable<FileData[]> = of([
    { id: 30, url: "#", type: "Document", fileExtension: EFileExtension.PDF, name: "conditions-generales.pdf" },
  ]);` },
  "TaFilesDisplayTempFilesExample": { template: `<ta-files-display [files$]="this.files$" [menu]="this.menu" [tempFiles]="this.tempFiles" [fileType]="'Image'">
</ta-files-display>`, members: `menu = new Menu({
    elements: [new MenuIcon({ key: "images", label: "Images", order: 1, icon: TaIconType.Image, link: "" })],
  });

files$: Observable<FileData[]> = of([]);

tempFiles: FileData[] = [
    {
      id: 20,
      url: "https://picsum.photos/seed/files-display-temp/400/300.jpg",
      thumbnailUrl: "https://picsum.photos/seed/files-display-temp/120/90.jpg",
      type: "Image",
      fileExtension: EFileExtension.Image,
      isLoading: true,
      name: "photo-en-cours-envoi.jpg",
    },
  ];` },
  "TaFilesEditDefaultExample": { template: `<div class="flex-column g-space-sm">
  <ta-button (action)="this.save$.next(null)">Enregistrer la retouche</ta-button>
  <div style="height: 500px">
    <ta-files-edit
      style="display: block; height: 100%"
      [imagePath]="this.imagePath"
      [saveImage$]="this.save$"
      (savedImage)="this.onSaved($event)"
    ></ta-files-edit>
  </div>
  @if (this.previewUrl(); as url) {
    <p>Dernier export :</p>
    <img [src]="url" style="max-width: 200px" />
  }
</div>`, members: `imagePath = "/assets/partners/logo/logo.png";

save$ = new Subject<null>();

previewUrl = signal<string | null>(null);

private _cdr = inject(ChangeDetectorRef);

constructor() {
    setTimeout(() => this._cdr.detectChanges(), 300);
  }

onSaved(blob: Blob) {
    this.previewUrl.set(URL.createObjectURL(blob));
  }` },
  "TaFilesListDeletableExample": { template: `<ta-files-list [files]="this.files" [canDeleteFile]="true" (fileDeleted)="this.onFileDeleted($event)"></ta-files-list>`, members: `files: FileData[] = [
    {
      id: 301,
      url: "#",
      type: "Document",
      fileExtension: EFileExtension.Word,
      name: "contrat-prestation-signe.docx",
      fileMetaData: {
        fileName: "contrat-prestation-signe.docx",
        fileType: { translatedValue: "Contrat" },
        fileSize: 128_744,
        owner: { naming: { trigram: "MDL" } },
      },
    },
    {
      id: 302,
      url: "#",
      type: "Document",
      fileExtension: EFileExtension.Excel,
      name: "tableau-couts-projet.xlsx",
      fileMetaData: {
        fileName: "tableau-couts-projet.xlsx",
        fileType: { translatedValue: "Tableau de bord" },
        fileSize: 96_207,
        owner: { naming: { trigram: "JCL" } },
      },
    },
  ];

onFileDeleted(file: FileData) {
    console.log("Fichier à retirer :", file);
  }` },
  "TaFilesListDocumentsExample": { template: `<ta-files-list
  [files]="this.files"
  (fileSelected)="this.onFileSelected($event)"
  (moreInformationSelected)="this.onMoreInformation($event)"
></ta-files-list>`, members: `files: FileData[] = [
    {
      id: 101,
      url: "/assets/showcase/files-basic/rapport-financier-2025.pdf",
      type: "Document",
      fileExtension: EFileExtension.PDF,
      name: "rapport-financier-2025.pdf",
      fileMetaData: {
        fileName: "rapport-financier-2025.pdf",
        fileType: { translatedValue: "Facture" },
        fileSize: 842_311,
        owner: { naming: { trigram: "GLB" } },
      },
    },
    {
      id: 102,
      url: "#",
      type: "Document",
      fileExtension: EFileExtension.Word,
      name: "contrat-prestation-signe.docx",
      fileMetaData: {
        fileName: "contrat-prestation-signe.docx",
        fileType: { translatedValue: "Contrat" },
        fileSize: 128_744,
        owner: { naming: { trigram: "MDL" } },
      },
    },
    {
      id: 103,
      url: "#",
      type: "Document",
      fileExtension: EFileExtension.Excel,
      name: "tableau-couts-projet.xlsx",
      fileMetaData: {
        fileName: "tableau-couts-projet.xlsx",
        fileType: { translatedValue: "Tableau de bord" },
        fileSize: 96_207,
        owner: { naming: { trigram: "JCL" } },
      },
    },
    {
      id: 104,
      url: "#",
      type: "Document",
      fileExtension: EFileExtension.Unknown,
      name: "plans-archives-2024.zip",
      fileMetaData: {
        fileName: "plans-archives-2024.zip",
        fileType: { translatedValue: "Archive" },
        fileSize: 12_480_500,
        owner: { naming: { trigram: "SDW" } },
      },
    },
  ];

onFileSelected(file: FileData & { index: number }) {
    console.log("Fichier sélectionné :", file);
  }

onMoreInformation(file: FileData) {
    console.log("Plus d'informations sur :", file);
  }` },
  "TaFilesListImagesExample": { template: `<ta-files-list [files]="this.files"></ta-files-list>`, members: `files: FileData[] = [
    {
      id: 201,
      url: "/assets/partners/logo/logo.png",
      thumbnailUrl: "/assets/partners/logo/logo.png",
      type: "Image",
      fileExtension: EFileExtension.Image,
      name: "photo-chantier-facade.jpg",
    },
    {
      id: 202,
      url: "/assets/showcase/files-basic/rapport-financier-2025.pdf",
      type: "Document",
      fileExtension: EFileExtension.PDF,
      name: "rapport-financier-2025.pdf",
      fileMetaData: {
        fileName: "rapport-financier-2025.pdf",
        fileType: { translatedValue: "Facture" },
        fileSize: 842_311,
        owner: { naming: { trigram: "GLB" } },
      },
    },
  ];` },
  "TaFilesPreviewImageExample": { template: `<div style="height: 460px">
  <ta-files-preview style="height: 100%" [initial]="this.initial"></ta-files-preview>
</div>`, members: `initial: PreviewDocumentDto = {
    filename: "logo.png",
    url: "/assets/partners/logo/logo.png",
    size: 24_600,
    uploadedDate: "2025-09-30T08:47:00",
  };` },
  "TaFilesPreviewModalGalleryExample": { template: `<ta-button (action)="this.openAt(2)">Ouvrir la galerie</ta-button>
<ta-files-preview-modal
  [open]="this.open()"
  [initial]="this.initial()"
  [documents]="this.documents"
  overline="Rue du Bailli 84"
  (closeEvent)="this.open.set(false)"
></ta-files-preview-modal>`, members: `open = signal(false);

initial = signal<PreviewDocumentDto | null>(null);

documents: PreviewDocumentDto[] = [
    {
      filename: "Séjour",
      description: "Séjour traversant, parquet d'origine",
      url: "/assets/partners/icon/512.png",
    },
    {
      filename: "Cuisine",
      description: "Cuisine équipée ouverte sur le séjour",
      url: "/assets/partners/icon/384.png",
    },
    {
      filename: "Chambre 1",
      description: "Chambre principale, exposition sud-ouest",
      url: "/assets/partners/icon/192.png",
    },
    {
      filename: "Chambre 2",
      description: "Seconde chambre, vue sur le jardin",
      url: "/assets/partners/icon/152.png",
    },
    {
      filename: "Salle de bain",
      description: "Salle de bain avec baignoire",
      url: "/assets/partners/icon/144.png",
    },
  ];

public openAt(index: number) {
    this.initial.set(this.documents[index]);
    this.open.set(true);
  }` },
  "TaFilesPreviewModalSignedExample": { template: `<ta-button (action)="this.open.set(true)">Ouvrir une adresse signée</ta-button>
<ta-files-preview-modal
  [open]="this.open()"
  [initial]="this.initial"
  (closeEvent)="this.open.set(false)"
></ta-files-preview-modal>`, members: `open = signal(false);

initial: PreviewDocumentDto = {
    filename: "vue-exterieure.png",
    url: "/assets/partners/icon/512.png?token=demo&v=2",
  };` },
  "TaFilesPreviewModalToggleExample": { template: `<ta-button (action)="this.open.set(true)">Ouvrir l'aperçu</ta-button>
<ta-files-preview-modal
  [open]="this.open()"
  [initial]="this.initial"
  (closeEvent)="this.open.set(false)"
></ta-files-preview-modal>`, members: `open = signal(false);

initial: PreviewDocumentDto = {
    filename: "rapport-financier-2025.pdf",
    url: "/assets/showcase/files-basic/rapport-financier-2025.pdf",
    size: 842_311,
    uploadedDate: "2025-11-03T09:15:00",
  };` },
  "TaFilesPreviewPdfExample": { template: `<div style="height: 460px">
  <ta-files-preview style="height: 100%" [initial]="this.initial"></ta-files-preview>
</div>`, members: `initial: PreviewDocumentDto = {
    filename: "rapport-financier-2025.pdf",
    url: "/assets/showcase/files-basic/rapport-financier-2025.pdf",
    size: 842_311,
    uploadedDate: "2025-11-03T09:15:00",
  };` },
  "TaFilesPreviewUnsupportedExample": { template: `<div style="height: 460px">
  <ta-files-preview style="height: 100%" [initial]="this.initial"></ta-files-preview>
</div>`, members: `initial: PreviewDocumentDto = {
    filename: "plans-archives-2024.zip",
    url: "/assets/showcase/files-basic/plans-archives-2024.zip",
    size: 12_480_500,
    uploadedDate: "2025-06-12T16:00:00",
  };` },
  "TaFilesUploadActionButtonExample": { template: `<ta-files-upload [features]="this.features" (filesPicked)="this.onFilesPicked($event)"></ta-files-upload>
<p>Fichiers reçus : {{ this.pickedCount() }}</p>`, members: `features: Feature[] = ["take-pic", "upload-pic", "upload-file"];

pickedCount = signal(0);

onFilesPicked(files: FileStructure[]) {
    this.pickedCount.update((count) => count + files.length);
  }` },
  "TaFilesUploadSeparateButtonsExample": { template: `<ta-files-upload
  [features]="this.features"
  [showInActionButton]="false"
  [canSelectMultipleFiles]="true"
></ta-files-upload>`, members: `features: Feature[] = ["upload-pic", "upload-file"];` },
  "TaFilterContainerFormExample": { template: `<div style="max-width: 360px">
  <ta-filter-container [form]="this.form" (filtersSelected)="this.apply($event)"></ta-filter-container>
</div>
@if (this.result !== null) {
  <pre>{{ this.result | json }}</pre>
} @else {
  <p>Aucun filtre validé pour l'instant.</p>
}`, members: `readonly form: InputBase<any>[] = [
    new InputDropdown({
      key: "status",
      label: "Statut",
      options$: of([
        { id: "active", name: "Actif" },
        { id: "inactive", name: "Inactif" },
      ]),
    }),
    new InputTextBox({ key: "city", label: "Ville" }),
  ];

result: unknown = null;

apply(data: unknown): void {
    this.result = data;
  }` },
  "TaFiltersContainerWorkingExample": { template: `<ta-filters-container
  class="flex-full"
  [form]="this.form"
  [activeFilter]="this.activeFilter"
  (filtersSelected)="this.apply($event)"
  (removedFilter)="this.remove($event)"
>
  <div class="flex-column g-space-xs p-space-sm">
    @for (client of this.filteredClients; track client.id) {
      <div>{{ client.name }} — {{ client.city }}</div>
    } @empty {
      <div>Aucun client ne correspond aux filtres.</div>
    }
  </div>
</ta-filters-container>`, members: `private readonly _clients: Client[] = [
    { id: "1", name: "Atelier Dupont", city: "Bruxelles", status: "active" },
    { id: "2", name: "Studio Levert", city: "Namur", status: "active" },
    { id: "3", name: "Menuiserie Colle", city: "Bruxelles", status: "inactive" },
    { id: "4", name: "Ferronnerie Wallon", city: "Liège", status: "active" },
  ];

readonly form: InputBase<any>[] = [
    new InputDropdown({
      key: "status",
      label: "Statut",
      options$: of([
        { id: "active", name: "Actif" },
        { id: "inactive", name: "Inactif" },
      ]),
    }),
    new InputTextBox({ key: "city", label: "Ville" }),
  ];

activeFilter: ActiveFilterTag[] = [];

filteredClients: Client[] = this._clients;

private _applied: Record<string, string | null> = {};

apply(data: Record<string, string | null> | null): void {
    this._applied = data ?? {};
    this._refresh();
  }

remove(tag: ActiveFilterTag): void {
    this._applied = { ...this._applied, [tag.id]: null };
    const field = this.form.find((input) => input.key === tag.id);
    if (field) {
      field.value = null;
    }
    this._refresh();
  }

private _refresh(): void {
    const status = this._applied["status"];
    const city = this._applied["city"];

    const tags: ActiveFilterTag[] = [];
    if (status) {
      tags.push({ id: "status", name: \`Statut : \${status === "active" ? "Actif" : "Inactif"}\` });
    }
    if (city) {
      tags.push({ id: "city", name: \`Ville : \${city}\` });
    }
    this.activeFilter = tags;

    this.filteredClients = this._clients.filter(
      (client) => (!status || client.status === status) && (!city || client.city.toLowerCase().includes(city.toLowerCase())),
    );
  }` },
  "TaFiltersTagRemovableExample": { template: `<ta-filters-tag [activeFilter]="this.activeFilters" (removedFilter)="this.remove($event)"></ta-filters-tag>
@if (this.activeFilters.length === 0) {
  <p>Tous les filtres ont été retirés.</p>
}`, members: `activeFilters: ActiveFilterTag[] = [
    { id: "status", name: "Statut : Actif" },
    { id: "city", name: "Ville : Bruxelles" },
    { id: "type", name: "Type : Client" },
  ];

remove(filter: ActiveFilterTag): void {
    this.activeFilters = this.activeFilters.filter((f) => f.id !== filter.id);
  }` },
  "TaFlagIconCodesExample": { template: `<div class="flex-column align-center g-space-xs">
  <ta-flag-icon code="fr"></ta-flag-icon>
  <ta-text size="sm">fr</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-flag-icon code="en"></ta-flag-icon>
  <ta-text size="sm">en</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-flag-icon code="nl"></ta-flag-icon>
  <ta-text size="sm">nl</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-flag-icon code="es"></ta-flag-icon>
  <ta-text size="sm">es</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-flag-icon code="de"></ta-flag-icon>
  <ta-text size="sm">de</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-flag-icon code="it"></ta-flag-icon>
  <ta-text size="sm">it</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-flag-icon code="pt"></ta-flag-icon>
  <ta-text size="sm">pt</ta-text>
</div>`, members: `` },
  "TaFlagIconSizesExample": { template: `<div class="flex-column align-center g-space-xs">
  <ta-flag-icon code="fr" size="xs"></ta-flag-icon>
  <ta-text size="sm">xs (20px)</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-flag-icon code="fr" size="sm"></ta-flag-icon>
  <ta-text size="sm">sm (24px, défaut)</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-flag-icon code="fr" size="md"></ta-flag-icon>
  <ta-text size="sm">md (32px)</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-flag-icon code="fr" size="lg"></ta-flag-icon>
  <ta-text size="sm">lg (48px)</ta-text>
</div>`, members: `` },
  "TaFlagIconUnknownCodeExample": { template: `<div class="flex-column align-center g-space-xs">
  <ta-flag-icon code="fr"></ta-flag-icon>
  <ta-text size="sm">code="fr"</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-flag-icon code="zz"></ta-flag-icon>
  <ta-text size="sm">code="zz" : rien ne s'affiche</ta-text>
</div>`, members: `` },
  "TaFontIconNamesExample": { template: `<div class="flex-column align-center g-space-xs">
  <ta-font-icon name="home" type="lg"></ta-font-icon>
  <ta-text size="sm">home</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-font-icon name="search" type="lg"></ta-font-icon>
  <ta-text size="sm">search</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-font-icon name="settings" type="lg"></ta-font-icon>
  <ta-text size="sm">settings</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-font-icon name="delete" type="lg"></ta-font-icon>
  <ta-text size="sm">delete</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-font-icon name="favorite" type="lg"></ta-font-icon>
  <ta-text size="sm">favorite</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-font-icon name="download" type="lg"></ta-font-icon>
  <ta-text size="sm">download</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-font-icon name="person" type="lg"></ta-font-icon>
  <ta-text size="sm">person</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-font-icon name="notifications" type="lg"></ta-font-icon>
  <ta-text size="sm">notifications</ta-text>
</div>`, members: `` },
  "TaFontIconSizesExample": { template: `<div class="flex-column align-center g-space-xs">
  <ta-font-icon name="home" type="xs"></ta-font-icon>
  <ta-text size="sm">xs</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-font-icon name="home" type="sm"></ta-font-icon>
  <ta-text size="sm">sm</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-font-icon name="home" type="md"></ta-font-icon>
  <ta-text size="sm">md (défaut)</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-font-icon name="home" type="lg"></ta-font-icon>
  <ta-text size="sm">lg</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-font-icon name="home" type="xl"></ta-font-icon>
  <ta-text size="sm">xl</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-font-icon name="home" type="xxl"></ta-font-icon>
  <ta-text size="sm">xxl</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-font-icon name="home" type="big"></ta-font-icon>
  <ta-text size="sm">big</ta-text>
</div>`, members: `` },
  "TaFormBasicExample": { template: `<ta-form [inputs]="this.inputs" (valid)="this.result.set($event)" (isFormValid)="this.formValid.set($event)"></ta-form>
<p>Formulaire valide : {{ this.formValid() }}</p>
@if (this.result(); as result) {
  <pre>{{ result | json }}</pre>
}`, members: `result = signal<unknown>(null);

formValid = signal(false);

inputs: InputBase<any>[] = [
    new InputPanel({
      key: "identity",
      label: "Identité",
      containerClass: ["highlight-title"],
      contentClass: "flex-column g-space-md",
      children: [
        new InputTextBox({ key: "firstName", label: "Prénom", validators: [Validators.required] }),
        new InputEmail({ key: "email", label: "Courriel", validators: [Validators.required] }),
        new InputDropdown({
          key: "role",
          label: "Rôle",
          options$: of([
            { id: "admin", name: "Administrateur" },
            { id: "editor", name: "Éditeur" },
          ]),
        }),
        new InputCheckBox({ key: "newsletter", label: "Recevoir la newsletter" }),
      ],
    }),
  ];` },
  "TaFormErrorExample": { template: `<ta-form [inputs]="this.inputs" [error]="this.error"></ta-form>`, members: `inputs: InputBase<any>[] = [new InputTextBox({ key: "value", label: "Valeur" })];

error: IInputsError = { status: ENotificationCode.error, message: "La sauvegarde a échoué côté serveur." };

private _cdr = inject(ChangeDetectorRef);

constructor() {
    setTimeout(() => this._cdr.detectChanges());
  }` },
  "TaFormLabelBasicExample": { template: `<ta-form-label [input]="this.optional"></ta-form-label>
<ta-form-label [input]="this.required"></ta-form-label>`, members: `optional = { label: "Nom", validators: [] };

required = { label: "Courriel", validators: [Validators.required] };` },
  "TaFormLabelMarginExample": { template: `<ta-form-label [input]="this.model" [withMarginBottom]="true"></ta-form-label>
<ta-form-label [input]="this.model" [withMarginBottom]="false"></ta-form-label>`, members: `model = { label: "Adresse", validators: [] };` },
  "TaFormLiveExample": { template: `<ta-form [inputs]="this.inputs" [canDisplayButton]="false" [onLive]="true" (valid)="this.result.set($event)"></ta-form>
@if (this.result(); as result) {
  <pre>{{ result | json }}</pre>
}`, members: `result = signal<unknown>(null);

inputs: InputBase<any>[] = [new InputTextBox({ key: "search", label: "Rechercher" })];` },
  "TaFormLoadingExample": { template: `<ta-form [inputs]="this.inputs" [loader]="true"></ta-form>`, members: `inputs: InputBase<any>[] = [new InputTextBox({ key: "value", label: "Valeur" })];` },
  "TaGridContainerBasicExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.members" [colsMetaData]="this.columns">
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (member of items; track member.id) {
      <p>{{ member.name }} — {{ member.role }} ({{ member.active ? "actif" : "inactif" }})</p>
    }
  </ng-template>
</ta-grid-container>`, members: `readonly gridId = "demo-grid-container-basic";

readonly members = MEMBERS;

readonly columns: ColMetaData<Member>[] = [
    { name: "name", type: ParameterType.String, isSearchField: true },
    { name: "role", type: ParameterType.Enum, enumValues: ROLES },
    { name: "active", type: ParameterType.Boolean },
  ];` },
  "TaGridContainerPresetExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.members" [colsMetaData]="this.columns" [preset]="this.presets">
  <ta-grid-control
    [gridId]="this.gridId"
    [show]="{ switchView: false, filters: false, preset: true, group: false }"
  ></ta-grid-control>
  <ta-grid-tags [gridId]="this.gridId"></ta-grid-tags>
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (member of items; track member.id) {
      <div class="flex-row g-space-sm align-center">
        <span>{{ member.name }}</span>
        <ta-badge [value]="member.role" type="secondary"></ta-badge>
      </div>
    }
  </ng-template>
</ta-grid-container>`, members: `readonly gridId = "demo-grid-container-preset";

readonly members = MEMBERS;

readonly presets = PRESETS;

readonly columns: ColMetaData<Member>[] = [
    { name: "name", type: ParameterType.String, isSearchField: true },
    { name: "role", type: ParameterType.Enum, enumValues: ROLES, showOnSearch: true },
    { name: "active", type: ParameterType.Boolean, showOnSearch: true },
  ];` },
  "TaGridControlCompactExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns" [preset]="this.presets">
  <ta-grid-control
    [gridId]="this.gridId"
    [compact]="true"
    [show]="{ switchView: true, filters: true, preset: true, group: false, sort: true }"
  ></ta-grid-control>
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (order of items; track order.id) {
      <p>{{ order.reference }}</p>
    }
  </ng-template>
</ta-grid-container>`, members: `readonly gridId = "demo-grid-control-compact";

readonly orders = ORDERS;

readonly columns = COLUMNS;

readonly presets = PRESETS;` },
  "TaGridControlFullExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns" [preset]="this.presets">
  <ta-grid-control [gridId]="this.gridId"></ta-grid-control>
  <ta-grid-tags [gridId]="this.gridId"></ta-grid-tags>
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (order of items; track order.id) {
      <p>{{ order.reference }} — {{ order.customer }}</p>
    }
  </ng-template>
</ta-grid-container>`, members: `readonly gridId = "demo-grid-control-full";

readonly orders = ORDERS;

readonly columns = COLUMNS;

readonly presets = PRESETS;` },
  "TaGridCountDefaultExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.estates" [colsMetaData]="this.columns">
  <div class="flex-row g-space-sm align-center">
    <ta-grid-search [gridId]="this.gridId"></ta-grid-search>
    <ta-grid-count [gridId]="this.gridId"></ta-grid-count>
  </div>
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (estate of items; track estate.id) {
      <p>{{ estate.name }} — {{ estate.city }}</p>
    }
  </ng-template>
</ta-grid-container>`, members: `readonly gridId = "demo-grid-count";

readonly estates = ESTATES;

readonly columns = COLUMNS;` },
  "TaGridCountLabelExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.estates" [colsMetaData]="this.columns">
  <ta-grid-count [gridId]="this.gridId" label="demo.grid.count.estates"></ta-grid-count>
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (estate of items; track estate.id) {
      <p>{{ estate.name }}</p>
    }
  </ng-template>
</ta-grid-container>`, members: `readonly gridId = "demo-grid-count-label";

readonly estates = ESTATES;

readonly columns = COLUMNS;` },
  "TaGridDensityExample": { template: `<p class="p-space-sm">Confortable (par défaut)</p>
<ta-grid-container [gridId]="this.comfortableId" [initialData]="this.orders" [colsMetaData]="this.columns">
  <ta-grid-control
    [gridId]="this.comfortableId"
    [show]="{ switchView: true, filters: false, preset: false, group: false }"
  ></ta-grid-control>
  <ta-grid [gridId]="this.comfortableId" [cardTemplate]="cardTpl" density="comfortable"></ta-grid>
</ta-grid-container>

<p class="p-space-sm">Compacte</p>
<ta-grid-container [gridId]="this.compactId" [initialData]="this.orders" [colsMetaData]="this.columns">
  <ta-grid-control
    [gridId]="this.compactId"
    [show]="{ switchView: true, filters: false, preset: false, group: false }"
  ></ta-grid-control>
  <ta-grid [gridId]="this.compactId" [cardTemplate]="cardTpl" density="compact"></ta-grid>
</ta-grid-container>

<ng-template #cardTpl let-items="items">
  @for (order of items; track order.id) {
    <p>{{ order.reference }}</p>
  }
</ng-template>`, members: `@ViewChildren(TaGridControlComponent) private _controls!: QueryList<TaGridControlComponent>;

readonly comfortableId = "demo-grid-density-comfortable";

readonly compactId = "demo-grid-density-compact";

readonly orders = ORDERS;

readonly columns: ColMetaData<Order>[] = [
    { name: "reference", type: ParameterType.String, width: "120px" },
    { name: "customer", type: ParameterType.String },
    { name: "amount", type: ParameterType.Number, align: "right", width: "100px" },
  ];

ngAfterViewInit(): void {
    this._controls.forEach((control) => control.switchView("grid"));
  }` },
  "TaGridFiltersPanelOpenExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
  <ta-button (action)="this.isOpen.set(true)">Ouvrir les filtres</ta-button>
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (order of items; track order.id) {
      <p>{{ order.reference }} — {{ order.customer }} — {{ order.amount }} €</p>
    }
  </ng-template>

  @if (this.isOpen()) {
    <ta-grid-filters-panel [gridId]="this.gridId" (closeEvent)="this.isOpen.set(false)"></ta-grid-filters-panel>
  }
</ta-grid-container>`, members: `readonly gridId = "demo-grid-filters-panel";

readonly orders = ORDERS;

readonly isOpen = signal(false);

readonly columns: ColMetaData<Order>[] = [
    { name: "reference", type: ParameterType.String },
    { name: "customer", type: ParameterType.String, showOnSearch: true },
    { name: "category", type: ParameterType.Enum, enumValues: CATEGORIES, showOnSearch: true },
    { name: "amount", type: ParameterType.Number, showOnSearch: true, align: "right" },
  ];` },
  "TaGridFormBasicExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
  <ta-grid-form [gridId]="this.gridId"></ta-grid-form>
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (order of items; track order.id) {
      <p>{{ order.reference }} — {{ order.customer }} — {{ order.amount }} €</p>
    }
  </ng-template>
</ta-grid-container>`, members: `readonly gridId = "demo-grid-form-basic";

readonly orders = ORDERS;

readonly columns = COLUMNS;` },
  "TaGridFormCompactExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
  <ta-grid-form
    [gridId]="this.gridId"
    [showTitle]="false"
    [showReset]="false"
    [showResultCount]="false"
  ></ta-grid-form>
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (order of items; track order.id) {
      <p>{{ order.reference }}</p>
    }
  </ng-template>
</ta-grid-container>`, members: `readonly gridId = "demo-grid-form-compact";

readonly orders = ORDERS;

readonly columns = COLUMNS;` },
  "TaGridFormGroupExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
  <ta-grid-form [gridId]="this.gridId" [showGroup]="true"></ta-grid-form>
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (order of items; track order.id) {
      <p>{{ order.reference }}</p>
    }
  </ng-template>
</ta-grid-container>`, members: `readonly gridId = "demo-grid-form-group";

readonly orders = ORDERS;

readonly columns = COLUMNS;` },
  "TaGridHighlightFiltersDefaultExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
  <ta-grid-highlight-filters [gridId]="this.gridId"></ta-grid-highlight-filters>
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (order of items; track order.id) {
      <p>{{ order.reference }} — {{ order.customer }} — {{ order.amount }} €</p>
    }
  </ng-template>
</ta-grid-container>`, members: `readonly gridId = "demo-grid-highlight-default";

readonly orders = ORDERS;

readonly columns = COLUMNS;` },
  "TaGridHighlightFiltersNoCountExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
  <ta-grid-highlight-filters [gridId]="this.gridId" [showResultCount]="false"></ta-grid-highlight-filters>
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (order of items; track order.id) {
      <p>{{ order.reference }}</p>
    }
  </ng-template>
</ta-grid-container>`, members: `readonly gridId = "demo-grid-highlight-no-count";

readonly orders = ORDERS;

readonly columns = COLUMNS;` },
  "TaGridSearchDefaultExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
  <ta-grid-search [gridId]="this.gridId"></ta-grid-search>
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (order of items; track order.id) {
      <p>{{ order.reference }} — {{ order.customer }} — {{ order.amount }} €</p>
    }
  </ng-template>
</ta-grid-container>`, members: `readonly gridId = "demo-grid-search-default";

readonly orders = ORDERS;

readonly columns = COLUMNS;` },
  "TaGridSearchPlaceholderExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
  <ta-grid-search [gridId]="this.gridId" placeholder="Rechercher une commande"></ta-grid-search>
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (order of items; track order.id) {
      <p>{{ order.reference }}</p>
    }
  </ng-template>
</ta-grid-container>`, members: `readonly gridId = "demo-grid-search-placeholder";

readonly orders = ORDERS;

readonly columns = COLUMNS;` },
  "TaGridSelectionExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
  <ta-grid-control
    [gridId]="this.gridId"
    [show]="{ switchView: true, filters: false, preset: false, group: false }"
  ></ta-grid-control>
  <ta-grid
    [gridId]="this.gridId"
    [cardTemplate]="cardTpl"
    [showSelection]="true"
    (selectionChanged)="this.selectedOrders.set($event)"
  ></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (order of items; track order.id) {
      <p>{{ order.reference }}</p>
    }
  </ng-template>
</ta-grid-container>

<p class="p-space-sm">
  {{ this.selectedOrders().length }} commande(s) sélectionnée(s)
  @if (this.selectedOrders().length > 0) {
    : {{ this.selectedReferences() }}
  }
</p>`, members: `@ViewChild(TaGridControlComponent) private _control!: TaGridControlComponent;

readonly gridId = "demo-grid-selection";

readonly orders = ORDERS;

readonly columns: ColMetaData<Order>[] = [
    { name: "reference", type: ParameterType.String, width: "120px" },
    { name: "customer", type: ParameterType.String },
    { name: "category", type: ParameterType.Enum, enumValues: CATEGORIES, width: "130px" },
    { name: "amount", type: ParameterType.Number, align: "right", width: "100px" },
  ];

readonly selectedOrders = signal<Order[]>([]);

ngAfterViewInit(): void {
    this._control.switchView("grid");
  }

selectedReferences(): string {
    return this.selectedOrders()
      .map((order) => order.reference)
      .join(", ");
  }` },
  "TaGridTableExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
  <ta-grid-control
    [gridId]="this.gridId"
    [show]="{ switchView: true, filters: false, preset: false, group: false }"
  ></ta-grid-control>
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl" (rowClicked)="this.selected.set($event)"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (order of items; track order.id) {
      <p>{{ order.reference }} — {{ order.customer }}</p>
    }
  </ng-template>

  <ng-template #actionsTpl let-row>
    <div class="flex-row g-space-xs" (click)="$event.stopPropagation()">
      <ta-button type="tertiary" size="small" (action)="this.onRowAction('Détail', row)">Détail</ta-button>
      <ta-button type="tertiary" size="small" (action)="this.onRowAction('Rembourser', row)">Rembourser</ta-button>
    </div>
  </ng-template>
</ta-grid-container>

@if (this.selected(); as order) {
  <p class="p-space-sm">Ligne cliquée : {{ order.reference }} — {{ order.amount }} €</p>
}
@if (this.lastAction(); as action) {
  <p class="p-space-sm">Action de ligne : {{ action }}</p>
}`, members: `@ViewChild("actionsTpl", { static: true }) actionsTpl!: TemplateRef<{ $implicit: Order; value: number }>;

@ViewChild(TaGridControlComponent) private _control!: TaGridControlComponent;

readonly gridId = "demo-grid-table";

readonly orders = ORDERS;

readonly selected = signal<Order | null>(null);

readonly lastAction = signal<string | null>(null);

get columns(): ColMetaData<Order>[] {
    return [
      { name: "reference", type: ParameterType.String, width: "120px" },
      { name: "customer", type: ParameterType.String },
      { name: "category", type: ParameterType.Enum, enumValues: CATEGORIES, width: "130px" },
      { name: "orderedAt", type: ParameterType.DateTime, width: "120px" },
      { name: "amount", type: ParameterType.Number, align: "right", width: "100px" },
      { name: "paid", type: ParameterType.Boolean, align: "center", width: "80px" },
      // Réutilise la clé "id" pour la seule colonne d'actions : ColMetaData.name
      // doit être une clé de T, il n'existe pas de clé synthétique pour ce cas.
      { name: "id", type: ParameterType.Number, width: "190px", align: "right", template: this.actionsTpl },
    ];
  }

ngAfterViewInit(): void {
    this._control.switchView("grid");
  }

onRowAction(action: string, order: Order): void {
    this.lastAction.set(\`\${action} — \${order.reference}\`);
  }` },
  "TaGridTagsActiveExample": { template: `<ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns" [preset]="this.presets">
  <div class="flex-row g-space-sm align-center">
    <ta-grid-search [gridId]="this.gridId"></ta-grid-search>
    <ta-grid-control
      [gridId]="this.gridId"
      [show]="{ switchView: false, filters: false, preset: true, group: true }"
    ></ta-grid-control>
  </div>
  <ta-grid-tags [gridId]="this.gridId"></ta-grid-tags>
  <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

  <ng-template #cardTpl let-items="items">
    @for (order of items; track order.id) {
      <p>{{ order.reference }} — {{ order.customer }} — {{ order.amount }} €</p>
    }
  </ng-template>
</ta-grid-container>`, members: `readonly gridId = "demo-grid-tags";

readonly orders = ORDERS;

readonly columns = COLUMNS;

readonly presets = PRESETS;` },
  "TaGuardAuthorizedExample": { template: `<ta-guard [feature]="'reports'"><ta-text>Contenu réservé aux utilisateurs autorisés.</ta-text></ta-guard>`, members: `constructor() {
    // \`level\` non fourni retombe sur \`'authorize'\` (voir \`isGuardValid$()\`), qui
    // teste l'appartenance de \`feature\` à \`TaPermissionsService.features\`.
    inject(TaPermissionsService).set({ features: ["reports"] }, true);
  }` },
  "TaGuardDeniedExample": { template: `<ta-guard [level]="'authenticated'"><ta-text>Contenu réservé aux utilisateurs authentifiés.</ta-text></ta-guard>`, members: `` },
  "TaGuardPreviewExample": { template: `<ta-guard [feature]="'reports'" [preview]="true"><ta-text>Contenu réservé aux utilisateurs autorisés.</ta-text></ta-guard>`, members: `` },
  "TaGuardSilentExample": { template: `<ta-guard [feature]="'reports'" [canDisplayErrorMessage]="false"><ta-text>Contenu réservé aux utilisateurs autorisés.</ta-text></ta-guard>`, members: `` },
  "TaHourDateLineFullExample": { template: `<ta-hour-date-line [startDate]="this.start" [endDate]="this.end"></ta-hour-date-line>`, members: `readonly start = new Date("2026-09-08T09:00:00");

readonly end = new Date("2026-09-08T17:30:00");` },
  "TaHourDateLineNoEndExample": { template: `<ta-hour-date-line [startDate]="this.start" [endDate]="null"></ta-hour-date-line>`, members: `readonly start = new Date("2026-09-08T09:00:00");` },
  "TaImageViewerDefaultExample": { template: `<div style="height: 420px">
  <ta-image-viewer [file]="this.file"></ta-image-viewer>
</div>`, members: `file: PreviewDocumentDto = {
    filename: "logo.png",
    url: "/assets/partners/logo/logo.png",
    size: 24_600,
    uploadedDate: "2025-09-30T08:47:00",
  };` },
  "TaInlineProfileDataWithLogoExample": { template: `<ta-inline-profile-data
  [profile]="this.profile"
  [userLogo]="{ user: { firstname: 'Claire', lastname: 'Bernard' }, size: 'md' }"
></ta-inline-profile-data>`, members: `readonly profile = {
    title: { main: "Claire Bernard", second: "Cheffe de chantier", sub: "Équipe rénovation" },
    email: "claire.bernard@example.com",
    phoneNumber: "+32 470 11 22 33",
  };` },
  "TaInlineProfileDataWithoutLogoExample": { template: `<ta-inline-profile-data [profile]="this.profile"></ta-inline-profile-data>`, members: `readonly profile = { email: "contact@example.com" };` },
  "TaInputCheckboxDisabledExample": { template: `<ta-input-checkbox [input]="this.model" [standalone]="true"></ta-input-checkbox> `, members: `model = new InputCheckBox({ key: "locked", label: "Non modifiable", value: true, disabled: true });` },
  "TaInputCheckboxRequiredExample": { template: `<ta-input-checkbox [input]="this.model" [standalone]="true"></ta-input-checkbox> `, members: `model = new InputCheckBox({
    key: "terms",
    label: "J'accepte les conditions",
    validators: [Validators.required],
  });` },
  "TaInputCheckboxValuesExample": { template: `<ta-input-checkbox [input]="this.unchecked" [standalone]="true"></ta-input-checkbox>
<ta-input-checkbox [input]="this.checked" [standalone]="true"></ta-input-checkbox>`, members: `unchecked = new InputCheckBox({ key: "unchecked", label: "Non coché" });

checked = new InputCheckBox({ key: "checked", label: "Coché", value: true });` },
  "TaInputChoicesBasicExample": { template: `<ta-input-choices [input]="this.model" [standalone]="true"></ta-input-choices> `, members: `model = new InputChoices({
    key: "role",
    label: "Rôle",
    value: ["admin"],
    options$: of([
      { id: "admin", name: "Administrateur", data: null },
      { id: "editor", name: "Éditeur", data: null },
      { id: "viewer", name: "Lecteur", data: null },
    ]),
  });` },
  "TaInputChoicesDisabledExample": { template: `<ta-input-choices [input]="this.model" [standalone]="true"></ta-input-choices> `, members: `model = new InputChoices({
    key: "role-locked",
    label: "Rôle imposé",
    value: ["admin"],
    disabled: true,
    options$: of([{ id: "admin", name: "Administrateur", data: null }]),
  });` },
  "TaInputChoicesMultipleExample": { template: `<ta-input-choices [input]="this.model" [standalone]="true"></ta-input-choices> `, members: `model = new InputChoices({
    key: "tags",
    label: "Étiquettes",
    multiple: true,
    withSearch: true,
    value: ["urgent", "suivi"],
    options$: of([
      { id: "urgent", name: "Urgent", data: null },
      { id: "suivi", name: "À suivre", data: null },
      { id: "archive", name: "Archivé", data: null },
    ]),
  });` },
  "TaInputColorPickerBasicExample": { template: `<ta-input-color-picker [input]="this.model" [standalone]="true"></ta-input-color-picker>
<p>Valeur du modèle : {{ this.model.value }}</p>`, members: `model = new InputTextBox({ key: "color", label: "Couleur", value: "#2f6fd1" });` },
  "TaInputComponentBasicExample": { template: `<ta-input-component [input]="this.model" [standalone]="true"></ta-input-component>
<ng-template #picker let-selectedValue$="selectedValue$">
  <div class="flex-column g-space-sm">
    @for (option of this.options; track option) {
      <div class="pointer p-space-sm" (click)="selectedValue$.next(option)">{{ option }}</div>
    }
  </div>
</ng-template>`, members: `@ViewChild("picker") private _picker!: TemplateRef<TypeComponentInputToken>;

readonly options = ["Rouge", "Vert", "Bleu"];

model = new InputComponent({ key: "color", label: "Couleur" });

ngAfterViewInit(): void {
    this.model.template = this._picker;
  }` },
  "TaInputComponentDisabledExample": { template: `<ta-input-component [input]="this.model" [standalone]="true"></ta-input-component>
<ng-template #picker let-selectedValue$="selectedValue$">
  <div class="flex-column g-space-sm">
    @for (option of this.options; track option) {
      <div class="pointer p-space-sm" (click)="selectedValue$.next(option)">{{ option }}</div>
    }
  </div>
</ng-template>`, members: `@ViewChild("picker") private _picker!: TemplateRef<TypeComponentInputToken>;

readonly options = ["Rouge", "Vert", "Bleu"];

model = new InputComponent({ key: "color-locked", label: "Couleur imposée", value: "Bleu", disabled: true });

ngAfterViewInit(): void {
    this.model.template = this._picker;
  }` },
  "TaInputCultureBasicExample": { template: `<ta-input-culture [input]="this.model" [standalone]="true"></ta-input-culture> `, members: `model = new InputCulture({ key: "culture", label: "Langue", value: Culture.FR_FR.toString() });` },
  "TaInputCultureDisabledExample": { template: `<ta-input-culture [input]="this.model" [standalone]="true"></ta-input-culture> `, members: `model = new InputCulture({ key: "culture-locked", label: "Langue imposée", value: Culture.EN_EN.toString(), disabled: true });` },
  "TaInputDatePickerBasicExample": { template: `<ta-input-date-picker [input]="this.model" [standalone]="true"></ta-input-date-picker> `, members: `model = new InputDatePicker({ key: "date", label: "Date de rendez-vous" });

constructor() {
    // \`IInputDatePicker.value\` est typé \`string | { start; end }\`, pas \`Date\`,
    // alors que la classe elle-même stocke un \`Date\` (\`onDateSelect()\` assigne
    // \`this.input.value = event.value\`, un \`Date\`) : impossible de passer une
    // valeur initiale \`Date\` dans les options du constructeur. L'assigner après
    // coup passe par le même setter et fonctionne, car \`createFormControl()\`
    // ne lit \`this.value\` qu'à \`ngOnInit\`, plus tard.
    this.model.value = new Date(2026, 5, 15);
  }` },
  "TaInputDatePickerBoundsExample": { template: `<ta-input-date-picker [input]="this.model" [standalone]="true"></ta-input-date-picker> `, members: `model = new InputDatePicker({ key: "date-min", label: "Date au plus tôt aujourd'hui", minDate: "today" });` },
  "TaInputDatePickerDisabledExample": { template: `<ta-input-date-picker [input]="this.model" [standalone]="true"></ta-input-date-picker> `, members: `model = new InputDatePicker({ key: "date-locked", label: "Non modifiable", disabled: true });

constructor() {
    // Voir \`TaInputDatePickerBasicExample\` : \`value\` n'accepte pas de \`Date\` dans
    // les options du constructeur, seulement après coup.
    this.model.value = new Date(2026, 0, 1);
  }` },
  "TaInputDatePickerRangeExample": { template: `<ta-input-date-picker [input]="this.model" [standalone]="true"></ta-input-date-picker> `, members: `model = new InputDatePicker({ key: "date-range", label: "Période", rangeEnabled: true });` },
  "TaInputDropdownBasicExample": { template: `<ta-input-dropdown [input]="this.model" [standalone]="true"></ta-input-dropdown> `, members: `model = new InputDropdown({
    key: "status",
    label: "Statut",
    value: "active",
    options$: of([
      { id: "active", name: "Actif" },
      { id: "pending", name: "En attente" },
      { id: "closed", name: "Clôturé" },
    ]),
  });` },
  "TaInputDropdownDisabledExample": { template: `<ta-input-dropdown [input]="this.model" [standalone]="true"></ta-input-dropdown> `, members: `model = new InputDropdown({
    key: "status-locked",
    label: "Statut imposé",
    value: "active",
    disabled: true,
    options$: of([{ id: "active", name: "Actif" }]),
  });` },
  "TaInputDropdownMultipleExample": { template: `<ta-input-dropdown [input]="this.model" [standalone]="true"></ta-input-dropdown> `, members: `model = new InputDropdown({
    key: "categories",
    label: "Catégories",
    multiple: true,
    value: ["wood", "metal"],
    options$: of([
      { id: "wood", name: "Bois" },
      { id: "metal", name: "Métal" },
      { id: "stone", name: "Pierre" },
    ]),
  });` },
  "TaInputDropdownRequiredExample": { template: `<ta-input-dropdown [input]="this.model" [standalone]="true"></ta-input-dropdown> `, members: `model = new InputDropdown({
    key: "priority",
    label: "Priorité",
    validators: [Validators.required],
    options$: of([
      { id: "low", name: "Basse" },
      { id: "high", name: "Haute" },
    ]),
  });` },
  "TaInputImageEmptyExample": { template: `<ta-input-image [input]="this.model" [standalone]="true"></ta-input-image> `, members: `model = new InputImages({ key: "avatar-empty", label: "Avatar" });` },
  "TaInputImageWithValueExample": { template: `<ta-input-image [input]="this.model" [standalone]="true"></ta-input-image> `, members: `model = new InputImages({
    key: "avatar",
    label: "Avatar",
    value: [
      {
        id: "1",
        url: "https://picsum.photos/seed/ta-input-image/200/200.jpg",
        description: "avatar",
        size: 12000,
      },
    ],
  });` },
  "TaInputImagesEmptyExample": { template: `<ta-input-images [input]="this.model" [standalone]="true"></ta-input-images> `, members: `model = new InputImages({ key: "gallery-empty", label: "Photos du chantier" });` },
  "TaInputImagesWithValueExample": { template: `<ta-input-images [input]="this.model" [standalone]="true"></ta-input-images> `, members: `model = new InputImages({
    key: "gallery",
    label: "Photos du chantier",
    value: [
      { id: "1", url: "https://picsum.photos/seed/ta-input-images-1/300/200.jpg", description: "photo 1", size: 45000 },
      { id: "2", url: "https://picsum.photos/seed/ta-input-images-2/300/200.jpg", description: "photo 2", size: 51000 },
    ],
  });` },
  "TaInputLabelTextExample": { template: `<ta-input-label [input]="this.model" [standalone]="true"></ta-input-label> `, members: `model = new InputLabel({ key: "note", label: "Merci de vérifier les informations avant de valider.", icon: "edit" });` },
  "TaInputLabelTitleExample": { template: `<ta-input-label [input]="this.model" [standalone]="true"></ta-input-label> `, members: `model = new InputLabel({ key: "section", label: "Coordonnées", level: 3, required: true });` },
  "TaInputLogoEmptyExample": { template: `<ta-input-logo [input]="this.model" [standalone]="true"></ta-input-logo> `, members: `model = new InputLogo({ key: "logo-empty", label: "Logo de l'entreprise" });` },
  "TaInputLogoWithValueExample": { template: `<ta-input-logo [input]="this.model" [standalone]="true"></ta-input-logo> `, members: `model = new InputLogo({
    key: "logo",
    label: "Logo de l'entreprise",
    value: { id: "1", url: "https://picsum.photos/seed/ta-input-logo/200/200.jpg", description: "logo", size: 8000 },
  });` },
  "TaInputPhoneBasicExample": { template: `<ta-input-phone [input]="this.model" [standalone]="true"></ta-input-phone> `, members: `model = new InputPhone({ key: "phone", label: "Téléphone", value: "+32470123456" });` },
  "TaInputPhoneDisabledExample": { template: `<ta-input-phone [input]="this.model" [standalone]="true"></ta-input-phone> `, members: `model = new InputPhone({ key: "phone-disabled", label: "Non modifiable", value: "+32470123456", disabled: true });` },
  "TaInputPhoneRequiredExample": { template: `<ta-input-phone [input]="this.model" [standalone]="true"></ta-input-phone> `, members: `model = new InputPhone({ key: "phone-required", label: "Téléphone professionnel", validators: [Validators.required] });` },
  "TaInputRadioBasicExample": { template: `<ta-input-radio [input]="this.model" [standalone]="true"></ta-input-radio> `, members: `model = new InputRadio<string>({
    key: "plan",
    label: "Formule",
    options: of([
      { id: "basic", name: "Basique" },
      { id: "pro", name: "Pro" },
      { id: "enterprise", name: "Entreprise" },
    ]),
    value: "pro",
  });` },
  "TaInputRadioDisabledExample": { template: `<ta-input-radio [input]="this.model" [standalone]="true"></ta-input-radio> `, members: `model = new InputRadio<string>({
    key: "plan-disabled",
    label: "Formule verrouillée",
    options: of([
      { id: "basic", name: "Basique" },
      { id: "pro", name: "Pro" },
    ]),
    value: "pro",
    disabled: true,
  });` },
  "TaInputRadioIconsExample": { template: `<ta-input-radio [input]="this.model" [standalone]="true"></ta-input-radio> `, members: `model = new InputRadio<string>({
    key: "contact",
    label: "Moyen de contact",
    options: of([
      { id: "phone", icon: TaIconType.Phone },
      { id: "email", icon: TaIconType.Email },
      { id: "chat", icon: TaIconType.Comment },
    ]),
  });` },
  "TaInputRatingBasicExample": { template: `<ta-input-rating [input]="this.model" [standalone]="true"></ta-input-rating> `, members: `model = new InputRating({ key: "satisfaction", label: "Satisfaction", value: 3 });` },
  "TaInputRatingHalfExample": { template: `<ta-input-rating [input]="this.model" [standalone]="true"></ta-input-rating> `, members: `model = new InputRating({ key: "score", label: "Score", value: 3.5, max: 5, allowHalf: true });` },
  "TaInputRatingReadonlyExample": { template: `<ta-input-rating [input]="this.model" [standalone]="true"></ta-input-rating> `, members: `model = new InputRating({ key: "score-readonly", label: "Note reçue", value: 4, readonly: true });` },
  "TaInputSchemaEmptyExample": { template: `<ta-input-schema [input]="this.model" [standalone]="true"></ta-input-schema> `, members: `model = new InputSchema({ key: "logo", label: "Logo" });` },
  "TaInputSchemaValueExample": { template: `<ta-input-schema [input]="this.model" [standalone]="true"></ta-input-schema> `, members: `model = new InputSchema({
    key: "logo-existing",
    label: "Logo existant",
    value:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
  });` },
  "TaInputSliderBasicExample": { template: `<ta-input-slider [input]="this.model" [standalone]="true"></ta-input-slider> `, members: `model = new InputSlider({ key: "volume", label: "Volume", min: 0, max: 100, value: 50 });` },
  "TaInputSliderDisabledExample": { template: `<ta-input-slider [input]="this.model" [standalone]="true"></ta-input-slider> `, members: `model = new InputSlider({ key: "slider-disabled", label: "Verrouillé", min: 0, max: 100, value: 75, disabled: true });` },
  "TaInputSliderRangeExample": { template: `<ta-input-slider [input]="this.model" [standalone]="true"></ta-input-slider> `, members: `model = new InputSlider({ key: "temperature", label: "Température (°C)", min: -10, max: 40, value: 21 });` },
  "TaInputSwitchCheckboxExample": { template: `<ta-input-switch [input]="this.model" [standalone]="true"></ta-input-switch> `, members: `model = new InputSwitch({ key: "field-checkbox", label: "Champ dynamique", match: of({ type: "checkbox" as const, prop: {} }) });` },
  "TaInputSwitchDropdownExample": { template: `<ta-input-switch [input]="this.model" [standalone]="true"></ta-input-switch> `, members: `model = new InputSwitch({
    key: "field-dropdown",
    label: "Champ dynamique",
    match: of({
      type: "dropdown" as const,
      prop: {
        options$: of([
          { id: "be", name: "Belgique" },
          { id: "fr", name: "France" },
          { id: "lu", name: "Luxembourg" },
        ]),
      },
    }),
  });` },
  "TaInputSwitchTextboxExample": { template: `<ta-input-switch [input]="this.model" [standalone]="true"></ta-input-switch> `, members: `model = new InputSwitch({ key: "field-textbox", label: "Champ dynamique", match: of({ type: "textbox" as const, prop: {} }) });` },
  "TaInputTextareaBasicExample": { template: `<ta-input-textarea [input]="this.model" [standalone]="true"></ta-input-textarea> `, members: `model = new InputTextarea({ key: "description", label: "Description", value: "Un texte sur plusieurs lignes, qui s'auto-agrandit (cdkTextareaAutosize)." });` },
  "TaInputTextareaDisabledExample": { template: `<ta-input-textarea [input]="this.model" [standalone]="true"></ta-input-textarea> `, members: `model = new InputTextarea({ key: "readonly-notes", label: "Notes verrouillées", value: "Valeur figée.", disabled: true });` },
  "TaInputTextareaRequiredExample": { template: `<ta-input-textarea [input]="this.model" [standalone]="true"></ta-input-textarea> `, members: `model = new InputTextarea({ key: "comment", label: "Commentaire", validators: [Validators.required] });` },
  "TaInputTextboxBasicExample": { template: `<ta-input-textbox [input]="this.model" [standalone]="true"></ta-input-textbox> `, members: `model = new InputTextBox({ key: "name", label: "Nom", value: "Dupont" });` },
  "TaInputTextboxDisabledExample": { template: `<ta-input-textbox [input]="this.model" [standalone]="true"></ta-input-textbox> `, members: `model = new InputTextBox({
    key: "readonly",
    label: "Non modifiable",
    value: "Valeur figée",
    disabled: true,
  });` },
  "TaInputTextboxRequiredExample": { template: `<ta-input-textbox [input]="this.model" [standalone]="true"></ta-input-textbox> `, members: `model = new InputTextBox({
    key: "email",
    label: "Courriel",
    validators: [Validators.required],
  });` },
  "TaInputTimePickerBasicExample": { template: `<ta-input-time-picker [input]="this.model" [standalone]="true"></ta-input-time-picker> `, members: `model = new InputTimePicker({ key: "time", label: "Heure de rendez-vous", value: "09:30" });` },
  "TaInputTimePickerDisabledExample": { template: `<ta-input-time-picker [input]="this.model" [standalone]="true"></ta-input-time-picker> `, members: `model = new InputTimePicker({ key: "time-disabled", label: "Heure verrouillée", value: "14:00", disabled: true });` },
  "TaInputTimePickerRequiredExample": { template: `<ta-input-time-picker [input]="this.model" [standalone]="true"></ta-input-time-picker> `, members: `model = new InputTimePicker({ key: "time-required", label: "Heure de fin", validators: [Validators.required] });` },
  "TaInputToggleDisabledExample": { template: `<ta-input-toggle [input]="this.model" [standalone]="true"></ta-input-toggle> `, members: `model = new InputCheckBox({ key: "toggle-disabled", label: "Verrouillé", toggle: true, value: true, disabled: true });` },
  "TaInputToggleStateLabelsExample": { template: `<ta-input-toggle [input]="this.model" [standalone]="true"></ta-input-toggle> `, members: `model = new InputCheckBox({
    key: "toggle-visibility",
    label: "Adresse e-mail",
    offLabel: "Privé",
    onLabel: "Public",
    toggle: true,
    value: true,
  });` },
  "TaInputToggleStatesExample": { template: `<ta-input-toggle [input]="this.on" [standalone]="true"></ta-input-toggle>
<ta-input-toggle [input]="this.off" [standalone]="true"></ta-input-toggle>`, members: `on = new InputCheckBox({ key: "notifications-on", label: "Notifications", toggle: true, value: true });

off = new InputCheckBox({ key: "notifications-off", label: "Notifications", toggle: true, value: false });` },
  "TaInputUploadBasicExample": { template: `<ta-input-upload [input]="this.model" [standalone]="true"></ta-input-upload> `, members: `model = new InputUpload({ key: "documents", label: "Documents" });` },
  "TaInputUploadConfirmExample": { template: `<ta-input-upload [input]="this.model" [standalone]="true"></ta-input-upload> `, members: `model = new InputUpload({ key: "documents-confirm", label: "Documents (validation manuelle)", confirmButton: true });` },
  "TaInputWysiswygEmptyExample": { template: `<ta-input-wysiswyg [input]="this.model" [standalone]="true"></ta-input-wysiswyg> `, members: `model = new InputWysiswyg({ key: "content", label: "Contenu", placeholder: "Rédigez votre article…" });` },
  "TaInputWysiswygInitialExample": { template: `<ta-input-wysiswyg [input]="this.model" [standalone]="true"></ta-input-wysiswyg> `, members: `model = new InputWysiswyg({
    key: "content-existing",
    label: "Contenu existant",
    value: [
      { id: "h1", type: "header", data: { text: "Article d'exemple", level: 2 } },
      { id: "p1", type: "paragraph", data: { text: "Ce bloc initial vient de l'option \`value\` du modèle." } },
    ],
  });` },
  "TaInputsFocusExample": { template: `<div class="flex-column g-space-sm">
  <ta-button size="small" (action)="this.focus$.next()">Donner le focus</ta-button>
  <ta-inputs [input]="this.model" [standalone]="true" [onFocus]="this.focus$"></ta-inputs>
</div>`, members: `model = new InputTextBox({ key: "search", label: "Recherche" });

focus$ = new Subject<void>();` },
  "TaInputsTypesExample": { template: `<ta-inputs [input]="this.textModel" [standalone]="true"></ta-inputs>
<ta-inputs [input]="this.dropdownModel" [standalone]="true"></ta-inputs>
<ta-inputs [input]="this.checkboxModel" [standalone]="true"></ta-inputs>`, members: `textModel = new InputTextBox({ key: "name", label: "Nom", value: "Dupont" });

dropdownModel = new InputDropdown({
    key: "country",
    label: "Pays",
    options$: of([
      { id: "fr", name: "France" },
      { id: "be", name: "Belgique" },
    ]),
  });

checkboxModel = new InputCheckBox({ key: "active", label: "Actif", value: true });` },
  "TaItsmeButtonModesExample": { template: `<ta-itsme-button mode="full">Se connecter avec itsme</ta-itsme-button>
<ta-itsme-button mode="logo"></ta-itsme-button>`, members: `` },
  "TaItsmeButtonSizesExample": { template: `<ta-itsme-button size="small" mode="logo"></ta-itsme-button>
<ta-itsme-button size="medium" mode="logo"></ta-itsme-button>
<ta-itsme-button size="large" mode="logo"></ta-itsme-button>`, members: `` },
  "TaItsmeButtonStatesExample": { template: `<ta-itsme-button state="classic" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-itsme-button>
<ta-itsme-button state="disabled" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-itsme-button>
<ta-itsme-button state="inactive" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-itsme-button>
<p>Clics émis : {{ this.clicks }}</p>`, members: `clicks = 0;` },
  "TaLabelIconShapeExample": { template: `<ta-label icon="wifi" size="sm">Wi-Fi</ta-label>
<ta-label icon="local_parking" size="sm">Parking</ta-label>
<ta-label icon="verified" type="success" size="sm">Bail vérifié</ta-label>
<ta-label shape="pill" size="sm">Capsule</ta-label>`, members: `` },
  "TaLabelSizesExample": { template: `<ta-label size="xs">xs</ta-label>
<ta-label size="sm">sm</ta-label>
<ta-label size="md">md</ta-label>
<ta-label size="lg">lg</ta-label>
<ta-label size="xl">xl</ta-label>
<ta-label size="xxl">xxl</ta-label>
<ta-label size="big">big</ta-label>`, members: `` },
  "TaLabelTypesExample": { template: `<ta-label type="default">Default</ta-label>
<ta-label type="secondary">Secondary</ta-label>
<ta-label type="success">Success</ta-label>
<ta-label type="warning">Warning</ta-label>
<ta-label type="alert">Alert</ta-label>
<ta-label type="purple">Purple</ta-label>
<ta-label type="new">New</ta-label>`, members: `` },
  "TaLayoutContentHeightExample": { template: `<ta-text [isBold]="true">Par défaut — autoHeight = false</ta-text>
<div style="max-height: 220px; overflow: auto;">
  <ta-layout-content>
    <ta-title [level]="4">Contenu court</ta-title>
    <ta-text>Même court, ce bloc occupe au moins la hauteur de l'écran : faites défiler cette fenêtre bornée (ajoutée pour la démonstration, elle ne fait pas partie du composant) pour voir l'espace vide en dessous.</ta-text>
  </ta-layout-content>
</div>

<ta-text [isBold]="true">autoHeight = true</ta-text>
<ta-layout-content [autoHeight]="true">
  <ta-title [level]="4">Contenu compact</ta-title>
  <ta-text>Ici la hauteur suit exactement le contenu, sans marge ni minimum ajoutés.</ta-text>
</ta-layout-content>`, members: `` },
  "TaLayoutFlexPanelsExample": { template: `<ta-layout-flex [allowClose]="true">
  <div left class="p-space-md flex-column g-space-sm">
    <ta-title [level]="4">Conversations</ta-title>
    <ta-text size="sm">Amélie Laurent</ta-text>
    <ta-text size="sm">Karim Haddad</ta-text>
    <ta-text size="sm">Sophie Meunier</ta-text>
  </div>
  <div center class="p-space-md flex-column g-space-sm">
    <ta-title [level]="4">Échange avec Amélie Laurent</ta-title>
    <ta-text>Bonjour, où en est le dossier 4821 ?</ta-text>
    <ta-text>Il est prêt, je vous l'envoie cet après-midi.</ta-text>
  </div>
  <div right class="p-space-md flex-column g-space-sm">
    <ta-title [level]="4">Détails</ta-title>
    <ta-text size="sm">Client depuis 2021</ta-text>
    <ta-button type="secondary" size="small">Voir la fiche</ta-button>
  </div>
</ta-layout-flex>`, members: `` },
  "TaLayoutFullPanelWorkingExample": { template: `<ta-button type="secondary" (action)="this.isOpen.set(true)">Ouvrir le panneau</ta-button>

@if (this.isOpen()) {
  <ta-layout-full-panel width="420px" title="Commande #4821" (closeEvent)="this.isOpen.set(false)">
    <div panel-content class="flex-column g-space-sm">
      <ta-text>Client : Amélie Laurent</ta-text>
      <ta-text>Montant : 129,90 €</ta-text>
      <ta-text>Statut : en préparation</ta-text>
    </div>
    <div panel-footer class="flex-row g-space-sm">
      <ta-button type="secondary" (action)="this.isOpen.set(false)">Annuler</ta-button>
      <ta-button type="primary" (action)="this.confirm()">Confirmer</ta-button>
    </div>
  </ta-layout-full-panel>
}

@if (this.lastAction(); as action) {
  <ta-text size="sm">{{ action }}</ta-text>
}`, members: `readonly isOpen = signal(false);

readonly lastAction = signal<string | null>(null);

confirm(): void {
    this.lastAction.set("Commande confirmée.");
    this.isOpen.set(false);
  }` },
  "TaLayoutHeaderCompositionExample": { template: `<ta-layout-header>
  <ta-layout-header-default title="Espace client" [showBack]="false"></ta-layout-header-default>
</ta-layout-header>`, members: `` },
  "TaLayoutHeaderDefaultBackExample": { template: `<ta-layout-header-default title="Facture #4821" [showBack]="true"></ta-layout-header-default>
<ta-layout-header-default title="Tableau de bord" [showBack]="false"></ta-layout-header-default>`, members: `` },
  "TaLayoutHeaderDefaultMenuExample": { template: `<ta-layout-header-default title="Documents" [showBack]="false" [menuTemplate]="this.menuTpl"></ta-layout-header-default>

<ng-template #menuTpl>
  <button mat-menu-item (click)="this.lastAction.set('Renommer')">Renommer</button>
  <button mat-menu-item (click)="this.lastAction.set('Supprimer')">Supprimer</button>
</ng-template>

@if (this.lastAction(); as action) {
  <ta-text size="sm">Action choisie : {{ action }}</ta-text>
}`, members: `@ViewChild("menuTpl", { static: true }) menuTpl!: TemplateRef<unknown>;

readonly lastAction = signal<string | null>(null);` },
  "TaLayoutHeaderLogoWorkingExample": { template: `<ta-layout-header-logo [profile]="{ template: this.profileTpl, user: this.user }" [notificationTemplate]="this.notifTpl"> </ta-layout-header-logo>

<ta-button type="secondary" size="small" (action)="this.header.isProfileOpen.set(true)"> Ouvrir le profil (l'avatar n'est pas cliquable, voir description) </ta-button>

<ng-template #profileTpl>
  <div class="flex-column g-space-sm">
    <ta-text [isBold]="true">Camille Petit</ta-text>
    <ta-text size="sm">camille.petit&#64;example.com</ta-text>
  </div>
</ng-template>

<ng-template #notifTpl>
  <ta-text>3 nouvelles notifications.</ta-text>
</ng-template>`, members: `@ViewChild(LayoutHeaderLogoComponent) readonly header!: LayoutHeaderLogoComponent;

@ViewChild("profileTpl", { static: true }) profileTpl!: TemplateRef<unknown>;

@ViewChild("notifTpl", { static: true }) notifTpl!: TemplateRef<unknown>;

readonly user = {
    profilePictureUrl: undefined,
    naming: { name: "Camille Petit", firstName: "Camille", trigram: "CP" },
  };` },
  "TaLayoutModalCloseExample": { template: `<ta-layout-modal title="Profil" [showClose]="true">
  <ta-text size="sm">showClose = true</ta-text>
</ta-layout-modal>
<ta-layout-modal title="Résumé" [showClose]="false">
  <ta-text size="sm">showClose = false</ta-text>
</ta-layout-modal>`, members: `` },
  "TaLayoutModalWorkingExample": { template: `<ta-layout-modal title="Éditer le contact" (closeEvent)="this.message.set('Fermeture demandée.')">
  <div class="flex-column g-space-sm">
    <ta-text>Nom : Camille Petit</ta-text>
    <ta-text>Rôle : Gestionnaire de compte</ta-text>
    <ta-text size="sm">Cette zone de contenu est un ta-layout-content avec autoHeight=true (imposé en interne) : elle défile si elle dépasse son conteneur, sans forcer de hauteur minimale.</ta-text>
  </div>
</ta-layout-modal>

@if (this.message(); as text) {
  <ta-text size="sm">{{ text }}</ta-text>
}`, members: `readonly message = signal<string | null>(null);` },
  "TaLayoutNavTabsExample": { template: `<ta-layout-nav>
  <div class="flex-row g-space-md p-space-sm">
    <ta-button [type]="this.active() === 'apercu' ? 'primary' : 'tertiary'" size="small" (action)="this.active.set('apercu')">Aperçu</ta-button>
    <ta-button [type]="this.active() === 'factures' ? 'primary' : 'tertiary'" size="small" (action)="this.active.set('factures')">Factures</ta-button>
    <ta-button [type]="this.active() === 'documents' ? 'primary' : 'tertiary'" size="small" (action)="this.active.set('documents')">Documents</ta-button>
  </div>
</ta-layout-nav>`, members: `readonly active = signal<"apercu" | "factures" | "documents">("apercu");` },
  "TaLayoutNotFoundDefaultExample": { template: `<ta-layout-not-found></ta-layout-not-found> `, members: `` },
  "TaLayoutPageAnatomyExample": { template: `<ta-layout-page>
  <ta-layout-header>
    <ta-layout-header-default title="Espace client" [showBack]="false"></ta-layout-header-default>
  </ta-layout-header>

  <ta-layout-title>
    <ta-title [level]="2">Tableau de bord</ta-title>
  </ta-layout-title>

  <ta-layout-nav>
    <div class="flex-row g-space-md p-space-sm">
      <ta-button type="tertiary" size="small">Aperçu</ta-button>
      <ta-button type="tertiary" size="small">Factures</ta-button>
      <ta-button type="tertiary" size="small">Documents</ta-button>
    </div>
  </ta-layout-nav>

  <ta-card>
    <ta-card-content>
      <ta-text>Contenu principal — projeté sans sélecteur, il tombe dans la zone .layout-page-content (max-width via .max-container).</ta-text>
    </ta-card-content>
  </ta-card>
</ta-layout-page>`, members: `` },
  "TaLayoutPanelInDrawerExample": { template: `<div style="height: 280px;">
  <ta-layout-with-panel [open]="true">
    <ta-layout-content>
      <div class="p-space-md">
        <ta-text size="sm">Zone principale (hors sujet ici — voir la démo de ta-layout-content).</ta-text>
      </div>
    </ta-layout-content>
    <ta-layout-panel>
      <div class="p-space-md flex-column g-space-sm">
        <ta-title [level]="4">Filtres</ta-title>
        <ta-text size="sm">ta-layout-panel n'ajoute aucun style propre (fichier SCSS vide, vérifié) : le fond, le padding et la largeur visibles ici viennent du tiroir Material (mat-drawer) de ta-layout-with-panel qui le contient.</ta-text>
      </div>
    </ta-layout-panel>
  </ta-layout-with-panel>
</div>`, members: `` },
  "TaLayoutSideAnatomyExample": { template: `<div style="max-height: 260px; overflow: auto;">
  <ta-layout-side>
    <ta-layout-side-content>
      <div class="p-space-md flex-column g-space-sm">
        <ta-title [level]="4">Filtres</ta-title>
        <ta-text size="sm">Statut : actif</ta-text>
        <ta-text size="sm">Ville : Bruxelles</ta-text>
        <ta-text size="sm">Catégorie : Électronique</ta-text>
        <ta-text size="sm">Cette zone défile (flex:1, overflow-y:auto) si elle dépasse la hauteur disponible.</ta-text>
      </div>
    </ta-layout-side-content>
    <ta-layout-side-cta [background]="true">
      <ta-button type="primary">Appliquer les filtres</ta-button>
    </ta-layout-side-cta>
  </ta-layout-side>
</div>`, members: `` },
  "TaLayoutSideContentListExample": { template: `<ta-layout-side-content>
  <div class="p-space-md flex-column g-space-sm">
    <ta-title [level]="4">Catégories</ta-title>
    @for (category of this.categories; track category) {
      <ta-text size="sm">{{ category }}</ta-text>
    }
  </div>
</ta-layout-side-content>`, members: `readonly categories = ["Électronique", "Mode", "Maison", "Sport"];` },
  "TaLayoutSideCtaFlagsExample": { template: `<div class="flex-column g-space-xs">
  <ta-text size="sm">background = true (défaut), rounded = false (défaut)</ta-text>
  <ta-layout-side-cta>
    <ta-button type="primary">Enregistrer</ta-button>
  </ta-layout-side-cta>
</div>

<div class="flex-column g-space-xs">
  <ta-text size="sm">background = false</ta-text>
  <ta-layout-side-cta [background]="false">
    <ta-button type="primary">Enregistrer</ta-button>
  </ta-layout-side-cta>
</div>

<div class="flex-column g-space-xs">
  <ta-text size="sm">rounded = true</ta-text>
  <ta-layout-side-cta [rounded]="true">
    <ta-button type="primary">Enregistrer</ta-button>
  </ta-layout-side-cta>
</div>`, members: `` },
  "TaLayoutTitleBasicExample": { template: `<ta-layout-title>
  <ta-title [level]="2" [isBold]="true">Paramètres du compte</ta-title>
</ta-layout-title>`, members: `` },
  "TaLayoutWithBottomNavWorkingExample": { template: `<ta-layout-with-bottom-nav type="default">
  <div class="p-space-md flex-column g-space-sm">
    <ta-title [level]="3">Fil d'actualité</ta-title>
    <ta-text>Contenu principal de la page.</ta-text>
  </div>

  <ta-layout-nav>
    <div class="flex-column g-space-sm p-space-sm">
      <ta-button type="tertiary" size="small">Accueil</ta-button>
      <ta-button type="tertiary" size="small">Recherche</ta-button>
      <ta-button type="tertiary" size="small">Profil</ta-button>
    </div>
  </ta-layout-nav>
</ta-layout-with-bottom-nav>`, members: `` },
  "TaLayoutWithPanelWorkingExample": { template: `<ta-button type="secondary" (action)="this.isOpen.set(!this.isOpen())">
  {{ this.isOpen() ? "Fermer le panneau" : "Ouvrir le panneau" }}
</ta-button>

<div style="height: 280px;">
  <ta-layout-with-panel [open]="this.isOpen()">
    <ta-layout-content>
      <div class="p-space-md flex-column g-space-sm">
        <ta-title [level]="4">Zone principale</ta-title>
        <ta-text size="sm">Le tiroir s'ouvre depuis la droite, par-dessus ce contenu.</ta-text>
      </div>
    </ta-layout-content>
    <ta-layout-panel>
      <div class="p-space-md flex-column g-space-sm">
        <ta-title [level]="4">Filtres</ta-title>
        <ta-text size="sm">Contenu du tiroir (mat-drawer, position « end »).</ta-text>
      </div>
    </ta-layout-panel>
  </ta-layout-with-panel>
</div>`, members: `readonly isOpen = signal(false);` },
  "TaLineChartAreaExample": { template: `<div style="max-width: 640px">
  <ta-line-chart [labels]="this.labels" [datasets]="this.datasets" [chartHeight]="240"></ta-line-chart>
</div>`, members: `labels = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun"];

datasets: ChartDataset[] = [
    { label: "Abonnés cumulés", data: [1200, 1450, 1600, 2100, 2400, 2950], borderColor: ChartColors.blue700, backgroundColor: ChartColors.blue300, tension: 0.3, fill: true },
  ];` },
  "TaLineChartSeriesExample": { template: `<div style="max-width: 640px">
  <ta-line-chart [labels]="this.labels" [datasets]="this.datasets" [chartHeight]="280"></ta-line-chart>
</div>`, members: `labels = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

datasets: ChartDataset[] = [
    { label: "Visites", data: [420, 460, 500, 480, 610, 390, 340], borderColor: ChartColors.blue700, tension: 0.3, fill: false },
    { label: "Visiteurs uniques", data: [310, 330, 360, 340, 420, 260, 230], borderColor: ChartColors.success, tension: 0.3, fill: false },
  ];` },
  "TaLinkIconSizesExample": { template: `<ta-link size="xs" icon="search">xs</ta-link>
<ta-link size="md" icon="search">md</ta-link>
<ta-link size="xl" icon="search">xl</ta-link>`, members: `` },
  "TaLinkStatesExample": { template: `<ta-link state="classic" (action)="this.clicks = this.clicks + 1">Classic</ta-link>
<ta-link state="disabled" (action)="this.clicks = this.clicks + 1">Disabled</ta-link>
<ta-link state="inactive" (action)="this.clicks = this.clicks + 1">Inactive</ta-link>
<p>Clics émis : {{ this.clicks }}</p>`, members: `clicks = 0;` },
  "TaLinkStyleExample": { template: `<ta-link [underline]="true" [bold]="false">Souligné</ta-link>
<ta-link [underline]="false" [bold]="false">Sans soulignement</ta-link>
<ta-link [underline]="true" [bold]="true">Souligné et gras</ta-link>
<ta-link [underline]="false" [bold]="true">Gras seul</ta-link>`, members: `` },
  "TaListContainerTasksExample": { template: `<ta-list-container>
  <ta-list-element>
    <ta-list-title>Revue du design system</ta-list-title>
    <ta-list-sub-title>Prévue pour le prochain sprint</ta-list-sub-title>
    <ta-list-tag><ta-badge value="Actif" type="success"></ta-badge></ta-list-tag>
  </ta-list-element>
  <ta-list-element>
    <ta-list-title>Intégration API</ta-list-title>
    <ta-list-sub-title>Équipe backend assignée</ta-list-sub-title>
    <ta-list-tag><ta-badge value="En cours" type="warning"></ta-badge></ta-list-tag>
  </ta-list-element>
  <ta-list-element>
    <ta-list-title>Tests utilisateurs</ta-list-title>
    <ta-list-sub-title>En attente de retours</ta-list-sub-title>
    <ta-list-tag><ta-badge value="En attente" type="secondary"></ta-badge></ta-list-tag>
  </ta-list-element>
</ta-list-container>`, members: `` },
  "TaListElementActionExample": { template: `<ta-list-container>
  <ta-list-element (action)="this.clicks = this.clicks + 1">
    <ta-list-title>Cliquer le titre ou la zone d'information</ta-list-title>
    <ta-list-sub-title>(action) a été émis {{ this.clicks }} fois</ta-list-sub-title>
    <ta-list-extra-information>Zone cliquable</ta-list-extra-information>
  </ta-list-element>
</ta-list-container>`, members: `clicks = 0;` },
  "TaListElementFlexColumnExample": { template: `<ta-list-container>
  <ta-list-element [flexColumn]="true">
    <ta-list-title>Réponse aux invitations</ta-list-title>
    <ta-list-sub-title>flexColumn ajoute la classe responsive-container</ta-list-sub-title>
    <ta-list-tag><ta-badge value="En attente" type="warning"></ta-badge></ta-list-tag>
  </ta-list-element>
</ta-list-container>`, members: `` },
  "TaListElementSeparatorExample": { template: `<ta-list-container>
  <ta-list-element [withSeparator]="true">
    <ta-list-title>Avec séparateur</ta-list-title>
    <ta-list-sub-title>withSeparator vaut true par défaut</ta-list-sub-title>
  </ta-list-element>
  <ta-list-element [withSeparator]="false">
    <ta-list-title>Sans séparateur</ta-list-title>
    <ta-list-sub-title>withSeparator mis à false</ta-list-sub-title>
  </ta-list-element>
</ta-list-container>`, members: `` },
  "TaListExtraInformationBasicExample": { template: `<ta-list-container>
  <ta-list-element>
    <ta-list-title>Alice Martin</ta-list-title>
    <ta-list-sub-title>Product Designer</ta-list-sub-title>
    <ta-list-tag><ta-badge value="Admin" type="primary"></ta-badge></ta-list-tag>
    <ta-list-extra-information>Dernière connexion : il y a 2 heures</ta-list-extra-information>
  </ta-list-element>
  <ta-list-element>
    <ta-list-title>Bob Johnson</ta-list-title>
    <ta-list-sub-title>Frontend Developer</ta-list-sub-title>
    <ta-list-tag><ta-badge value="Éditeur" type="info"></ta-badge></ta-list-tag>
    <ta-list-extra-information>Dernière connexion : hier</ta-list-extra-information>
  </ta-list-element>
</ta-list-container>`, members: `` },
  "TaListSubTitleAbsentExample": { template: `<ta-list-container>
  <ta-list-element>
    <ta-list-title>Design System Review</ta-list-title>
  </ta-list-element>
</ta-list-container>`, members: `` },
  "TaListSubTitlePresentExample": { template: `<ta-list-container>
  <ta-list-element>
    <ta-list-title>Design System Review</ta-list-title>
    <ta-list-sub-title>Prévue pour le prochain sprint</ta-list-sub-title>
  </ta-list-element>
</ta-list-container>`, members: `` },
  "TaListTagAdminExample": { template: `<ta-list-container>
  <ta-list-element>
    <ta-list-title>Alice Martin</ta-list-title>
    <ta-list-tag><ta-badge value="Admin" type="primary"></ta-badge></ta-list-tag>
  </ta-list-element>
</ta-list-container>`, members: `` },
  "TaListTagViewerExample": { template: `<ta-list-container>
  <ta-list-element>
    <ta-list-title>Bob Johnson</ta-list-title>
    <ta-list-tag>
      <ta-badge value="Lecteur" type="secondary"></ta-badge>
      <ta-badge value="Distant" type="purple"></ta-badge>
    </ta-list-tag>
  </ta-list-element>
</ta-list-container>`, members: `` },
  "TaListTitleBasicExample": { template: `<ta-list-container>
  <ta-list-element>
    <ta-list-title>Documentation mise à jour</ta-list-title>
  </ta-list-element>
  <ta-list-element>
    <ta-list-title>Migration de la base de données</ta-list-title>
  </ta-list-element>
</ta-list-container>`, members: `` },
  "TaLoaderLoadedExample": { template: `<ta-loader [isLoading]="false">
  <p>Contenu chargé, affiché via &lt;ng-content&gt; une fois isLoading à faux.</p>
</ta-loader>`, members: `` },
  "TaLoaderLoadingExample": { template: `<ta-loader text="Chargement des données…"></ta-loader>`, members: `` },
  "TaLoaderSizesExample": { template: `<div class="flex-row g-space-lg">
  <ta-loader size="sm" text=""></ta-loader>
  <ta-loader size="md" text=""></ta-loader>
  <ta-loader size="lg" text=""></ta-loader>
</div>`, members: `` },
  "TaLoaderSkeletonExample": { template: `<ta-loader [skeleton]="'cardList'"></ta-loader>`, members: `` },
  "TaLocalIconRotationExample": { template: `<div class="flex-column align-center g-space-xs">
  <ta-local-icon [type]="this.icon" size="lg" [rotation]="false"></ta-local-icon>
  <ta-text size="sm">rotation="false"</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-local-icon [type]="this.icon" size="lg" [rotation]="true"></ta-local-icon>
  <ta-text size="sm">rotation="true"</ta-text>
</div>`, members: `icon = TaIconType.Loader;` },
  "TaLocalIconSampleExample": { template: `<div class="flex-column align-center g-space-xs">
  <ta-local-icon [type]="this.search" size="md"></ta-local-icon>
  <ta-text size="sm">Search</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-local-icon [type]="this.edit" size="md"></ta-local-icon>
  <ta-text size="sm">Edit</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-local-icon [type]="this.deleteIcon" size="md"></ta-local-icon>
  <ta-text size="sm">Delete</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-local-icon [type]="this.download" size="md"></ta-local-icon>
  <ta-text size="sm">Download</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-local-icon [type]="this.save" size="md"></ta-local-icon>
  <ta-text size="sm">Save</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-local-icon [type]="this.warning" size="md"></ta-local-icon>
  <ta-text size="sm">Warning</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-local-icon [type]="this.info" size="md"></ta-local-icon>
  <ta-text size="sm">Info</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-local-icon [type]="this.star" size="md"></ta-local-icon>
  <ta-text size="sm">Star</ta-text>
</div>`, members: `search = TaIconType.Search;

edit = TaIconType.Edit;

deleteIcon = TaIconType.Delete;

download = TaIconType.Download;

save = TaIconType.Save;

warning = TaIconType.Warning;

info = TaIconType.Info;

star = TaIconType.Star;` },
  "TaLocalIconSizesExample": { template: `<div class="flex-column align-center g-space-xs">
  <ta-local-icon [type]="this.icon" size="xs"></ta-local-icon>
  <ta-text size="sm">xs (28px)</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-local-icon [type]="this.icon" size="sm"></ta-local-icon>
  <ta-text size="sm">sm (35px)</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-local-icon [type]="this.icon" size="md"></ta-local-icon>
  <ta-text size="sm">md (50px)</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-local-icon [type]="this.icon" size="lg"></ta-local-icon>
  <ta-text size="sm">lg (120px)</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-local-icon [type]="this.icon" size="xl"></ta-local-icon>
  <ta-text size="sm">xl (120px aussi)</ta-text>
</div>`, members: `icon = TaIconType.Search;` },
  "TaLoginCardDefaultExample": { template: `<div class="flex-column g-space-sm">
  <ta-login-card></ta-login-card>
  <ta-text size="sm">Connexion demandée : {{ this.auth.loginRequested() ? "oui" : "non" }}</ta-text>
</div>`, members: `protected auth = inject(TA_AUTH_TOKEN) as unknown as DemoAuthService;` },
  "TaLogoColorsExample": { template: `<div style="padding: 16px; background: #f2f2f2;">
  <ta-logo></ta-logo>
</div>
<div style="padding: 16px; background: #f2f2f2;">
  <ta-logo color="black"></ta-logo>
</div>
<div style="padding: 16px; background: #1a1a1a;">
  <ta-logo color="white"></ta-logo>
</div>`, members: `` },
  "TaLogoTypeAndWidthExample": { template: `<ta-logo type="oneline" [widthPercentage]="150"></ta-logo>
<ta-logo type="oneline" [widthPercentage]="60"></ta-logo>`, members: `` },
  "TaMainMenuCustomUserZoneExample": { template: `<ng-template #utilisateur>
  <div class="flex-row g-space-xs align-center">
    <ta-font-icon name="person" type="sm"></ta-font-icon>
    <span>Amélie Laurent</span>
  </div>
</ng-template>
<ta-main-menu [menuMain]="this.menuMain" [userMenuTemplate]="utilisateur" direction="horizontal"></ta-main-menu>`, members: `readonly menuMain = new Menu<MenuIcon>({
    direction: "horizontal",
    elements: [
      new MenuIcon({ key: "home", label: "Tableau de bord", icon: "home" }),
      new MenuIcon({ key: "contacts", label: "Contacts", icon: "person" }),
    ],
  });` },
  "TaMainMenuDesktopExample": { template: `<ta-main-menu [menuMain]="this.menuMain" [menuUser]="this.menuUser" direction="horizontal"></ta-main-menu>`, members: `readonly menuMain = new Menu<MenuIcon>({
    direction: "horizontal",
    elements: [
      new MenuIcon({ key: "home", label: "Tableau de bord", icon: "home" }),
      new MenuIcon({ key: "contacts", label: "Contacts", icon: "person" }),
      new MenuIcon({
        key: "notifications",
        label: "Notifications",
        icon: "notifications",
        options: { notificationBadge: { label: 2 } },
      }),
    ],
  });

readonly menuUser = new Menu<MenuIcon>({
    elements: [
      new MenuIcon({ key: "profil", label: "Profil", icon: "settings" }),
      new MenuIcon({ key: "logout", label: "Se déconnecter", icon: "logout" }),
    ],
  });` },
  "TaMaterialIconSizesExample": { template: `<div class="flex-column align-center g-space-xs">
  <ta-material-icon>star</ta-material-icon>
  <ta-text size="sm">(défaut, "")</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-material-icon [type]="'sm'">star</ta-material-icon>
  <ta-text size="sm">sm</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-material-icon [type]="'xl'">star</ta-material-icon>
  <ta-text size="sm">xl</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-material-icon [type]="'xxl'">star</ta-material-icon>
  <ta-text size="sm">xxl</ta-text>
</div>`, members: `` },
  "TaMaterialIconStylesExample": { template: `<div class="flex-column align-center g-space-xs">
  <ta-material-icon>home</ta-material-icon>
  <ta-text size="sm">défaut</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-material-icon [outline]="true">home</ta-material-icon>
  <ta-text size="sm">outline</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-material-icon [sharp]="true">home</ta-material-icon>
  <ta-text size="sm">sharp</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-material-icon [round]="true">home</ta-material-icon>
  <ta-text size="sm">round</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-material-icon [dualTone]="true">home</ta-material-icon>
  <ta-text size="sm">dualTone</ta-text>
</div>`, members: `` },
  "TaMegaoctetSizesExample": { template: `<ta-megaoctet [octet]="900"></ta-megaoctet>
<ta-megaoctet [octet]="1048576"></ta-megaoctet>
<ta-megaoctet [octet]="4404019200" [icon]="true"></ta-megaoctet>`, members: `` },
  "TaMenuContainersExample": { template: `<div class="flex-row g-space-xl">
  <div class="flex-column g-space-xs">
    <span>main</span>
    <ta-menu [menu]="this.menu" container="main"></ta-menu>
  </div>
  <div class="flex-column g-space-xs">
    <span>second</span>
    <ta-menu [menu]="this.menu" container="second"></ta-menu>
  </div>
  <div class="flex-column g-space-xs">
    <span>overflow</span>
    <ta-menu [menu]="this.menu" container="overflow"></ta-menu>
  </div>
  <div class="flex-column g-space-xs">
    <span>panel</span>
    <ta-menu [menu]="this.menu" container="panel"></ta-menu>
  </div>
</div>`, members: `readonly menu = new Menu<MenuIcon>({
    elements: [
      new MenuIcon({ key: "home", label: "Accueil", icon: "home" }),
      new MenuIcon({ key: "contacts", label: "Contacts", icon: "person" }),
    ],
  });` },
  "TaMenuItemBadgeExample": { template: `<div style="max-width: 220px">
  <ta-menu-item [item]="this.item" styleType="vertical"></ta-menu-item>
</div>`, members: `readonly item = new MenuIcon({
    key: "notifications",
    label: "Notifications",
    icon: "notifications",
    options: { notificationBadge: { label: 5 } },
  });` },
  "TaMenuItemDisabledExample": { template: `<div style="max-width: 220px">
  <ta-menu-item [item]="this.item" styleType="vertical"></ta-menu-item>
</div>`, members: `readonly item = new MenuIcon({ key: "export", label: "Exporter", icon: "download", disabled: true });` },
  "TaMenuItemSubmenuExample": { template: `<ng-template #sousMenu>
  <button mat-menu-item (click)="this.lastChoice.set('Profil')">Profil</button>
  <button mat-menu-item (click)="this.lastChoice.set('Se déconnecter')">Se déconnecter</button>
</ng-template>
<div class="flex-column g-space-sm" style="max-width: 220px">
  <ta-menu-item [item]="this.buildPanel(sousMenu)" styleType="vertical"></ta-menu-item>
  <ta-text size="sm">Choix du sous-menu : {{ this.lastChoice() ?? "aucun" }}</ta-text>
</div>`, members: `protected readonly lastChoice = signal<string | null>(null);

private _panel?: MenuPanel;

protected buildPanel(template: TemplateRef<unknown>): MenuPanel {
    return (this._panel ??= new MenuPanel({ key: "parametres", label: "Paramètres", icon: "settings", template }));
  }` },
  "TaMenuMainWithBadgeExample": { template: `<div style="max-width: 420px">
  <ta-menu [menu]="this.menu" container="main"></ta-menu>
</div>`, members: `readonly menu = new Menu<MenuIcon>({
    direction: "horizontal",
    elements: [
      new MenuIcon({ key: "home", label: "Tableau de bord", icon: "home" }),
      new MenuIcon({
        key: "notifications",
        label: "Notifications",
        icon: "notifications",
        options: { notificationBadge: { label: 3 } },
      }),
      new MenuIcon({ key: "settings", label: "Paramètres", icon: "settings" }),
    ],
  });` },
  "TaMenuNavigationTabsExample": { template: `<div class="flex-column g-space-sm">
  <ta-menu-navigation [menu]="this.menu" container="tab"></ta-menu-navigation>
  <ta-text size="sm">Onglet actif : {{ this.activeLabel() || "(pas encore rendu)" }}</ta-text>
</div>`, members: `protected readonly activeLabel = signal("");

readonly menu = new Menu<MenuIcon>({
    elements: [
      new MenuIcon({
        key: "contacts",
        label: "Contacts",
        icon: "person",
        defaultOpen: true,
        callback: () => this.activeLabel.set("Contacts"),
      }),
      new MenuIcon({
        key: "notifications",
        label: "Notifications",
        icon: "notifications",
        callback: () => this.activeLabel.set("Notifications"),
      }),
      new MenuIcon({
        key: "settings",
        label: "Paramètres",
        icon: "settings",
        callback: () => this.activeLabel.set("Paramètres"),
      }),
    ],
  });` },
  "TaMenuNavigationTagsExample": { template: `<ta-menu-navigation [menu]="this.menu" container="tags" [options]="this.options"></ta-menu-navigation>`, members: `protected readonly options: { spaceElement: TaSizes } = { spaceElement: "sm" };

readonly menu = new Menu<MenuIcon>({
    elements: [
      new MenuIcon({ key: "actifs", label: "Actifs", defaultOpen: true, callback: () => {} }),
      new MenuIcon({ key: "archives", label: "Archivés", callback: () => {} }),
      new MenuIcon({ key: "supprimes", label: "Supprimés", disabled: true, callback: () => {} }),
    ],
  });` },
  "TaMessengerButtonModesExample": { template: `<ta-messenger-button mode="full">Envoyer via Messenger</ta-messenger-button>
<ta-messenger-button mode="logo"></ta-messenger-button>`, members: `` },
  "TaMessengerButtonSizesExample": { template: `<ta-messenger-button size="small" mode="logo"></ta-messenger-button>
<ta-messenger-button size="medium" mode="logo"></ta-messenger-button>
<ta-messenger-button size="large" mode="logo"></ta-messenger-button>`, members: `` },
  "TaMessengerButtonStatesExample": { template: `<ta-messenger-button state="classic" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-messenger-button>
<ta-messenger-button state="disabled" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-messenger-button>
<ta-messenger-button state="inactive" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-messenger-button>
<p>Clics émis : {{ this.clicks }}</p>`, members: `clicks = 0;` },
  "TaMixedChartComboExample": { template: `<div style="max-width: 640px">
  <ta-mixed-chart [labels]="this.labels" [datasets]="this.datasets" [chartHeight]="280"></ta-mixed-chart>
</div>`, members: `labels = ["T1", "T2", "T3", "T4"];

datasets: ChartDataset[] = [
    { type: "bar" as const, label: "Ventes réalisées", data: [200, 300, 250, 400], backgroundColor: ChartColors.blue700 },
    { type: "line" as const, label: "Objectif", data: [250, 250, 300, 350], borderColor: ChartColors.warning, fill: false },
  ];` },
  "TaModalBackdropExample": { template: `<ta-button type="secondary" (action)="this.isOpen = true">Ouvrir (fond non cliquable)</ta-button>

<ta-modal [open]="this.isOpen" [closeOnBackdrop]="false" title="Fermeture bloquée" (closeEvent)="this.isOpen = false">
  <div modal-content>Cliquer le fond assombri ne ferme pas cette modale : seuls la croix et le bouton ci-dessous le font.</div>
  <div modal-footer>
    <ta-button type="primary" (action)="this.isOpen = false">Fermer</ta-button>
  </div>
</ta-modal>`, members: `isOpen = false;` },
  "TaModalSizesExample": { template: `<div class="flex-row g-space-sm">
  @for (option of this.sizes; track option) {
    <ta-button size="small" type="secondary" (action)="this.open(option)">{{ option }}</ta-button>
  }
</div>

<ta-modal [open]="this.isOpen" [size]="this.size" title="Modale" (closeEvent)="this.isOpen = false">
  <div modal-content>Taille actuelle : <strong>{{ this.size }}</strong>.</div>
  <div modal-footer>
    <ta-button type="primary" (action)="this.isOpen = false">Fermer</ta-button>
  </div>
</ta-modal>`, members: `readonly sizes: ModalSize[] = ["small", "medium", "large", "fullscreen"];

isOpen = false;

size: ModalSize = "small";

open(size: ModalSize): void {
    this.size = size;
    this.isOpen = true;
  }` },
  "TaNewRelativeExample": { template: `<span>Dans le flux :</span>
<ta-new [visible]="true" [isRelative]="true" size="lg"></ta-new>`, members: `` },
  "TaNewVisibleExample": { template: `<div style="position: relative; display: inline-block; padding: 12px 24px; background: #f2f2f2; border-radius: 8px;">
  Nouveauté
  <ta-new [visible]="true"></ta-new>
</div>
<div style="position: relative; display: inline-block; padding: 12px 24px; background: #f2f2f2; border-radius: 8px;">
  Déjà vu
  <ta-new [visible]="false"></ta-new>
</div>`, members: `` },
  "TaNotificationBadgeContainerExample": { template: `<ta-notification-badge-container style="display: inline-flex; width: 48px; height: 48px; background: #eee; border-radius: 8px">
  <ta-notification-badge [number]="4" style="semantic-token-alert"></ta-notification-badge>
</ta-notification-badge-container>`, members: `` },
  "TaNotificationBadgeContainerIconExample": { template: `<ta-notification-badge-container style="display: inline-flex; width: 40px; height: 40px; background: #eee; border-radius: 50%">
  <ta-notification-badge [number]="9" style="semantic-token-alert"></ta-notification-badge>
</ta-notification-badge-container>`, members: `` },
  "TaNotificationBadgeContainerTextExample": { template: `<ta-notification-badge-container style="display: inline-block; padding: 8px 16px; background: #eee; border-radius: 8px">
  Messages
  <ta-notification-badge [number]="12" style="semantic-token-warning"></ta-notification-badge>
</ta-notification-badge-container>`, members: `` },
  "TaNotificationBadgeFontSizesExample": { template: `<ta-notification-badge [number]="1" [relative]="true" fontSize="xs" style="semantic-token-success"></ta-notification-badge>
<ta-notification-badge [number]="2" [relative]="true" fontSize="sm" style="semantic-token-success"></ta-notification-badge>
<ta-notification-badge [number]="3" [relative]="true" fontSize="md" style="semantic-token-success"></ta-notification-badge>
<ta-notification-badge [number]="4" [relative]="true" fontSize="lg" style="semantic-token-success"></ta-notification-badge>`, members: `` },
  "TaNotificationBoxStackExample": { template: `<div class="flex-column g-space-md">
  <div class="flex-row g-space-sm">
    <ta-button size="small" type="secondary" (action)="this.push(this.information, 'Nouvelle version disponible.')">
      Information
    </ta-button>
    <ta-button size="small" type="secondary" (action)="this.push(this.success, 'Enregistrement effectué.')">
      Succès
    </ta-button>
    <ta-button size="small" type="secondary" (action)="this.push(this.warning, 'Vérifiez les champs avant de continuer.')">
      Attention
    </ta-button>
    <ta-button size="small" type="danger" (action)="this.push(this.error, 'Échec de la sauvegarde.')">Erreur</ta-button>
  </div>
  <ta-notification-box></ta-notification-box>
</div>`, members: `private _notificationService = inject(TaNotificationService);

private _cdr = inject(ChangeDetectorRef);

information = ENotificationCode.information;

success = ENotificationCode.success;

warning = ENotificationCode.warning;

error = ENotificationCode.error;

push(code: ENotificationCode, message: string) {
    this._notificationService.addNotification(message, code);
    setTimeout(() => this._cdr.detectChanges());
  }` },
  "TaNotificationBulletCountExample": { template: `<ta-notification-bullet></ta-notification-bullet>`, members: `` },
  "TaNotificationInlineCloseExample": { template: `<div class="flex-column g-space-sm">
  @if (this.visible()) {
    <ta-notification-inline
      message="Cette bannière se ferme au clic sur la croix."
      [code]="this.warning"
      [showClose]="true"
      (askClose)="this.close()"
    ></ta-notification-inline>
  } @else {
    <ta-button size="small" (action)="this.reveal()">Réafficher</ta-button>
  }
</div>`, members: `warning = ENotificationCode.warning;

visible = signal(true);

private _cdr = inject(ChangeDetectorRef);

constructor() {
    setTimeout(() => this._cdr.detectChanges());
  }

close() {
    this.visible.set(false);
  }

reveal() {
    this.visible.set(true);
    // Le composant recréé retombe dans le même décalage d'un cycle que
    // l'exemple « Quatre types » : un second passage forcé le rend visible tout
    // de suite plutôt qu'au prochain clic ailleurs sur la page.
    setTimeout(() => this._cdr.detectChanges());
  }` },
  "TaNotificationInlineEmptyExample": { template: `<ta-notification-inline>
  <span>Aucune alerte pour le moment.</span>
</ta-notification-inline>`, members: `` },
  "TaNotificationInlineErrorDetailsExample": { template: `<ta-notification-inline message="La synchronisation a échoué." [code]="this.error" [showClose]="false"></ta-notification-inline>`, members: `error = ENotificationCode.error;

private _cdr = inject(ChangeDetectorRef);

constructor() {
    setTimeout(() => this._cdr.detectChanges());
  }` },
  "TaNotificationInlineTypesExample": { template: `<ta-notification-inline message="Une mise à jour est disponible." [code]="this.information"></ta-notification-inline>
<ta-notification-inline message="Enregistrement effectué." [code]="this.success"></ta-notification-inline>
<ta-notification-inline message="Vérifiez les champs avant de continuer." [code]="this.warning"></ta-notification-inline>
<ta-notification-inline message="Échec de la sauvegarde." [code]="this.error"></ta-notification-inline>`, members: `information = ENotificationCode.information;

success = ENotificationCode.success;

warning = ENotificationCode.warning;

error = ENotificationCode.error;

private _cdr = inject(ChangeDetectorRef);

constructor() {
    setTimeout(() => this._cdr.detectChanges());
  }` },
  "TaOverlayPanelMenuExample": { template: `<ta-overlay-panel [panelConfig]="{}" (closed)="this.closes = this.closes + 1">
  <ng-template #panelTrigger>
    <ta-button type="secondary" icon="more_vert" [stopPropagationActivation]="false">Options</ta-button>
  </ng-template>
  <ng-template #panelContent>
    <div class="flex-column g-space-xs p-space-sm">
      <div>Modifier</div>
      <div>Dupliquer</div>
      <div>Supprimer</div>
    </div>
  </ng-template>
</ta-overlay-panel>
<p>Fermetures détectées : {{ this.closes }}</p>`, members: `closes = 0;` },
  "TaOverlayPanelPositionExample": { template: `<ta-overlay-panel [panelConfig]="{}" position="right">
  <ng-template #panelTrigger>
    <ta-button type="secondary" icon="chevron_right" [stopPropagationActivation]="false">Panneau à droite</ta-button>
  </ng-template>
  <ng-template #panelContent>
    <div class="p-space-sm">Positionné à droite du déclencheur (repli à gauche si la place manque).</div>
  </ng-template>
</ta-overlay-panel>`, members: `` },
  "TaPdfViewerDefaultExample": { template: `<div style="height: 420px">
  <ta-pdf-viewer style="display: block; height: 100%" [file]="this.file"></ta-pdf-viewer>
</div>`, members: `file: PreviewDocumentDto = {
    filename: "rapport-financier-2025.pdf",
    url: "/assets/showcase/files-basic/rapport-financier-2025.pdf",
    size: 842_311,
    uploadedDate: "2025-11-03T09:15:00",
  };` },
  "TaPictureInfoMessageFallbackExample": { template: `<ta-picture-info-message text="Cette action est irréversible." type="warning"></ta-picture-info-message>
<ta-picture-info-message text="Une erreur est survenue." type="danger"></ta-picture-info-message>`, members: `` },
  "TaPictureInfoMessageWithIconExample": { template: `<ta-picture-info-message [icon]="this.TaIconType.NoResult" text="Aucun résultat pour cette recherche."></ta-picture-info-message>
<ta-picture-info-message icon="info" iconSize="lg" text="Icône Material passée en chaîne : isFontIcon() la détecte via son typeof string."></ta-picture-info-message>`, members: `readonly TaIconType = TaIconType;` },
  "TaPieChartBrowsersExample": { template: `<div style="max-width: 420px">
  <ta-pie-chart [labels]="this.labels" [datasets]="this.datasets" [chartHeight]="280"></ta-pie-chart>
</div>`, members: `labels = ["Chrome", "Firefox", "Safari", "Edge"];

datasets: ChartDataset[] = [
    {
      data: [45, 25, 20, 10],
      backgroundColor: [ChartColors.blue700, ChartColors.blue500, ChartColors.success, ChartColors.warning],
    },
  ];` },
  "TaProgressBarDataMetricsExample": { template: `<div class="flex-column g-space-md">
  <ta-progress-bar-data title="Stockage utilisé" titleIcon="storage" [current]="30" [max]="100"></ta-progress-bar-data>
  <ta-progress-bar-data title="Mémoire" titleIcon="memory" [current]="85" [max]="100" [rightText]="{ text: 'Proche de la limite' }"></ta-progress-bar-data>
  <ta-progress-bar-data title="Tâches restantes"></ta-progress-bar-data>
</div>`, members: `` },
  "TaProgressBarValuesExample": { template: `<div class="flex-column g-space-md full-width">
  <ta-progress-bar [current]="30" [max]="100"></ta-progress-bar>
  <ta-progress-bar [current]="75" [max]="100"></ta-progress-bar>
  <ta-progress-bar [current]="12" [max]="12"></ta-progress-bar>
</div>`, members: `` },
  "TaProgressCircleValuesExample": { template: `<div class="flex-row g-space-lg">
  <ta-progress-circle [progress]="25" upTitle="Téléchargements" downTitle="25 %"></ta-progress-circle>
  <ta-progress-circle [progress]="60" upTitle="Stockage" downTitle="60 %"></ta-progress-circle>
  <ta-progress-circle [progress]="90" upTitle="CPU" downTitle="90 %"></ta-progress-circle>
</div>`, members: `` },
  "TaProgressSizesExample": { template: `<div class="flex-column g-space-sm">
  <ta-progress size="xs" [value]="70">xs</ta-progress>
  <ta-progress size="sm" [value]="70">sm</ta-progress>
  <ta-progress size="md" [value]="70">md (défaut)</ta-progress>
  <ta-progress size="lg" [value]="70">lg</ta-progress>
</div>`, members: `` },
  "TaProgressTypesExample": { template: `<div class="flex-column g-space-sm">
  @for (type of this.types; track type) {
    <ta-progress [type]="type" [value]="60">{{ type }}</ta-progress>
  }
</div>`, members: `readonly types = ["default", "secondary", "success", "warning", "alert", "purple", "new"] as const;` },
  "TaProgressValuesExample": { template: `<div class="flex-column g-space-sm">
  <ta-progress [value]="25">25 %</ta-progress>
  <ta-progress [value]="50">50 %</ta-progress>
  <ta-progress [value]="75">75 %</ta-progress>
  <ta-progress [value]="100">100 %</ta-progress>
</div>`, members: `` },
  "TaPwaPromptExample": { template: `<ta-pwa></ta-pwa>`, members: `constructor() {
    // \`isShowed\` (propriété simple, pas un signal) se calcule dans le constructeur
    // à partir de \`capability && !LocalStorage.get('askForPwaAbility')\` : un clic
    // précédent sur « Ne plus demander » (\`dontAsk()\`) mémorise ce refus dans le
    // navigateur et masquerait cet exemple sans ce nettoyage.
    LocalStorage.delete("askForPwaAbility");
  }` },
  "TaRatingColorsExample": { template: `<ta-rating [value]="4" [readonly]="true" color="#22c55e" emptyColor="#e5e7eb" [size]="32"></ta-rating>`, members: `` },
  "TaRatingDistributionDefaultExample": { template: `<ta-rating-distribution [values]="this.values"></ta-rating-distribution>`, members: `readonly values = [5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 3, 5, 5, 4, 2];` },
  "TaRatingDistributionEmptyExample": { template: `<ta-rating-distribution [values]="[]"></ta-rating-distribution>`, members: `` },
  "TaRatingDistributionScaleExample": { template: `<ta-rating-distribution [values]="this.values" [max]="10"></ta-rating-distribution>`, members: `readonly values = [10, 9, 9, 8, 8, 8, 7, 6, 10, 9];` },
  "TaRatingInteractiveExample": { template: `<ta-rating [value]="this.value" (ratingChange)="this.value = $event"></ta-rating>
<p>Note choisie : {{ this.value }} / 5</p>`, members: `value = 3;` },
  "TaRatingReadonlyExample": { template: `<div class="flex-column g-space-sm">
  <ta-rating [value]="1" [readonly]="true"></ta-rating>
  <ta-rating [value]="3.5" [readonly]="true"></ta-rating>
  <ta-rating [value]="5" [readonly]="true"></ta-rating>
</div>`, members: `` },
  "TaSearchFieldCollapsedExample": { template: `<ta-search-field [input]="this.model" [placeholder]="'Rechercher…'"></ta-search-field> `, members: `model = new InputTextBox({ key: "search-collapsed", label: "Recherche" });` },
  "TaSearchFieldDisabledExample": { template: `<ta-search-field [input]="this.model"></ta-search-field> `, members: `model = new InputTextBox({ key: "search-disabled", label: "Recherche verrouillée", value: "Bruxelles", disabled: true });` },
  "TaSearchFieldOpenExample": { template: `<ta-search-field [input]="this.model" [isOpen]="true" (valueCompleted)="this.onCompleted($event)"></ta-search-field>
@if (this.completed(); as value) {
  <p>Dernière valeur validée : {{ value || "(vide)" }}</p>
}`, members: `model = new InputTextBox({ key: "search-open", label: "Recherche", value: "Bruxelles" });

completed = signal<string | null>(null);

onCompleted(value: string) {
    this.completed.set(value);
  }` },
  "TaSearchHistoryDisplayerDropdownExample": { template: `<div style="max-width: 320px">
  <ta-search-history-displayer
    [placeholder]="'Rechercher un article'"
    [searchHistory]="this.searchType"
    [isDropDown]="true"
    (valueCompleted)="this.selected = $event"
  ></ta-search-history-displayer>
  @if (this.selected) {
    <p>Dernière recherche validée : {{ this.selected }}</p>
  }
</div>`, members: `readonly searchType = { type: "vitrine-search-history-dropdown" };

selected = "";` },
  "TaSearchHistoryDisplayerInlineExample": { template: `<div style="max-width: 320px">
  <ta-search-history-displayer
    [placeholder]="'Rechercher un article'"
    [searchHistory]="this.searchType"
    [isDropDown]="false"
    (valueCompleted)="this.selected = $event"
  ></ta-search-history-displayer>
  @if (this.selected) {
    <p>Dernière recherche validée : {{ this.selected }}</p>
  }
</div>`, members: `readonly searchType = { type: "vitrine-search-history-inline" };

selected = "";` },
  "TaShareButtonSizesExample": { template: `<ta-share-button size="small" shareTitle="Techatome" url="https://techatome.be">Petit</ta-share-button>
<ta-share-button size="medium" shareTitle="Techatome" url="https://techatome.be">Moyen</ta-share-button>
<ta-share-button size="large" shareTitle="Techatome" url="https://techatome.be">Grand</ta-share-button>`, members: `` },
  "TaShareButtonStatesExample": { template: `<ta-share-button state="classic" (action)="this.clicks = this.clicks + 1">Classic</ta-share-button>
<ta-share-button state="disabled" (action)="this.clicks = this.clicks + 1">Disabled</ta-share-button>
<ta-share-button state="inactive" (action)="this.clicks = this.clicks + 1">Inactive</ta-share-button>
<p>Partages émis : {{ this.clicks }}</p>`, members: `clicks = 0;` },
  "TaSwiperLightGalleryExample": { template: `<ta-swiper-light [items]="this.items" [template]="slideTpl" [forced]="true"></ta-swiper-light>

<ng-template #slideTpl let-element="element">
  <div style="width: 160px" class="p-space-md bdr-radius-rounded">{{ element.label }}</div>
</ng-template>`, members: `readonly items: Slide[] = [
    { id: "1", label: "Séjour" },
    { id: "2", label: "Cuisine" },
    { id: "3", label: "Chambre" },
    { id: "4", label: "Salle de bain" },
    { id: "5", label: "Terrasse" },
  ];` },
  "TaSwiperScrollExample": { template: `<ta-swiper>
  @for (label of this.slides; track label) {
    <div style="display: inline-block; width: 160px; margin-right: 16px; vertical-align: top" class="p-space-md bdr-radius-rounded">
      {{ label }}
    </div>
  }
</ta-swiper>`, members: `readonly slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];` },
  "TaSwitchLanguageCtaDefaultExample": { template: `<ta-switch-language-cta></ta-switch-language-cta>`, members: `` },
  "TaSwitchLanguageModesExample": { template: `<div class="flex-column align-center g-space-xs">
  <ta-switch-language mode="inline"></ta-switch-language>
  <ta-text size="sm">inline</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-switch-language mode="dropdown"></ta-switch-language>
  <ta-text size="sm">dropdown</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-switch-language mode="modal"></ta-switch-language>
  <ta-text size="sm">modal</ta-text>
</div>`, members: `` },
  "TaTemplateModalContainerWorkingExample": { template: `<div class="flex-row g-space-sm">
  <ta-button type="secondary" size="small" (action)="this.open('classic')">classic (medium)</ta-button>
  <ta-button type="secondary" size="small" (action)="this.open('big')">big (large)</ta-button>
  <ta-button type="secondary" size="small" (action)="this.open('small')">small (small)</ta-button>
  <ta-button type="secondary" size="small" (action)="this.open('full')">full (fullscreen)</ta-button>
</div>

<ta-template-modal-container [open]="this.isOpen()" [template]="this.modalTpl" [style]="this.activeStyle()" (closeEvent)="this.isOpen.set(false)"> </ta-template-modal-container>

<ng-template #modalTpl>
  <ta-layout-modal title="Éditer une adresse" (closeEvent)="this.isOpen.set(false)">
    <div class="flex-column g-space-sm">
      <ta-text size="sm">Style ouvert : {{ this.activeStyle() }}</ta-text>
      <ta-text>Rue, code postal, ville…</ta-text>
    </div>
  </ta-layout-modal>
</ng-template>`, members: `@ViewChild("modalTpl", { static: true }) modalTpl!: TemplateRef<unknown>;

readonly isOpen = signal(false);

readonly activeStyle = signal<ModalStyle>("classic");

open(style: ModalStyle): void {
    this.activeStyle.set(style);
    this.isOpen.set(true);
  }` },
  "TaTextBoldExample": { template: `<ta-text [isBold]="false">Texte normal</ta-text>
<ta-text [isBold]="true">Texte en gras</ta-text>`, members: `` },
  "TaTextColorsExample": { template: `<ta-text color="default">Default</ta-text>
<ta-text color="secondary">Secondary</ta-text>
<ta-text color="success">Success</ta-text>
<ta-text color="warning">Warning</ta-text>
<ta-text color="alert">Alert</ta-text>
<ta-text color="purple">Purple</ta-text>
<ta-text color="new">New</ta-text>`, members: `` },
  "TaTextSizesExample": { template: `<ta-text size="xs">xs</ta-text>
<ta-text size="sm">sm</ta-text>
<ta-text size="md">md</ta-text>
<ta-text size="lg">lg</ta-text>
<ta-text size="xl">xl</ta-text>
<ta-text size="xxl">xxl</ta-text>
<ta-text size="big">big</ta-text>`, members: `` },
  "TaTextToClipboardSizesExample": { template: `<div class="flex-column align-center g-space-xs">
  <ta-text-to-clipboard [value]="'xs'" iconSize="xs"></ta-text-to-clipboard>
  <ta-text size="sm">xs</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-text-to-clipboard [value]="'sm'" iconSize="sm"></ta-text-to-clipboard>
  <ta-text size="sm">sm (défaut)</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-text-to-clipboard [value]="'md'" iconSize="md"></ta-text-to-clipboard>
  <ta-text size="sm">md</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-text-to-clipboard [value]="'lg'" iconSize="lg"></ta-text-to-clipboard>
  <ta-text size="sm">lg</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-text-to-clipboard [value]="'xl'" iconSize="xl"></ta-text-to-clipboard>
  <ta-text size="sm">xl</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-text-to-clipboard [value]="'xxl'" iconSize="xxl"></ta-text-to-clipboard>
  <ta-text size="sm">xxl</ta-text>
</div>
<div class="flex-column align-center g-space-xs">
  <ta-text-to-clipboard [value]="'big'" iconSize="big"></ta-text-to-clipboard>
  <ta-text size="sm">big</ta-text>
</div>`, members: `` },
  "TaTextToClipboardValueExample": { template: `<div class="align-center g-space-xs">
  <span>REF-2024-00842</span>
  <ta-text-to-clipboard [value]="'REF-2024-00842'"></ta-text-to-clipboard>
</div>`, members: `` },
  "TaTimeAgoCloseExample": { template: `<ta-time-ago [date]="this.threeMinutesAgo"></ta-time-ago>
<ta-time-ago [date]="this.yesterday"></ta-time-ago>
<ta-time-ago [date]="this.twoDaysAgo"></ta-time-ago>
<ta-time-ago [date]="this.tomorrow"></ta-time-ago>`, members: `readonly threeMinutesAgo = minutesAgo(3);

readonly yesterday = daysFromNow(-1);

readonly twoDaysAgo = daysFromNow(-2);

readonly tomorrow = daysFromNow(1);` },
  "TaTimeAgoFarExample": { template: `<ta-time-ago [date]="this.twoYearsAgo"></ta-time-ago>
<ta-time-ago [date]="this.inFourDays"></ta-time-ago>`, members: `readonly twoYearsAgo = new Date(Date.now() - 730 * 86_400_000).toISOString();

readonly inFourDays = daysFromNow(4);` },
  "TaTitleIconAndStylesExample": { template: `<ta-title [level]="2" icon="build">Avec icône</ta-title>
<ta-title [level]="2" [isBold]="true">En gras</ta-title>
<ta-title [level]="2" [isTheme]="true">Thématisé</ta-title>`, members: `` },
  "TaTitleLevelsExample": { template: `<ta-title [level]="1">Titre niveau 1</ta-title>
<ta-title [level]="2">Titre niveau 2</ta-title>
<ta-title [level]="3">Titre niveau 3</ta-title>
<ta-title [level]="4">Titre niveau 4</ta-title>
<ta-title [level]="5">Titre niveau 5</ta-title>
<ta-title [level]="6">Titre niveau 6</ta-title>`, members: `` },
  "TaToastCodesExample": { template: `<div class="flex-column g-space-sm">
  @for (item of this.codes; track item.code) {
    <ta-toast [code]="item.code">{{ item.label }}</ta-toast>
  }
</div>`, members: `readonly codes: { label: string; code: number }[] = [
    { label: "Information (par défaut)", code: 3 },
    { label: "Succès", code: 4 },
    { label: "Attention", code: 2 },
    { label: "Erreur", code: 1 },
    { label: "Neutre (none)", code: 0 },
  ];` },
  "TaToggleCardDisabledExample": { template: `<ta-toggle-card title="Option indisponible" description="Ne réagit pas au clic" [disabled]="true" (toggle)="this.toggles = this.toggles + 1"></ta-toggle-card>
    <p>Bascules émises : {{ this.toggles }}</p>`, members: `toggles = 0;` },
  "TaToggleCardSelectionExample": { template: `<div class="flex-row g-space-md">
  @for (option of this.options; track option.id) {
    <ta-toggle-card
      [title]="option.title"
      [description]="option.description"
      [icon]="option.icon"
      [isActive]="this.selected === option.id"
      (toggle)="this.selected = option.id"
    ></ta-toggle-card>
  }
</div>`, members: `readonly options = [
    { id: "email", title: "E-mail", description: "Recevoir les notifications par e-mail", icon: "mail" },
    { id: "sms", title: "SMS", description: "Recevoir les notifications par SMS", icon: "sms" },
  ];

selected = "email";` },
  "TaTreeChildrenConnectorExample": { template: `<ta-tree-container>
  <ta-tree-item>
    Ardenne
    <ta-tree-children>
      <ta-tree-item>Bastogne</ta-tree-item>
      <ta-tree-item>Saint-Hubert</ta-tree-item>
    </ta-tree-children>
  </ta-tree-item>
</ta-tree-container>`, members: `` },
  "TaTreeContainerRegionsExample": { template: `<ta-tree-container>
  <ta-tree-item>
    Ardenne
    <ta-tree-children>
      <ta-tree-item>Bastogne</ta-tree-item>
      <ta-tree-item>
        Saint-Hubert
        <ta-tree-children>
          <ta-tree-item>Centre-ville</ta-tree-item>
        </ta-tree-children>
      </ta-tree-item>
    </ta-tree-children>
  </ta-tree-item>
  <ta-tree-item>Wallonie picarde</ta-tree-item>
</ta-tree-container>`, members: `` },
  "TaTreeItemNestedExample": { template: `<ta-tree-container>
  <ta-tree-item>
    Ardenne
    <ta-tree-children>
      <ta-tree-item>Bastogne</ta-tree-item>
      <ta-tree-item>
        Saint-Hubert
        <ta-tree-children>
          <ta-tree-item>Centre-ville</ta-tree-item>
        </ta-tree-children>
      </ta-tree-item>
    </ta-tree-children>
  </ta-tree-item>
  <ta-tree-item>Wallonie picarde</ta-tree-item>
</ta-tree-container>`, members: `` },
  "TaTrigramSizesExample": { template: `<ta-trigram value="CB" [size]="24"></ta-trigram>
<ta-trigram value="CB" [size]="35"></ta-trigram>
<ta-trigram value="CB" [size]="60"></ta-trigram>`, members: `` },
  "TaTrigramTonesExample": { template: `<div class="tones">
  <ta-trigram value="CB" tone="brand" [size]="48"></ta-trigram>
  <ta-trigram value="CB" tone="highlight" [size]="48"></ta-trigram>
  <ta-trigram value="CB" tone="surface" [size]="48"></ta-trigram>
</div>
<div class="tones tones--dark">
  <ta-trigram value="CB" tone="invert" [size]="48"></ta-trigram>
</div>`, members: `` },
  "TaTrigramValuesExample": { template: `<ta-trigram value="AMB"></ta-trigram>
<ta-trigram value="JD"></ta-trigram>
<ta-trigram [value]="null"></ta-trigram>`, members: `` },
  "TaTypedMessageTypesExample": { template: `<ta-typed-message type="info" text="Les modifications sont enregistrées automatiquement."></ta-typed-message>
<ta-typed-message type="success" text="Le paiement a été validé."></ta-typed-message>
<ta-typed-message type="warning" text="Cette action est irréversible."></ta-typed-message>
<ta-typed-message type="danger" text="La sauvegarde a échoué."></ta-typed-message>`, members: `` },
  "TaUserLogoDefaultTypeExample": { template: `<ta-user-logo [user]="this.alice" defaultType="trigram"></ta-user-logo>
<ta-user-logo [user]="this.bo" defaultType="trigram"></ta-user-logo>
<ta-user-logo [user]="this.alice" defaultType="font"></ta-user-logo>`, members: `readonly alice: UserLogoData = { firstname: "Alice", lastname: "Martin" };

readonly bo: UserLogoData = { firstname: "Bo", lastname: "Lambert" };` },
  "TaUserLogoPictureExample": { template: `<ta-user-logo [user]="this.withPicture" size="xl"></ta-user-logo>`, members: `readonly withPicture: UserLogoData = {
    firstname: "David",
    lastname: "Leroy",
    picture: "/assets/partners/icon/icon.png",
  };` },
  "TaUserLogoSizesExample": { template: `<ta-user-logo [user]="this.user" size="sm"></ta-user-logo>
<ta-user-logo [user]="this.user" size="md"></ta-user-logo>
<ta-user-logo [user]="this.user" size="lg"></ta-user-logo>
<ta-user-logo [user]="this.user" size="xl"></ta-user-logo>`, members: `readonly user: UserLogoData = { firstname: "Alice", lastname: "Martin" };` },
  "TaUsersListEmptyExample": { template: `<ta-users-list [users]="this.users$"></ta-users-list>`, members: `readonly users$ = of<UserLogoData[]>([]);` },
  "TaUsersListValuesExample": { template: `<ta-users-list [users]="this.users$"></ta-users-list>`, members: `readonly users$ = of<UserLogoData[]>([
    { firstname: "Alice", lastname: "Martin" },
    { firstname: "Bo", lastname: "Lambert" },
    { firstname: "Claire", lastname: "Bernard" },
  ]);` },
  "TaValidationModalExternalExample": { template: `<ta-button type="danger" icon="delete" (action)="this.isOpen = true">Supprimer le compte</ta-button>

<ta-validation-modal
  [open]="this.isOpen"
  [params]="this.params"
  (validated)="this.confirmations = this.confirmations + 1"
  (closeEvent)="this.isOpen = false"
></ta-validation-modal>
<p>Suppressions confirmées : {{ this.confirmations }}</p>`, members: `readonly params: ModalParameter = { title: "Supprimer le compte ?", subtitle: "Toutes les données associées seront perdues." };

isOpen = false;

confirmations = 0;` },
  "TaVeriffButtonModesExample": { template: `<ta-veriff-button mode="full">Vérifier mon identité</ta-veriff-button>
<ta-veriff-button mode="logo"></ta-veriff-button>`, members: `` },
  "TaVeriffButtonSizesExample": { template: `<ta-veriff-button size="small" mode="logo"></ta-veriff-button>
<ta-veriff-button size="medium" mode="logo"></ta-veriff-button>
<ta-veriff-button size="large" mode="logo"></ta-veriff-button>`, members: `` },
  "TaVeriffButtonStatesExample": { template: `<ta-veriff-button state="classic" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-veriff-button>
<ta-veriff-button state="disabled" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-veriff-button>
<ta-veriff-button state="inactive" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-veriff-button>
<p>Clics émis : {{ this.clicks }}</p>`, members: `clicks = 0;` },
  "TaWhatsappButtonMessageExample": { template: `<ta-whatsapp-button mode="full" message="Bonjour, j'ai une question sur vos services.">Discuter sur WhatsApp</ta-whatsapp-button>`, members: `` },
  "TaWhatsappButtonModesExample": { template: `<ta-whatsapp-button mode="full">Nous contacter</ta-whatsapp-button>
<ta-whatsapp-button mode="logo"></ta-whatsapp-button>`, members: `` },
  "TaWhatsappButtonStatesExample": { template: `<ta-whatsapp-button state="classic" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-whatsapp-button>
<ta-whatsapp-button state="disabled" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-whatsapp-button>
<ta-whatsapp-button state="inactive" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-whatsapp-button>
<p>Clics émis : {{ this.clicks }}</p>`, members: `clicks = 0;` },
  "TaWordViewerDefaultExample": { template: `<div style="height: 420px">
  <ta-word-viewer style="display: block; height: 100%" [file]="this.file"></ta-word-viewer>
</div>`, members: `file: PreviewDocumentDto = {
    filename: "contrat-prestation-signe.docx",
    url: "/assets/showcase/files-basic/contrat-prestation-signe.docx",
    size: 128_744,
    uploadedDate: "2025-10-18T14:02:00",
  };` },
  "TaWrappedIconSizesExample": { template: `<ta-wrapped-icon type="success" icon="check" size="xs"></ta-wrapped-icon>
<ta-wrapped-icon type="success" icon="check" size="sm"></ta-wrapped-icon>
<ta-wrapped-icon type="success" icon="check" size="md"></ta-wrapped-icon>
<ta-wrapped-icon type="success" icon="check" size="lg"></ta-wrapped-icon>`, members: `` },
  "TaWrappedIconTypesExample": { template: `<ta-wrapped-icon type="default" icon="home"></ta-wrapped-icon>
<ta-wrapped-icon type="secondary" icon="home"></ta-wrapped-icon>
<ta-wrapped-icon type="success" icon="check"></ta-wrapped-icon>
<ta-wrapped-icon type="warning" icon="warning"></ta-wrapped-icon>
<ta-wrapped-icon type="alert" icon="error"></ta-wrapped-icon>
<ta-wrapped-icon type="purple" icon="star"></ta-wrapped-icon>
<ta-wrapped-icon type="new" icon="new_releases"></ta-wrapped-icon>`, members: `` },
};
