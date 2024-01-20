import Icon from "../icon/Icon";

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

export default function TextWithIcon(
  {
  viewInMobile = false,
  isItPhone = false,
  loading = true,
  textInblock = 'textInblock',
  iconName = 'phone',
  phoneNumber = '',
  }: TextWithIconProps ) {

  const loadingClass = loading ? 'sceleton' : '';

  return (
    <div className={["text__icon", isItPhone ? 'phone': null, viewInMobile ? 'mobile' : null].join(' ')}>
      {!isItPhone && (
        <>
          <Icon iconClassName="text__icon--icon" iconName={iconName}/>
          <span className={["text__icon--text", loadingClass].join(' ').replace(/(?!^[\s]+)([^\s]+)([ ]{2,})/g, "")}>
            {textInblock}
          </span>
        </>
      ) }
      {isItPhone && (
        <a className="text__icon" href={"tel:" + phoneNumber}>
          <Icon iconClassName="text__icon--icon" iconName={iconName}/>
          <span className={["text__icon--phone", viewInMobile ? 'mobile' : null].join(' ')}>{textInblock}</span>
        </a>
      ) }
    </div>
  );
};