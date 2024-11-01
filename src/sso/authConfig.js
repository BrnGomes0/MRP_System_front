export const msalConfig = {
    auth: {
        clientId: ``,
        authority: ``,
        redirectUri: ``,
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
      allowNativeBroker: false, // Disables WAM Broker
    },
  };
  // Add here scopes for id token to be used at MS Identity Platform endpoints.
  export const loginRequest = {
    scopes: ["User.Read"],
  };
  // Add here the endpoints for MS Graph API services you would like to use.
  export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
    graphMeEndpointPhoto: "https://graph.microsoft.com/v1.0/me/photo/$value",
  };
