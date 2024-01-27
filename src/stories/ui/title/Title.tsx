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
  /**
  * Forced Wrap Text in Title
  */
  forcedWrap?: boolean;
}

export default function Title(
  {
    titleType = "section",
    firstPtTitle = "First Part of Tite",
    secondPtTitle = "",
    forcedWrap = false
  }: TitleProps ) {

  const twoLines = (secondPtTitle !=='') ? 'title--wrap' : '';
  const transfer = forcedWrap ? 'title--transfer': '';

  return (
    <div className={['title', `title--${titleType}`, twoLines, transfer].join(' ')}>
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

