import styled from '@emotion/styled';

export default function Copyright() {

  const year = new Date().getFullYear();

  const SPAN = styled.span(
    {
      color: '#fefeff',
      '@media (max-width: 1023px)': {
        display: 'none'
      },
    },
  );

  return (
    <SPAN className="navigation__copyright">
      Favorite house © {year}. Все права защищены.
    </SPAN>
  );
};

