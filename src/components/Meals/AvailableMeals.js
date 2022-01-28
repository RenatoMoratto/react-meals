import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://react-meals-web-app-default-rtdb.firebaseio.com/meals.json')
      .then((response) => response.json())
      .then((data) => {
        const loadedMeals = [];

        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }

        setMeals(loadedMeals);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <MealsLoading>
        <p>Loading...</p>
      </MealsLoading>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <Meals>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </Meals>
  );
}

const MealsLoading = styled.section`
  text-align: center;
  color: #fff;
`;

const mealsAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Meals = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: ${mealsAppear} 1s ease-out forwards;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
