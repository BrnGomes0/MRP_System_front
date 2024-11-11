import process from "process";

export const msalConfig = {
  
    auth: {
        clientId: "",
        authority: "",
        redirectUri: "/use_case",
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: true, 
      secureCookies: true,
    },
    system: {
      allowNativeBroker: false, 
    },
  };
  export const loginRequest = {
    scopes: ["openid", "User.Read"],
  };
  export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
    graphMeEndpointPhoto: "https://graph.microsoft.com/v1.0/me/photo/$value",
  };
