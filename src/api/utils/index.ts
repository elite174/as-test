import { endpoint, routes } from "../const";

export const makeUrl = (route: routes, searchId?: string) => {
  const url = `${endpoint}${route}`;

  if (!searchId) {
    return url;
  }

  return `${url}?searchId=${searchId}`;
};
