import { useForm, Controller, SubmitHandler } from "react-hook-form";
import FormRange from "../../form-control/form-range/FormRange";
import FormInput from '../../form-control/form-input/FormInput';
import Button from '../../ui/button/Button';

import "../../form-control/_form-control.scss";
import "./_forms.scss";

interface IFormValues {
  "price": string,
  "area": string,
  "technology": any,  
}

interface SelectionFormProps {
  /**
  * Button Label
  */
  formBtnLabel?: string;
}

export default function SelectionForm({formBtnLabel="formBtnLabel"}: SelectionFormProps) {

  const { register, handleSubmit, control, formState: { errors } } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form__selection'>

      <FormRange inputLabel="Выберите цену" inputUnits="₽" rangeValueMin={0} rangeValueMax={3990000} minRange={0} maxRange={8950000}/>
      <FormRange inputLabel="Выберите площадь" inputUnits="м2"/>

      <FormInput register={register("technology", { required: "Technology is required" })}
        inputLabel="Технология строительства"
        inputPlaceholder='Технология строительства' 
        aria-invalid={errors.technology ? "true" : "false"}
        inputError={errors.technology && errors.technology.message}
      />
     <Button btnCustomClass="form__button" btnSubmit={true} btnLabel={formBtnLabel} btnFull={true}/>
    </form>
  );
};
