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
    rangeValueMin = 30,
    rangeValueMax = 60,
    minRange=0,
    maxRange=100,
    inputError,
    register,
    ...props
  } : FormRangeProps) {
    const [value, setValue] = useState([rangeValueMin, rangeValueMax]);
    return (
      <div className="form__group form__range">
        {inputLabel !== "" && (
          <label className="form__label txt--semibold">{inputLabel} {inputUnits !== "" ? <span className='txt--yellow'>({inputUnits})</span> : false}</label>
        )}

        <div className="form__group--inputs">
          <input className="form__group--item form__input small" value={value[0]} onChange={e => setValue([e.target.value, value[1]])}></input>
          <input className="form__group--item form__input small" value={value[1]} onChange={e => setValue([value[0], e.target.value, ])}></input>
        </div>

        <div className="form__range--slider">
          <RangeSlider value={value} onInput={setValue} min={minRange} max={maxRange} className="form__group--slider border--default"/>
          <span>{value[0]}</span>
          <span>{value[1]}</span>
        </div>
       
      </div>
    );
};
