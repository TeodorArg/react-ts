import styled from '@emotion/styled';
import HeaderBage from "./HeaderBage";

const badges = [
  {
    "title": "12 %",
    "text": "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur."
  },
  {
    "title": "",
    "text": "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur."
  },
  {
    "title": "",
    "text": "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur."
  },
  {
    "title": "1 924",
    "text": "Lorem ipsum dolor sit amet consectetur."
  },
  {
    "title": "20 %",
    "text": "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur."
  },
  {
    "title": "",
    "text": "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur."
  },
  {
    "title": "20 %",
    "text": "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur."
  }
];

export default function HeaderBadges() {

  const DIV = styled.div(
    {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: '10px',
      '@media (min-width: 992px)': {
        gap: "20px",
      },
      '& > div': {
        display: 'grid',
        gap: 'inherit',
      },
      '.header__badges--right': {
        marginTop: '30px',
        '@media (min-width: 992px)': {
          marginTop: '50px',
        },
      }
    }
  );


  const badgeItemsLeft = badges.map((badge, index) =>
   
    { 
      if (index % 2 === 0) {
        return <HeaderBage bageTitle={badge.title} bageText={badge.text} key={index}/>;
      } else {
        return null;
      }
    }
    
  );

  const badgeItemsRight = badges.map((badge, index) =>
  { 
    if (index % 2 !== 0) {
      return <HeaderBage bageTitle={badge.title} bageText={badge.text} key={index}/>;
    } else {
      return null;
    }
  }
  );

  return (
    <DIV className="header__badges">
      <div className="header__badges--left">
        { badgeItemsLeft }
      </div>
      <div className="header__badges--right">
        {badgeItemsRight}
      </div>
    </DIV>
  );
};
