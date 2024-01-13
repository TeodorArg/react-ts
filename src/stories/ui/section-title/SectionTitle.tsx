import './_section-title.scss';

interface SectionTitleProps {
  /**
  * First part of Title
  */
  firstPtTitle?: string;
  /**
  * Second part of Title
  */
  secondPtTitle?: string;
}

export const SectionTitle = ({
    firstPtTitle = "First Part of Tite",
    secondPtTitle = "Second Part of Title"
  }: SectionTitleProps) => {
    return (
      <div className='section__title'>
        <span>
          {firstPtTitle}
        </span>
        {secondPtTitle && (
          <span>
            {secondPtTitle}
          </span>
        )}
      </div>
    );
};

export default SectionTitle;