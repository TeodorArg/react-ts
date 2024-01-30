import { useForm, SubmitHandler } from "react-hook-form";
import FormRange from '../../form-control/form-range/FormRange';
import FormInput from '../../form-control/form-input/FormInput';
import Button from '../../ui/button/Button';

import "../../form-control/_form-control.scss";
import "./_forms.scss";

interface SelectionFormProps {
  /**
  * Button Label
  */
  formBtnLabel?: string;
}

interface IFormValues {
  "price": any,
  "area": any,
  "techno": any
}

export default function SelectionForm({formBtnLabel="formBtnLabel"}: SelectionFormProps) {

  const { register, handleSubmit} = useForm<IFormValues>()




  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  }




  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form__selection'>

      <FormRange

        register={register}
        name="price"
        inputLabel="Выберите цену"
        inputUnits="₽"
        minRange={0}
        maxRange={120000}
        rangeValueMin={17642}
        rangeValueMax={87095}
      />

      
{/* 
      <FormRange
        register={register}
        inputLabel='Выберите площадь'
        inputUnits='м2'
        minRange={98}
        maxRange={1200}
        rangeValueMin={150}
        rangeValueMax={923}
      />
       */}

      <FormInput
        register={register("techno")}
        inputLabel="Технология строительства"
        inputPlaceholder='Технология строительства'
      />

      <Button btnCustomClass="form__button" btnSubmit={true} btnLabel={formBtnLabel} btnFull={true}/>
    </form>
  );
};
