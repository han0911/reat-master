import { atom, selector } from "recoil";
export const minuteState = atom({
  key: "minutes",
  default: 0,
});
export interface Itodo{
    id:number,
    text:string
}

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
interface Typetodo {
  [key: string]: Itodo[];
}
export const todoState = atom<Typetodo>({
  key: "todo",
  default: {
    todo: [{id:0,text:"hello"},{id:1,text:"hello1"}],
    doing: [],
    done: [],
  },
});
