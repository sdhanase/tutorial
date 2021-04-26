export const longword = (sen: string): string => {

   const senarr = sen.split(/[^a-zA-Z]+/g);

  const [firstitem, ...rest] = senarr;

  return rest.reduce((result, item) => {
    return result.length >= item.length ? result : item
  }, firstitem)

};
