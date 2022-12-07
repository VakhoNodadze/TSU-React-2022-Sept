// @ts-nocheck
import { useContext, createContext, useEffect, useState } from "react";
import { getAllProducts } from "../utils/services/products";

export const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCateogy] = useState("all");
  const [cartItems, setCartItems] = useState([]);

  const [users, setUsers] = useState([
    { email: "vaxo@gmail.com", password: "vaxo" },
  ]);

  const filteredProducts = () => {
    if (chosenCategory === "all") return productsData;

    return productsData.filter(
      (product) => product.category === chosenCategory
    );
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => [product, ...prev]);
  };

  const handleAddUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  const handleCategoryChange = (category) => {
    setChosenCateogy(category);
  };

  useEffect(() => {
    // getAllProducts().then((data) => {
    //   setProductsData(data.data);
    // });

    const getProducts = async () => {
      try {
        const data = await getAllProducts();
        setProductsData(data.data);
      } catch (err) {
        console.log("Error occured", err);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (productsData.length > 0) {
      const categories = productsData.map((product) => product.category);
      // ვქმნით ახალ სეტს, ვაწვდით კატეგორიების მასივს, რომელშიც გვაქს დუპლიკატები,
      // შემდეგ ვუკეთებ დესტრუქტურიზაციას სამიწ წერთილით, და შემეგ ამას გარდავქმნით უკან მასივად
      // საბოლოო შედეგი იქნება მასივი, უნიკალური ელემენტებით.
      // [...new Set(categories)]
      // const mySet = new Set(categories);
      // console.log([...mySet]);
      setCategories([...new Set(categories)]);
    }
  }, [productsData]);

  const store = {
    users,
    productsData,
    categories,
    chosenCategory,
    cartItems,
    filteredProducts: filteredProducts(),
    handleAddToCart,
    handleCategoryChange,
    handleAddUser,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
