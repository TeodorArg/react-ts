import styled from '@emotion/styled'
import Icons from '../../../assets/icons/sprites/icons.svg';

interface IconProps {
  /**
   * Icon Name
   */
  iconName?: string;
  /**
   * Some icons in this set have two colors:<br>
   * like inst, inst-fill, map-marker, youtube, etc<br>
   * or three colors like inst, so the variables are:<br>
   * --icon-color
   */
  iconColor?: string;
  /**
   *--icon-sub-color
   */
  iconSubColor?: string;
  /**
   *--icon-third-color
   */
  iconThirdColor?: string;
  /**
   * Custom ClassName for Icon
   */
  iconClassName?: string;
   /**
   * Custom Styles for Icon
   */
   iconStyle?: object | undefined;
}

/**
 * Icon UI component for user interaction
 */
export const Icon = ({
  iconName = 'arrow',
  iconClassName = '',
  iconColor = '',
  iconSubColor = '',
  iconThirdColor = '',
  iconStyle,
}: IconProps) => {
  console.log(iconColor, iconSubColor, iconThirdColor)
  const SVG = styled.svg(
    {
      '--icon-color': `${iconColor}`,
      '--icon-sub-color': `${iconSubColor}`,
      '--icon-third-color': `${iconThirdColor}`,
      display: 'inline-flex',
      height: 'inherit'
    }
  
  )
  return (
    <SVG className={["icon", iconClassName].join(' ').replace(/(?!^[\s]+)([^\s]+)([ ]{2,})/g, "")} style={iconStyle}>
        <use href={`${Icons}#${iconName}`}></use>
    </SVG>
  );
};
