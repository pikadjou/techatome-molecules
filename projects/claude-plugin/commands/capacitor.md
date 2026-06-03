---
description: Assistant contextuel @ta/capacitor — catalogue compact + pointeurs vers references/capacitor/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/capacitor — Assistant contextuel

Tu es un expert de la librairie `@ta/capacitor` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (service…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/capacitor/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les méthodes ou les API Capacitor.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/capacitor`
- **Import path** : `@ta/capacitor`
- **Localisation** : `projects/capacitor/`
- **Plateforme cible** : Mobile (iOS/Android) via Capacitor + PWA web

## Catalogue

Format : nom (`Class`) — description courte. Le fichier de référence est `references/capacitor/<name>.md`.

### Services

- `DeviceInfoService` — informations sur l'appareil (OS, modèle, version, plateforme : `ios | android | web`).
- `DeviceNetworkService` — état du réseau (`isOnline$`, `connectionType$`).
- `DevicePositionService` — géolocalisation GPS (`getCurrentPosition`, `watchPosition`).
- `PwaService` — fonctionnalités PWA (`canInstall$`, `install()`, `checkForUpdates()`).

## Conventions

- Toujours vérifier la plateforme (`DeviceInfoService`) avant d'utiliser des APIs natives.
- Les services fonctionnent à la fois sur mobile (Capacitor) et web (PWA).
- Utiliser `isOnline$` observable pour réagir aux changements de réseau.
- Les appels Capacitor doivent être encapsulés dans `try/catch` (APIs natives peuvent échouer).
- Ne pas accéder directement aux plugins Capacitor — passer par les services de `@ta/capacitor`.
