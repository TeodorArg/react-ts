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

export default function SelectionForm({formBtnLabel="formBtnLabel"}: SelectionFormProps) {

  return (
    <form className='form__selection'>
      
      <FormRange
        inputLabel="Выберите цену"
        inputUnits="₽"
        minRange={0}
        maxRange={120000}
        rangeValueMin={17642}
        rangeValueMax={87095}
      />

      <FormRange
        inputLabel='Выберите площадь'
        inputUnits='м2'
        minRange={98}
        maxRange={1200}
        rangeValueMin={150}
        rangeValueMax={923}
      />

      <FormInput
        inputLabel="Технология строительства"
        inputPlaceholder='Технология строительства'
      />

      <Button btnCustomClass="form__button" btnSubmit={true} btnLabel={formBtnLabel} btnFull={true}/>
    </form>
  );
};
