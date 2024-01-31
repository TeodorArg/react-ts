import Icon from '../icon/Icon';

import './_text-with-icon.scss';

interface TextWithIconProps {
  viewInMobile?: boolean;
  isItPhone?: boolean;
  iconName?: string;
  textInblock?: any;
  phoneNumber?: string;
  phoneInFooter?: false;
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
  textInblock = '',
  iconName = 'phone',
  phoneNumber = ''
  }: TextWithIconProps ) {

  const loadingClass = loading ? 'sceleton' : '';
  const phoneClass = isItPhone ? 'phone' : '';
  const mobileClass = viewInMobile ? 'mobile' : '';

  
  return (
    <div className={['text__icon', phoneClass, mobileClass].join(' ')}>
      {!isItPhone && (
        <>
          <Icon iconClassName="text__icon--icon" iconName={iconName}/>
          <span className={['text__icon--text', loadingClass].join(' ')}>
            { textInblock }
          </span>
        </>
      ) }
      {isItPhone && (
        <a className="text__icon" href={'tel:' + phoneNumber}>
          <Icon iconClassName="text__icon--icon" iconName={iconName}/>
          <span className={['text__icon--phone', mobileClass].join(' ')}>{textInblock}</span>
        </a>
      ) }
    </div>
  );
};