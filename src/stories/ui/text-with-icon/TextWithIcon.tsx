import { Icon } from "../icon/Icon";

import "./_text-with-icon.scss";

interface TextWithIconProps {
  viewInMobile?: boolean;
  isItPhone?: boolean;
  iconName?: string;
  textInblock?: any | null;
  phoneNumber?: string;
  loading?: boolean;
}

/**
 * Button UI component for user interaction
 */

export const TextWithIcon = ({
  viewInMobile = false,
  isItPhone = false,
  loading = true,
  textInblock = 'textInblock',
  iconName = 'phone',
  phoneNumber = '',
  ...props
}: TextWithIconProps) => {
  const loadingClass = loading ? '' : 'sceleton'
  return (
    <div className="text__icon" {...props}>
      <Icon iconClassName="text__icon--icon" iconName={iconName}/>
      {!isItPhone && (
        <span className={["text__icon--text", loadingClass].join(' ').replace(/(?!^[\s]+)([^\s]+)([ ]{2,})/g, "")}>
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