import styled from '@emotion/styled'
import Icons from '../../assets/icons/sprites/icons.svg';

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
}

const SVG = styled('svg')`
  --icon-color: ${(props: IconProps) => props.iconColor };
  --icon-sub-color: ${(props: IconProps) => props.iconSubColor};
  --icon-third-color: ${(props: IconProps) => props.iconThirdColor};
  display: inline-flex;
  height: inherit;
`

/**
 * Primary UI component for user interaction
 */
export const Icon = ({
  iconName = 'arrow',
  ...props
}: IconProps) => {
  return (
    <SVG className="icon" {...props}>
        <use href={`${Icons}#${iconName}`}></use>
    </SVG>
  );
};
