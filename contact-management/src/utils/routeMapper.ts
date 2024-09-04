import { ROUTES } from "../constants/route";

type RouteMap = {
  [key: string]: string;
};

const ROUTE_MAP: RouteMap = {
  [ROUTES.CONTACT]: "Contact",
  [ROUTES.CHARTS_AND_MAPS]: "Charts and Maps",
};

export const getRouteName = (path: string): string => {
  return ROUTE_MAP[path] || "Unknown";
};
