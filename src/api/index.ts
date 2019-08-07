import { routes } from "./const";
import { makeUrl } from "./utils";

export const makeRequest = (route: routes, searchId?: string) => fetch(makeUrl(route, searchId));
