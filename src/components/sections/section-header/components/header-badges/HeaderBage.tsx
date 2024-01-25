import Icon from "../../../../../stories/ui/icon/Icon";
import "./_header-bage.scss";

interface HeaderBageProps {
  bageTitle?: string;
  bageText?: string;
}

export default function HeaderBage(
  {
    bageTitle = '',
    bageText = '',
  }: HeaderBageProps ) {

    

  return (
    <div className="header__badge">

      { bageTitle !== '' && (
          <div className="header__badge--title txt--semibold">
            { bageTitle }
          </div>
        )
      }

      { bageTitle === '' && (
          <Icon
            iconClassName="header__badge--icon"
            iconColor="var(--yellow)"
            iconName="badge"
          />
        )
      }
     

      <div className="header__badge--text">
        {bageText}
      </div>

    </div>
  );
};
