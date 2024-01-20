import { useForm, Controller, SubmitHandler } from "react-hook-form"
import PhoneInput from 'react-phone-input-2';
import FormInput from '../../form-control/form-input/FormInput';
import Button from '../../ui/button/Button';
import "../../form-control/_form-control.scss";
import "./_forms.scss";

interface IFormValues {
  "firstName": string,
  "email": string,
  "phone": any,  
}

interface MainFormProps {
  /**
  * Button Label
  */
  formBtnLabel?: string;
}

export default function MainForm(
  {
    formBtnLabel = "MainForm btnLabel",
  }: MainFormProps ) {

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

      <Controller
        control={control}
        name="phone"
        rules={{ required: true }}
        render={({ field: { ref, ...field } }) => (
          <PhoneInput
            {...field}
              inputProps={{
                ref,
                required: true,
                autoFocus: true
              }}
              country={"ru"}
              onlyCountries={["ru"]}
              placeholder="+7 (999) 999-99-99"
              containerClass="form__group"
              inputClass="form__group--item form__input"
            />
          )
        }
      />

      <Button btnSubmit={true} btnLabel={formBtnLabel}/>

    </form>
  )
}