import { Icon } from "../icon/Icon";

import "./_text-with-icon.scss";

interface TextWithIconProps {
  viewInMobile?: boolean;
  isItPhone?: boolean;
  iconName?: string;
  textInblock?: any | null;
  phoneNumber?: string;
}

export const TextWithIcon = ({
  viewInMobile = false,
  isItPhone = false,
  textInblock = 'textInblock',
  iconName = 'phone',
  phoneNumber = '',
  ...props
}: TextWithIconProps) => {
  return (
    <div className="text__icon" {...props}>
      <Icon iconClassName="text__icon--icon" iconName={iconName}/>
      {!isItPhone && (
        <span className="text__icon--text font-semibold text-base">
          {textInblock}
        </span>
      ) }
      {isItPhone && (
        <a className="text__icon--text phone--link" href={"tel:" + phoneNumber}>
          {textInblock}
        </a>
      ) }
     
    </div>
  );
};

export default TextWithIcon;