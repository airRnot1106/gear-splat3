import { useCookies as vue3UseCookies } from 'vue3-cookies';

const { cookies } = vue3UseCookies();

const isJson = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const useCookie = <T>(key: string) => {
  return {
    get value() {
      const cookie = cookies.get(key);
      if (isJson(cookie)) {
        return JSON.parse(cookie) as T;
      }
      return cookie as T;
    },
    set value(value: T) {
      if (typeof value === 'object') {
        cookies.set(key, JSON.stringify(value));
      } else {
        cookies.set(key, value as string);
      }
    },
  };
};
