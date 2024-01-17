import { Icon } from '../icon/Icon';
import './_button.scss';

interface ButtonProps {
  /**
    * What is background of button?
  */
  btnStyle?: '' | 'yellow' | 'black' | 'action';
  /**
    * Width of button full or not
  */
  btnFull?: boolean;
  /**
    * Does button need think border?
  */
  btnThinkBorder?: boolean;
  /**
    * How large should the button be?
  */
  btnSize?: 'small' | 'medium';
  /**
    * Button lable
  */
  btnLabel?: string;
  /**
    * Button is rounder ?
  */
  btnRounded?: boolean;
  /**
    * Need to show an icon inside the button ?
  */
  showIcon?: boolean;
  /**
    * Button icon name
  */
  iconName?: string,
  /**
    * Button type submit
  */
  btnSubmit?: boolean,
  /**
   *  Button custon Style
   */
  btnCustomClass?: string,
  /**
    * Optional click handler
  */
  onClick?: () => void;
}

/**
 * Button UI component for user interaction
 */
export const Button = ({
  btnLabel = '',
  btnStyle = 'yellow',
  btnSize = 'medium',
  showIcon = false,
  iconName = '',
  btnFull = false,
  btnThinkBorder = false,
  btnRounded = false,
  btnSubmit = false,
  btnCustomClass,
  ...props
}: ButtonProps) => {
  const style = (btnStyle === '') ? 'btn--border' : `btn--${btnStyle}`;
  const width = btnFull ? 'btn--full' : '';
  const border = btnThinkBorder ? 'btn--border--think' : '';
  const hasIcon = showIcon ? 'btn--icon' : '';
  const hasLabel = (btnLabel !== '') ? 'btn--label' : '';
  const rounded = btnRounded ? 'btn--rounded' : '';
  return (
    <button
      type={btnSubmit ? "submit" : "button"}
      className={[
        'btn-house', `btn--${btnSize}`, 
        border,
        width,
        style,
        hasIcon,
        hasLabel,
        rounded,
        btnCustomClass
      ].join(' ').replace(/(?!^[\s]+)([^\s]+)([ ]{2,})/g, "")}
      {...props}
    >
      {(!btnRounded && btnStyle !== 'action') && (
          <span>{btnLabel}</span>
        )
      }
     
      {hasIcon && (
            <Icon iconName={iconName}/>
         )}
    </button>
  );
};
