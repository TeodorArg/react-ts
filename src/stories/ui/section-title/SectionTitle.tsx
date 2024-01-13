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
    secondPtTitle = ""
  }: SectionTitleProps) => {

    const twoLines = (secondPtTitle !=='') ? 'section__title--wrap' : '';

    return (
      <div className={['section__title', twoLines].join(' ')}>
        <span>
          {firstPtTitle}
        </span>
        {secondPtTitle && (
          <span className='section__title--yellow'>
             {secondPtTitle}
          </span>
        )}
      </div>
    );
};

export default SectionTitle;