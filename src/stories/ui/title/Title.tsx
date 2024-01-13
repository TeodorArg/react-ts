import './_title.scss';

interface TitleProps {
  /*
  * Type of Title (section, box, block &  etc)
  */
  titleType?: 'section' | 'box' | 'block';
  /**
  * First part of Title
  */
  firstPtTitle?: string;
  /**
  * Second part of Title
  */
  secondPtTitle?: string;
}

export const Title = ({
    titleType = "section",
    firstPtTitle = "First Part of Tite",
    secondPtTitle = ""
  }: TitleProps) => {

    const twoLines = (secondPtTitle !=='') ? 'title--wrap' : '';

    return (
      <div className={['title', `title--${titleType}`, twoLines, ].join(' ')}>
        <span>
          {firstPtTitle}
        </span>
        {secondPtTitle && (
          <span className='title--yellow'>
             {secondPtTitle}
          </span>
        )}
      </div>
    );
};

export default Title;