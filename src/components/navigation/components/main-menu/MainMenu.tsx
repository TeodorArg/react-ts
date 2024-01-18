import MenuItem from "./MenuItem";
import "./_main-manu.scss";

const links = [
  { title: 'Каталог', url: '/', id: 1 },
  { title: 'О компании', url: '/',  id: 2 },
  { title: 'Вопросы и ответы', url: '/',  id: 3 },
  { title: 'Вакансии', url: '/',  id: 4 },
  { title: 'Ипотека', url: '/',  id: 5 },
];

export const MainMenu = () => {
  const menuItems = links.map(link =>
    <MenuItem itemName={link.title} itemRouter={link.url} key={link.id}/>
  );
  return (
    <ul className="main__menu">
     {menuItems}
    </ul>
  );
};

export default MainMenu;