export const findIntersection = (arrset: Array<string>): Array<number> => {

  const arrnum = arrset.length;

  if (arrnum == 0) {
    return [];
  }
  else if (arrnum == 1) {

    const singleStringArray = arrset[0].split(',').map(x => x.trim());
    return singleStringArray.map(Number);
  }
  else if (arrnum == 2) {
    const firstString = arrset[0];
    const secondString = arrset[1];


    const firstStringArray = firstString.split(',').map(x => x.trim());
    const secondStringArray = secondString.split(',').map(x => x.trim());

    const intersectionArray = firstStringArray.filter(x => secondStringArray.includes(x));

    return intersectionArray.map(Number);
  }
  else {
    const firstString = arrset[0];
    const secondString = arrset[1];
    const thirdString = arrset[2];

    const firstStringArray = firstString.split(',').map(x => x.trim());
    const secondStringArray = secondString.split(',').map(x => x.trim());
    const thirdStringArray = thirdString.split(',').map(x => x.trim());

    const intersectionArray = firstStringArray.filter(x => secondStringArray.includes(x));

    const finalInterSectionArray = intersectionArray.filter(x => thirdStringArray.includes(x));

    return finalInterSectionArray.map(Number);
  }

};
