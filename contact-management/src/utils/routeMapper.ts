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

export const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
