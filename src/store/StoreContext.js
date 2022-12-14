// @ts-nocheck
import { useContext, createContext, useEffect, useReducer } from "react";
import { getAllProducts } from "utils/services/products";

import { reducer } from "./reducer";
import { setCategories, saveProductsToStore } from "./actions";

export const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

const initialState = {
  productsData: [],
  categories: [],
  chosenCategory: "all",
  cartItems: [],
  users: [{ email: "vaxo@gmail.com", password: "vaxo" }],
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredProducts = () => {
    if (state.chosenCategory === "all") return state.productsData;

    return state.productsData.filter(
      (product) => product.category === state.chosenCategory
    );
  };

  useEffect(() => {
    // getAllProducts().then((data) => {
    //   setProductsData(data.data);
    // });

    const getProducts = async () => {
      try {
        const data = await getAllProducts();
        // setProductsData(data.data);
        dispatch(saveProductsToStore(data.data));
      } catch (err) {
        console.log("Error occured", err);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (state.productsData.length > 0) {
      const categories = state.productsData.map((product) => product.category);
      // ვქმნით ახალ სეტს, ვაწვდით კატეგორიების მასივს, რომელშიც გვაქს დუპლიკატები,
      // შემდეგ ვუკეთებ დესტრუქტურიზაციას სამიწ წერთილით, და შემეგ ამას გარდავქმნით უკან მასივად
      // საბოლოო შედეგი იქნება მასივი, უნიკალური ელემენტებით.
      // [...new Set(categories)]
      // const mySet = new Set(categories);
      // console.log([...mySet]);
      dispatch(setCategories([...new Set(categories)]));
    }
  }, [state.productsData]);

  const store = {
    ...state,
    filteredProducts: filteredProducts(),
    dispatch,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
