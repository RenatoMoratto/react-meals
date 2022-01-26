import styled from 'styled-components';
import MealItemForm from './MealItemForm';

export default function MealItem({ name, description, price, id }) {
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <Meal>
      <div>
        <h3>{name}</h3>
        <Description>{description}</Description>
        <Price>{formattedPrice}</Price>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </Meal>
  );
}

const Meal = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  h3 {
    margin: 0 0 0.25rem 0;
  }
`;

const Description = styled.div`
  font-style: italic;
`;

const Price = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;
