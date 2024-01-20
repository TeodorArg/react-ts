import '../_form-control.scss';

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
  * Input Error any:
  */
  inputError?: any,
  /**
   * register for React-Hook-Form
   */
  register?: any,
}

export default function FormInput(
  {
    inputLabel = '',
    inputPlaceholder = '',
    inputType = 'text',
    inputError,
    register,
    ...props
  }: FormInputProps ) {

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

  const errorClass = inputError ? 'form__group--error' : '';

  return (
    <div className={["form__group", errorClass ].join(' ').replace(/(?!^[\s]+)([^\s]+)([ ]{2,})/g, "")}>
      {inputLabel !== "" && (
        <label className="form__label">{inputLabel}</label>
      )}
      <input type={inputType} className="form__group--item form__input" 
        placeholder={placeholderState(inputType, inputPlaceholder)} {...register} {...props} />
        {inputError && (
            <div className='form__group--error-text txt--invalid'>
              { inputError }
            </div>
          )
        }
    </div>
  );
};