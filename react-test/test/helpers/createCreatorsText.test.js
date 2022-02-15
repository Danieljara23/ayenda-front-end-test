import { createCreatorsText } from '../../helpers/createCreatorsText';

describe("createCreatorsText", () => {
  it("Should return empty string for null parameter", () => {
    const creators = createCreatorsText(null);
    expect(creators).toEqual('');
  })
  it("Should return empty string for null items value", () => {
    const creators = createCreatorsText({});
    expect(creators).toEqual('');
  })
  it("Should return empty string for items value different to array", () => {
    const creators = createCreatorsText({ items: {} });
    expect(creators).toEqual('');
  })
  it("Should return one name", () => {
    const creator = { name: 'Creator 1' };
    const creators = createCreatorsText({ items: [creator] });
    expect(creators).toEqual(creator.name);
  })
  it("Should return two names separated by commas", () => {
    const creatorOne = { name: 'Creator 1' };
    const creatorTwo = { name: 'Creator 2' };
    const creators = createCreatorsText({ items: [creatorOne, creatorTwo] });
    expect(creators).toEqual(`${creatorOne.name}, ${creatorTwo.name}`);
  })
})