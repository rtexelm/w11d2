import { useContext } from "react";
import { CoffeeContext, useCoffeeContext } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
  const { coffeeBean, setCoffeeBeanId } = useContext(CoffeeContext);
  return (
    <div className="selected-coffee">
      <h2>{coffeeBean.name}</h2>
    </div>
  );
};

export default SelectedCoffeeBean;
