// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  account: {
    url: 'https://genxapp.herokuapp.com',
    routes: {
      login: '/api/v1/login/'
    }
  },

  users: {
    url: 'https://genxapp.herokuapp.com',
    routes: {
      user: '/api/v1/user/',
      details: '/api/v1/user_auth/',
      updateDetails: '/api/v1/user_auth/?format=json',
      deleteUser: '/api/v1/user_auth/'
    }
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
