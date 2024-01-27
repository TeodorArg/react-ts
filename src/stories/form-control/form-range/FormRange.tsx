import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import "./_form-range.scss";
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
  /**
   * register for React-Hook-Form
   */
  register?: any,
}

export default function FormRange({
    inputLabel="LabelFormRange",
    inputUnits="pc.",
    minRange=0,
    maxRange=1200,
    rangeValueMin=345,
    rangeValueMax=896,
    defaultValue,
    inputError,
    register,
  } : FormRangeProps) {
    const [value, setValue] = useState([rangeValueMin, rangeValueMax]);
    console.log(value, value[0], value[1]);
    return (
      <div className="form__group form__range">
        {inputLabel !== "" && (
          <label className="form__label txt--semibold">{inputLabel} {inputUnits !== "" ? <span className='txt--yellow'>({inputUnits})</span> : false}</label>
        )}

        <div className="form__group--inputs">

          <input className="form__group--item form__input small" 
            value={value[0]} 
            onChange={e => setValue([e.target.value, value[1]])} />

          <input className="form__group--item form__input small" 
            value={value[1]} 
            onChange={e => setValue([value[0], e.target.value, ])}/>

        </div>

        <div className="form__range--slider">
          <RangeSlider value={value} onInput={setValue} min={minRange} max={maxRange} className="form__group--slider border--default"/>
          <span>{minRange}</span>
          <span className="form__range--slider--total">{value[0]} - {value[1]} {inputUnits}</span>
          <span>{maxRange}</span>
        </div>
       
      </div>
    );
};
