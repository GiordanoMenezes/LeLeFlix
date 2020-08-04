import React from 'react';

import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: rgb(83, 88, 93);
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 16px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid rgb(83, 88, 93);
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.7) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
  }
`;

const FormField = ({ id, label, type, name, value, onChange }) => {

  const tag = type === 'textarea' ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      <div id={id}>
        <Label>
          <Input as={tag} type={type} name={name} value={value}
            onChange={onChange} />
          <Label.Text>
            {`${label}: `}
          </Label.Text>
        </Label>
      </div>
    </FormFieldWrapper>
  );
}

export default FormField;