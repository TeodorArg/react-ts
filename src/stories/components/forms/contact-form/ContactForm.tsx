import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { FormInput } from '../../../form-control/form-input/FormInput';
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import { Button } from '../../../ui/button/Button';
import 'react-phone-number-input/style.css'
import "../_forms.scss";

interface IFormValues {
  "firstName": string,
  "email": string,
  "PhoneInputWithCountry": any,  
}

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data))
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form__contact'>
      <FormInput register={register("firstName", { required: "First Name is required" })}
        inputPlaceholder='Name' 
        aria-invalid={errors.firstName ? "true" : "false"}
        inputError={errors.firstName && errors.firstName.message}
      />
      <FormInput register={register("email", { 
            required: "E-mail is required",
            pattern: {
              value: /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/g,
              message: "Invalid e-mail"
            } 
          }
        )} 
        inputType="email"
        aria-invalid={errors.email ? "true" : "false"}
        inputError={errors.email && errors.email.message}
      />

      <PhoneInputWithCountry
        name="PhoneInputWithCountry"
        className='form__group'
        international
        defaultCountry="RU"
        control={control}
        rules={{ required: true }} 
      />


     

      <Button btnSubmit={true}/>
    </form>
  )
}