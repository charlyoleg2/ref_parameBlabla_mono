Ref_parameBlabla_mono
=====================


Presentation
------------

*Ref_parameBlabla_mono* is the top-monorepo for the design-library *desiBlabla*, which contains a collection of 3D shapes.

This monorepo contains the following *javascript* package:

1. desiBlabla: a *parametrix* design library
2. desiBlabla-cli: the cli of desiBlabla
3. desiBlabla-ui: the web-ui of desiBlabla
4. desiBlabla-uis: the web-server of desiBlabla-ui

This repo is a typical designer-repository using [parametrix](https://charlyoleg2.github.io/parametrix/).
The design-library and its associated UI and CLI are published as *npm-packages*.
The UI is also available on the github-page.


Links
-----

- [desiBlabla-ui](https://MYNAME.github.io/ref_parameBlabla_mono/) : public instance of the UI
- [sources](https://github.com/MYNAME/ref_parameBlabla_mono) : git-repository
- [pkg](https://www.npmjs.com/package/desiBlabla) : desiBlabla as npm-package
- [pkg-cli](https://www.npmjs.com/package/desiBlabla-cli) : desiBlabla-cli as npm-package
- [pkg-uis](https://www.npmjs.com/package/desiBlabla-uis) : desiBlabla-uis as npm-package


Usage for Makers
----------------

Parametrize and generate your 3D-files with the online-app:

[https://MYNAME.github.io/ref_parameBlabla_mono/](https://MYNAME.github.io/ref_parameBlabla_mono/)

Or use the UI locally:

```bash
npx desiBlabla-uis
```

Or use the command-line-interface (CLI):

```bash
npx desiBlabla-cli
```

Getting started for Dev
-----------------------

```bash
git clone https://github.com/MYNAME/ref_parameBlabla_mono
cd ref_parameBlabla_mono
npm i
npm run ci
npm run preview
```

Other useful commands:
```bash
npm run clean
npm run ls-workspaces
npm -w desiBlabla run check
npm -w desiBlabla run build
npm -w desiBlabla-ui run dev
```

Prerequisite
------------

- [node](https://nodejs.org) version 22.0.0 or higher
- [npm](https://docs.npmjs.com/cli/v11/commands/npm) version 11.0.0 or higher


Publish a new release
---------------------

```bash
npm run versions
git commit -am 'increment sub versions'
npm version patch
git push
git push origin v0.5.6
```
