# CRM Application
This repository contains the solution to the project CRM app for Udacity react native course

## Folder structure
```
App.js
assets
Src
    - component: (Top Level) Components
    - features
        - customer
            - common: common components, i.e. Form
            - feature components: Edit, List, New, etc.
            - Reducers.js, services.js, hooks.js
            - sagas folder
    - Navigation
        - index.js
    - Screens
        - Welcome.js
        - all other screen files go here
    - store
        - index.js
        - reducers.js
        - sagas.js
```
## How to run

```
npm install
npm run start
```
Open Expo GO on your device and scan the QR code