
const ORIGIN  = `${window.origin}`;

export const environment = env.environment;
export const PUBLIC_URL = (environment === `production`) ? "https://www.standardmedia.co.ke/elearning/public" : ORIGIN;
export const PORTAL = `${PUBLIC_URL}/app`;
export const DIR = (environment === `production`) ? '/elearning/public/app' : '/app';
export const ENV = (environment === `production`) ? '/elearning/public/' : '/';

// VAS
export const API = `${PUBLIC_URL}/api`;
export const GRAPH = `${PUBLIC_URL}/graphql`;
export const VAS_API = `https://vas.standardmedia.co.ke`;

