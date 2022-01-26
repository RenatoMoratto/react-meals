import React from 'react';
import styled from 'styled-components';

const Input = React.forwardRef(({ label, input }, ref) => {
  return (
    <InputWrapper>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </InputWrapper>
  );
});

export default Input;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  label {
    font-weight: bold;
    margin-right: 1rem;
  }

  input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`;
