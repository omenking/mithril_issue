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
1. rendering (redraw)
1. routing (m.route.Link)
