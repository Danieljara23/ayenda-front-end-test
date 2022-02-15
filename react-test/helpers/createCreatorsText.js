export const createCreatorsText = (creators) => {
  if (!!creators?.items && Array.isArray(creators.items)) {
    let creatorsText = '';
    creators.items.forEach((creator, index) => {
      if ((creators.items.length - 1) === index) {
        creatorsText = creatorsText + `${creator.name}`;
      } else {
        creatorsText = creatorsText + `${creator.name}, `;
      }
    })
    return creatorsText;
  }
  return '';
}