/\*\*

- OverlayPanelComponent is a reusable Angular component that wraps the OverlayService
- to provide an easy and declarative way to display content in an overlay panel.
-
- ## Usage
-
- Wrap your trigger and content using the `panelTrigger` and `panelContent` template references:
-
- ```html

  ```
- <cam-overlay-panel [panelConfig]="{ matchTriggerWidth: true }">
- <ng-template #panelTrigger>
-     <button>Open Menu</button>
- </ng-template>
-
- <ng-template #panelContent>
-     <div>Your overlay content here</div>
- </ng-template>
- </cam-overlay-panel>
- ```

  ```
-
- ## Inputs
-
- - `panelConfig`: A partial OverlayMenuConfig object. `triggerElement`, `menuComponent`, and `template`
- are automatically inferred unless provided.
-
- ## Features
- - Automatically resolves the trigger element from the projected content.
- - Uses `DefaultPanelComponent` by default to display the content.
- - Supports backdrop click, flexible positioning, and match width behavior.
-
- ## When to use this
- Use `OverlayPanelComponent` for simple cases where you want to show a dropdown/popover/modal
- based on a user interaction. For more advanced control (dynamic positioning, lifecycle hooks),
- use `OverlayService` directly.
  \*/
