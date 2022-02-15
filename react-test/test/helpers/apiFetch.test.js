import { apiFetch } from '../../helpers/apiFetch';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: {} }),
  })
);

describe("apiFetch", () => {
  it("Should return data", async () => {
    const data = await apiFetch('');
    expect(data).toEqual({ data: {} });
  })
})