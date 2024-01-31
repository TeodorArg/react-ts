import MenuItem from './MenuItem';
import './_main-manu.scss';

interface MainMenuProps{
  mobileView?: boolean;
  showInFooter?: boolean;
}

const links = [
  { title: 'Каталог', url: '/', id: 1 },
  { title: 'О компании', url: '/',  id: 2 },
  { title: 'Вопросы и ответы', url: '/',  id: 3 },
  { title: 'Вакансии', url: '/',  id: 4 },
  { title: 'Ипотека', url: '/',  id: 5 },
];

const linksInFooter = [
  { title: 'Каталог', url: '/', id: 1 },
  { title: 'О компании', url: '/',  id: 2 },
  { title: 'Вопросы и ответы', url: '/',  id: 3 },
  { title: 'Вакансии', url: '/',  id: 4 },
  { title: 'Контакты', url: '/',  id: 5 },
];

export default function MainMenu(
  {
    mobileView = false,
    showInFooter = false
  }: MainMenuProps ) {

  const menuItems = links.map(link =>
    <MenuItem itemName={link.title} itemRouter={link.url} key={link.id}/>
  );

  const menuItemsFooter = linksInFooter.map(link =>
    <MenuItem inFooter={showInFooter} itemName={link.title} itemRouter={link.url} key={link.id}/>
  );
  
  return (
    <ul className={['main__menu', mobileView ? 'mobile' : null, showInFooter ? 'footer' : null].join(' ')}>
     {showInFooter? menuItemsFooter : menuItems}
    </ul>
  );
};
