export const environment = {
  production: true,

  // Note that EXPIRY_TASKS must be: EXPIRY_MODELS >= EXPIRY_TASKS
  EXPIRY_MODELS: 48, // 2 days
  EXPIRY_TASKS: 48, // 2 days

  websocketEndpoint: 'ws://central.cps.unizar.es:8471',
  baseApiUrl: 'http://central.cps.unizar.es:8471',
  baseApiUrlStatic: 'http://central.cps.unizar.es:8471/static/',

};
