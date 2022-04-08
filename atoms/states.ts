const { atom, selector } = require('recoil');

export interface Auth {
  Email: string;
  Id: string;
  Name: string;
  Token: string;
}

export const authState = atom({
  key: 'authState',
  default: [],
});

export const authValue = selector({
  key: 'authValue',
  get: ({ get }: any) => ({
    Email: get(authState).Email,
    Id: get(authState).Id,
    Name: get(authState).Name,
    Token: get(authState).Token,
  }),
  set: ({ set }: any, newValue: any) => set(authState, newValue),
});
