import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 9px 9px 12px rgba(163, 177, 198, 0.6),
    -9px -9px 12px rgba(255, 255, 255, 0.5);
`;

export const SearchFormInput = styled(Field)`
  display: inline-block;
  width: 100%;
  align-items: center;
  justify-content: center;
  font: inherit;
  font-size: 1em;
  border: none;
  outline: none;
  padding-left: 0 avto;

  ::placeholder {
    font: inherit;
    font-size: 1em;
  }
`;

export const SearchFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border: none;
  color: orange;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    color: violet;
  }

`;
