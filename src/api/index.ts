import { routes } from "./const";
import { IRequestParams } from "./typings";
import { makeUrl } from "./utils";

export const makeRequest = (route: routes, params: IRequestParams) => fetch(makeUrl(route, params.searchId));
