import { useState} from 'react';

import '../form.scss';

interface FormInputProps {
  /**
  * Input Label
  */
  inputLabel?: string,
  /**
  * Input Placeholder
  */
  inputPlaceholder?: string,
  /**
  * Input Type Text/E-mail:
  */
  inputType?: 'text' | 'email' | 'number',
  /**
  * Input Error object:
  */
  inputError?: Object,
}

export const FormInput = ({
  inputLabel = '',
  inputPlaceholder = '',
  inputType = 'text',
  ...props
}: FormInputProps) => {

  function placeholderState(type: string, placeholderText: string) {
    switch(type) {
      case 'email':
        return placeholderText = "E-mail"
      case 'number':
        return placeholderText = "0"
      default:
        return inputPlaceholder
    }
  }

  return (
    <div className="form__group">
      {inputLabel !== "" && (
        <label className="form__label">{inputLabel}</label>
      )}
      <input type={inputType} className="form__group--item form__input" 
        placeholder={placeholderState(inputType, inputPlaceholder)} {...props}/>
    </div>
  );
};