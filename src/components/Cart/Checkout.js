import { useRef, useState } from 'react';
import styled from 'styled-components';

const isNotEmpty = (value) => value.trim() !== '';
const isFiveOrEightChars = (value) =>
  value.trim().length === 5 || value.trim().length === 8;

export default function Checkout({ onConfirm, onCancel }) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = isNotEmpty(enteredName);
    const enteredStreetIsValid = isNotEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveOrEightChars(enteredPostalCode);
    const enteredCityIsValid = isNotEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });

    event.target.reset();
  };

  return (
    <Form onSubmit={confirmHandler}>
      <Control invalid={!formInputsValidity.name}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </Control>
      <Control invalid={!formInputsValidity.street}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </Control>
      <Control invalid={!formInputsValidity.postalCode}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 or 8 characters long)!</p>
        )}
      </Control>
      <Control invalid={!formInputsValidity.city}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </Control>
      <Actions>
        <button className="submit">Confirm</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </Actions>
    </Form>
  );
}

const Form = styled.form`
  margin: 1rem 0;
  height: 19rem;
  overflow: auto;
`;

const Control = styled.div`
  margin-bottom: 0.5rem;

  label {
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
  }

  input {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 20rem;
    max-width: 100%;
  }

  ${({ invalid }) =>
    invalid &&
    `
    label {
    color: #ca3e51;
  }
    input {
    border-color: #aa0b20;
    background-color: #ffeff1;
  }
    p {
    color: #ca3e51;
  }`}
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  button {
    font: inherit;
    color: #5a1a01;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 25px;
    padding: 0.5rem 2rem;
  }

  button:hover,
  button:active {
    background-color: #ffe6dc;
  }

  .submit {
    border: 1px solid #5a1a01;
    background-color: #5a1a01;
    color: white;
  }

  .submit:hover,
  .submit:active {
    background-color: #7a2706;
  }
`;
