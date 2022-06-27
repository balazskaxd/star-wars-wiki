export const getItemId = (url: string, itemType: string): string => (
  `${Number.parseInt(url.split(`/${itemType}/`)[1], 10)}`
);
