# Techatome

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

---

# Installation

## Download repo

<https://techatome@dev.azure.com/techatome/Techatome/_git/Techatome>

## Install yarn

```shell
npm install --global yarn
```

## Execute yarn install

`yarn install`

## Run storybook

`yarn run storybook`

---

# Create new lib

## Create lib

```shell
ng g lib [LibName]
```

## Change ng-package.json from new lib

- Dest to

```yaml
"dest": "dist"
```

## Change package.json from new lib

- Change "name" attribute to

```yaml
"name": "@ta/[LibName]"
```

- Add

```yaml
"scripts": {
    "build": "ng build @ta/[LibName]", # Command to compile this particular lib
    "postpublish": "rm -rf dist/",
  }
```

## Change in angular.json

Change

```yaml
"[LibName]": {}
```

to

```yaml
"@ta/[LibName]": {}
```

## Change in tsconfig

```yaml
"[LibName]": ["projects/[LibName]/dist"]
```

to

```yaml
"@ta/[LibName]": ["projects/[LibName]/dist"]
```
