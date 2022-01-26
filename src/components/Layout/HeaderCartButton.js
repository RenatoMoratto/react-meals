import { useContext } from 'react';
import styled from 'styled-components';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce(
    (current, item) => current + item.amount,
    0
  );

  return (
    <Button onClick={props.onClick}>
      <Icon>
        <CartIcon />
      </Icon>
      <span>Your Cart</span>
      <Badge>{numberOfCartItems}</Badge>
    </Button>
  );
}

const Icon = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

const Badge = styled.span`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
`;

const Button = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #2c0d00;
  }

  &:hover ${Badge}, &:active ${Badge} {
    background-color: #92320c;
  }
`;
