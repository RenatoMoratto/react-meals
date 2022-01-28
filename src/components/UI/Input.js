import styled from 'styled-components';

export default function Input({ label, input }) {
  return (
    <InputWrapper>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </InputWrapper>
  );
}

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
