import { Icon } from '../icon/Icon';
import './button.scss';

interface ButtonProps {
  /**
    * What is background of button?
  */
  btnStyle?: '' | 'yellow' | 'black';
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
    * Optional click handler
  */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  btnLabel = 'Button',
  btnStyle = 'yellow',
  btnSize = 'medium',
  showIcon = false,
  iconName = '',
  btnFull = false,
  btnThinkBorder = false,
  btnRounded = false,
  ...props
}: ButtonProps) => {
  const style = (btnStyle === '') ? 'btn--border' : `btn--${btnStyle}`;
  const width = btnFull ? 'btn--full' : '';
  const border = btnThinkBorder ? 'btn--border--think' : '';
  const hasIcon = showIcon ? 'btn--icon' : '';
  const rounded = btnRounded ? 'btn--rounded' : '';
  return (
    <button
      type="button"
      className={['btn-house', `btn--${btnSize}`, border, width, style, hasIcon, rounded].join(' ')}
      {...props}
    >
      {!btnRounded && (
          <span>{btnLabel}</span>
        )
      }
     
      {hasIcon && (
            <Icon iconName={iconName}/>
         )}
    </button>
  );
};
