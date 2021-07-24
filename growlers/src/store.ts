import { proxy } from "valtio";
import { Beverage } from "./types";

export interface TapStore {
  searchText: string;
  alcoholLimit: number;
  taps: Beverage[];
  filteredTaps: Beverage[];
  cart: Beverage[];
}

const store = proxy<TapStore>({
  searchText: "",
  alcoholLimit: 10,
  taps: [],
  filteredTaps: [],
  cart: [],
});

export const load = (storeName) => {
  fetch(`http://localhost:8080/${storeName}.json`)
    .then((resp) => resp.json())
    .then((taps: Beverage[]) => {
      store.filteredTaps = taps;
      store.taps = taps;
    });
};

const filter = () => {
  const regx = new RegExp(store.searchText, "i");
  store.filteredTaps = store.taps
    .filter(
      ({ beverageName, abv }: Beverage) =>
        regx.test(beverageName) && abv < store.alcoholLimit
    )
    .slice(0, 15);
};

export const setSearchText = (searchText) => {
  store.searchText = searchText;
  filter();
};

export const setAlcoholLimit = (alcoholLimit) => {
  store.alcoholLimit = alcoholLimit;
  filter();
};

export const addToCart = (tap: Beverage) => {
  store.cart.push(tap);
};

export default store;
