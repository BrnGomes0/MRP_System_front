export const msalConfig = {
    auth: {
        clientId: "60fb1405-2498-4f01-93e3-97022fee0a42",
        authority:"https://login.microsoftonline.com/0ae51e19-07c8-4e4b-bb6d-648ee58410f4",
        redirectUri: "/use_case",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
      secureCookies: true,
    },
    system: {
      allowNativeBroker: false, // Disables WAM Broker
    },
  };
  // Add here scopes for id token to be used at MS Identity Platform endpoints.
  export const loginRequest = {
    scopes: ["openid", "User.Read"],
  };
  // Add here the endpoints for MS Graph API services you would like to use.
  export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
    graphMeEndpointPhoto: "https://graph.microsoft.com/v1.0/me/photo/$value",
  };