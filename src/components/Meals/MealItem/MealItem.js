import { useContext } from 'react';
import styled from 'styled-components';
import CartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';

export default function MealItem({ name, description, price, id }) {
  const cartCtx = useContext(CartContext);

  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({ id, name, amount, price });
  };

  return (
    <Meal>
      <div className="item">
        <div>
          <h3>{name}</h3>
          <Description>{description}</Description>
        </div>
        <Price>{formattedPrice}</Price>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
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

  @media (max-width: 425px) {
    flex-direction: column;

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }
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
