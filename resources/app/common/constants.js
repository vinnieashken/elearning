
const ORIGIN  = `${window.origin}`;

export const environment = env.environment;
export const PUBLIC_URL = (environment === `production`) ? "http://www.sde.co.ke/events/public" : ORIGIN;
export const PORTAL = `${PUBLIC_URL}/app`;
export const DIR = (environment === `production`) ? '/events/public/app' : '/app';
export const ENV = (environment === `production`) ? '/events/public/' : '/';

// VAS
export const API = `${PUBLIC_URL}/api`;
export const GRAPH = `${PUBLIC_URL}/graphql`;
export const VAS_API = `https://vas.standardmedia.co.ke`;

