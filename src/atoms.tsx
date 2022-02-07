import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },

  set: ({ set }, newValue) => {
    const minute = Number(newValue) * 60;
    set(minuteState, minute);
  },
});
