import { useState } from 'react';
import styled from 'styled-components';

import Input from '../../UI/Input';

export default function MealItemForm({ id, onAddToCart }) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [amount, setAmount] = useState('1');

  const changeHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmountNumber = +amount;

    if (
      amount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);

    setAmount('1');
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
          value: amount,
          onChange: changeHandler,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </Form>
  );
}

const Form = styled.form`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }

  button:hover,
  button:active {
    background-color: #641e03;
    border-color: #641e03;
  }

  @media (max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  @media (max-width: 320px) {
    flex-direction: column;
    button {
      width: 100%;
    }
  }
`;
