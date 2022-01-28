import styled from 'styled-components';

export default function Checkout({ onCancel }) {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Form>
      <Control>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </Control>
      <Control>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </Control>
      <Control>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </Control>
      <Control>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
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

  .invalid label {
    color: #ca3e51;
  }

  .invalid input {
    border-color: #aa0b20;
    background-color: #ffeff1;
  }
`;
