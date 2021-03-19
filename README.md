# Mithril Shared Components Issue
This repo is for the purpose of debugging mithril issue when importing components from another npm package

## Scenario

I am refactoring my large monolithic application into smaller front-end web-apps based on domain.
I have created a UI Kit for and common components eg Header, UserDropDown, Notifications to use across these frontends

eg.
```
my-project
├── shared_ui
│   ├── header
│   └── footer
│   └── navigation
│   └── notifications
├── catalog_domain
├── payments_domain
└── journey_domain
```

## Issues

For components that reside within my UI Kit, Mithril is not acting as expected in two regards:
1. routing (m.route.Link)
1. rendering (redraw)

I have staged a simplified example that replicates the issue within this repo.

### 1. Routing

When using `m.route.Link` within the `shared_ui/nav.js` the url ends up as
follows:

```
http://localhost:8080/hello#!/world
```

instead of the expected:

```
http://localhost:8080/world
```


### 2. Rendering

When a `m.requet` within the `shared_ui/notifications.js` the success function is support to trigger a redraw but it does not.

Adding an explicit `redraw()` does nothing with the component.

## How to Run

## Configure for Local Package

open up `my_app/package.json` and modify the absolute path of `shared_ui`

```
    "shared_ui": "/Users/andrewbrown/Desktop/mithril_debug/shared_ui"
```

## Install Packages

```
cd shared_ui
npm install
cd ..
cd my_app
npm install
```

## Run Web Application

This will start webpack dev server on port `8080`

```
npm start
```
