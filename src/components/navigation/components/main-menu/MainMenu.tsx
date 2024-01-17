import MenuItem from "./MenuItem";
import "./_main-manu.scss";

export const MainMenu = () => {
  return (
    <ul className="main__menu">
     <MenuItem itemName="Каталог"/>
     <MenuItem itemName="О компании"/>
     <MenuItem itemName="Вопросы и ответы"/>
     <MenuItem itemName="Вакансии"/>
     <MenuItem itemName="Ипотека"/>
    </ul>
  );
};

export default MainMenu;