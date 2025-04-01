import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";

function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fectMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        //..
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }

    fectMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default Meals;
