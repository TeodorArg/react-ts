import { useState} from 'react';
import { PatternFormat } from 'react-number-format';
import './form-input-phone.scss';

interface FormInputPhoneProps {
  /**
  * Input Label
  */
  inputLabel?: string,
  /**
  * Input Phone Mask
  */
  inputPhoneMask?: string,
  /**
  * Input Phone Number, but string
  */
  inputPhoneValue: string
}

export default function FormInputPhone(
  {
    inputLabel = '',
    inputPhoneMask = '+7 (###) ###-##-##',
    inputPhoneValue ='9999999999',
  }: FormInputPhoneProps ) {

  const [focused, setInputFocused] = useState(false);
  const [fullNumber, setFullPhone] = useState(false);

  const onFocused = () => {
    setInputFocused(true);
  }

  const onBlur = () => {
    setInputFocused(false);
  }

  const completePhone = () => {
    setFullPhone(true);
  }

  const incompletePhone = () => {
    setFullPhone(false);
  }

  const inputPhoneClass = focused || fullNumber ? 'focused' : '';
  
  return (
    <div className="form__group">
      
      {inputLabel !== '' && (
        <label className="form__label">{inputLabel}</label>
      )}

      <PatternFormat
        className={['form__group--item phone form__input', inputPhoneClass].join(' ').replace(/(?!^[\s]+)([^\s]+)([ ]{2,})/g, '')} 
        format={inputPhoneMask}
        value={inputPhoneValue}
        allowEmptyFormatting mask="_" 
        onFocus={onFocused}
        onBlur={onBlur}
        onValueChange={(values) => {
          const phoneNumberSize = inputPhoneValue.length;
          if(values.value.length === phoneNumberSize) {
            completePhone();
          } else {
            incompletePhone()
          }
        }}
      />

    </div>
  );
}