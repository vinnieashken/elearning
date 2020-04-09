
export const APPNAME = `Tutor-Soma`;
const ORIGIN  = `${window.origin}`;

export const environment = env.environment;
export const ISPRODUCTION = (environment === `production`);
export const PUBLIC_URL = (environment === `production`) ? "https://tutorsoma.standardmedia.co.ke" : ORIGIN;
export const PORTAL = `${PUBLIC_URL}/app`;
export const DIR = (environment === `production`) ? '/elearning/public/app' : '/app';
export const ENV = (environment === `production`) ? '/' : '/';

// VAS
export const API = `https://tutorsoma.standardmedia.co.ke/api`;


export const NEXT_CHANGED = "NEXT_CHANGED";
export const LOADING_SUBSCRIPTION = "LOADING_SUBSCRIPTION";
export const SUBSCRIPTION_LOADED = "SUBSCRIPTION_LOADED";
export const SUBSCRIPTION_DELETED = "SUBSCRIPTION_DELETED";
export const SUBJECTS_LOADED = "SUBJECTS_LOADED";
