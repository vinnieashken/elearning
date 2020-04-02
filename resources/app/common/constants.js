
export const APPNAME = `Tutor-Soma`;
const ORIGIN  = `${window.origin}`;

export const environment = env.environment;
export const ISPRODUCTION = (environment === `production`);
export const PUBLIC_URL = (environment === `production`) ? "https://www.standardmedia.co.ke/elearning/public" : ORIGIN;
export const PORTAL = `${PUBLIC_URL}/app`;
export const DIR = (environment === `production`) ? '/elearning/public/app' : '/app';
export const ENV = (environment === `production`) ? '/elearning/public/' : '/';

// VAS
export const API = `https://www.standardmedia.co.ke/elearning/public/api`;


export const SUBSCRIPTION_LOADED = "SUBSCRIPTION_LOADED";
export const SUBSCRIPTION_DELETED = "SUBSCRIPTION_DELETED";
export const SUBJECTS_LOADED = "SUBJECTS_LOADED";
