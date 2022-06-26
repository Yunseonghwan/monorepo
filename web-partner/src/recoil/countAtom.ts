import { atom } from "recoil";

export const countAtom = atom<number>({
  key: "countAtom",
  default: 0,
});
