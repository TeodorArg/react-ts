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

const SVG = styled('svg')`
  --icon-color: ${(props: IconProps) => props.iconColor };
  --icon-sub-color: ${(props: IconProps) => props.iconSubColor};
  --icon-third-color: ${(props: IconProps) => props.iconThirdColor};
  display: inline-flex;
  height: inherit;
`

/**
 * Icon UI component for user interaction
 */
export const Icon = ({
  iconName = 'arrow',
  iconClassName = '',
  iconStyle,
  ...props
}: IconProps) => {
  return (
    <SVG className={["icon", iconClassName].join(' ')} {...props} style={iconStyle}>
        <use href={`${Icons}#${iconName}`}></use>
    </SVG>
  );
};
