//import firebaseConfig from '../firebase.config.ts';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const firebaseConfig = {
  apiKey: "AIzaSyBxlFTXuTkoFUNIDZ2Ruok19iLoqd0PfSo",
  authDomain: "musicshop-e5d71.firebaseapp.com",
  projectId: "musicshop-e5d71",
  storageBucket: "musicshop-e5d71.appspot.com",
  messagingSenderId: "735093193641",
  appId: "1:735093193641:web:3a56c3a5b4ff8f193222b8",
  measurementId: "G-NWY1N7XTZD"
};

export const environment = {
  production: false,
  firebase: firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
