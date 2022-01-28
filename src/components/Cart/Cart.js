import { useContext, useState } from 'react';
import styled from 'styled-components';

import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

export default function Cart({ onClose }) {
  const [isCheckout, setIsCheckout] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <CartItems>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </CartItems>
  );

  const modalActions = (
    <Actions>
      {hasItems && <button onClick={orderHandler}>Order</button>}
      <button className="--alt" onClick={onClose}>
        Close
      </button>
    </Actions>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <Total>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </Total>
      {isCheckout ? <Checkout onCancel={onClose} /> : modalActions}
    </Modal>
  );
}

const CartItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Actions = styled.div`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    color: white;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }

  button:hover,
  button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }

  .--alt {
    background-color: transparent;
    color: #8a2b06;
  }

  @media (max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
