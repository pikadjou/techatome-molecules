import { Component } from "@angular/core";
import { NotificationService } from "@ta/notification";
import { TitleComponent, TextComponent, ButtonComponent } from "@ta/ui";

@Component({
  selector: "app-notification-showcase",
  standalone: true,
  imports: [TitleComponent, TextComponent, ButtonComponent],
  templateUrl: "./notification-showcase.component.html",
  styleUrl: "./notification-showcase.component.scss",
})
export class NotificationShowcaseComponent {
  constructor(private notificationService: NotificationService) {}

  showSuccess() {
    this.notificationService.success(
      "Opération réussie !",
      "Votre action a été exécutée avec succès."
    );
  }

  showInfo() {
    this.notificationService.info(
      "Information",
      "Voici une notification d'information."
    );
  }

  showWarning() {
    this.notificationService.warning("Attention", "Ceci est un avertissement.");
  }

  showError() {
    this.notificationService.error("Erreur", "Une erreur s'est produite.");
  }
}
