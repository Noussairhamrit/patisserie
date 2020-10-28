// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCXFaQqJXk_12vgnV0oNRsOhHdb5_XzH24",
  authDomain: "patesserie-ef68d.firebaseapp.com",
  databaseURL: "https://patesserie-ef68d.firebaseio.com",
  projectId: "patesserie-ef68d",
  storageBucket: "patesserie-ef68d.appspot.com",
  messagingSenderId: "820715125199",
  appId: "1:820715125199:web:af452f6cbc74cbd7b1baba",
  measurementId: "G-XFPHHS7C8D"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
