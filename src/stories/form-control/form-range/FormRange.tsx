import { useState, useEffect } from 'react';

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

import './_form-range.scss';
import '../_form-control.scss';


interface FormRangeProps {
  /**
  * Input Label
  */
  inputLabel?: string,
  /**
  * Input Units
  */
  inputUnits?: string,
  /**
  * Values of Range 
  */
  rangeValueMin?: number | string,
  /**
  * Values of Range 
  */
  rangeValueMax?: number | string,
  /**
  * Min Range 
  */
  minRange?: number,
  /**
  * Max Range 
  */
  maxRange?: number,
  /**
  * defaultValue of Range 
  */
  defaultValue?: number[] | string[];
  /**
  * Input Error any:
  */
  inputError?: any,

  name?: string,

  register?: any,


}

export default function FormRange({
    inputLabel = 'inputLabel',
    inputUnits,
    rangeValueMin = 20,
    rangeValueMax = 350,
    minRange = 0,
    maxRange = 800,
    register,
    name,



  }:FormRangeProps) {

    const [value, setValue] = useState([rangeValueMin, rangeValueMax]);
    const [total, setTotalValue] = useState<string>(`${value[0]} - ${value[1]} ${inputUnits}`);

    useEffect(() => {
      if (value && total) {
        console.log(value, total);
        // setBreed([randomOne.split(regexp)[3], randomTwo.split(regexp)[3]]);
      }
    }, [value, total]);

    

    return (
      <div className="form__group form__range">
        {inputLabel !== '' && (
          <label className="form__label txt--semibold">{inputLabel} {inputUnits !== '' ? <span className='txt--yellow'>({inputUnits})</span> : false}</label>
        )}

        <div className="form__group--inputs">

          <input className="form__group--item form__input small" 
            value={value[0]} 
            onChange={e => {setValue([e.target.value, value[1]]); setTotalValue(`${e.target.value} - ${value[1]} ${inputUnits}`)}} />

          <input className="form__group--item form__input small" 
            value={value[1]} 
            onChange={e => {setValue([value[0], e.target.value, ]); setTotalValue(`${value[0]} - ${e.target.value} ${inputUnits}`)}}/>

        </div>

        <div className="form__range--slider">
          <RangeSlider onInput={setValue} onThumbDragEnd={() => { setTotalValue(`${value[0]} - ${value[1]} ${inputUnits}`); }} min={minRange} max={maxRange} value={value} className="form__group--slider border--default" />
          <span>{minRange}</span>
          <input className="form__range--slider--total" value={`${value[0]} - ${value[1]} ${inputUnits}`} {...register(total)} readOnly/>
          <span>{maxRange}</span>
        </div>
       
      </div>
    );
};
