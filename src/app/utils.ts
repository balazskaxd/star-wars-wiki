export const getItemId = (url: string, itemType: string): string => (
  `${Number.parseInt(url.split(`/${itemType}/`)[1], 10)}`
);

export const populateIds = (idList: string[]) => (
  Promise.all(idList.map((item) => fetch(item).then((data) => (data.json()))))
);
