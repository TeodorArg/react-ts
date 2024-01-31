import MainForm from '../../../../stories/components/forms/MainForm';
import Icon from '../../../../stories/ui/icon/Icon';
import './_consultation-form.scss';


const list = [
  { text: 'Согласуем площадь дома, исходя из потребностей Вашей семьи'},
  { text: 'Начертим планировку'},
  { text: 'Создадим 3d модель дома еще до подписания договора и озвучим точную, окончательную стоимость'},
];

export default function ConsultationForm(){

  const listItems = list.map((item, index) => 
    <li className="list__check--item" key={index}>
      <Icon iconName="check-mark" iconStyle={{height: '32px', width: '32px'}} iconColor="var(--main-color)" iconClassName="list__check--icon"/> 
      <span>{item.text}</span>
    </li>
  );

  return (
    <div className="form__block form__consultation">
      <p className="form__block--txt txt--medium">
        Получите <span className="txt--yellow">консультацию</span> от нашего архитектора-конструктора. Обсудим Ваши пожелания и создадим <span className="txt--yellow">индивидуальный</span> проект.
      </p>
      <ul className="list__check">
       {listItems}
      </ul>
      <MainForm formBtnLabel="Получить"/>
      <p className="form__block--note txt--small">
        Нажимая кнопку “ПОЛУЧИТЬ”, 
        Вы даете согласие на <span className="txt--underline"> обработку своих персональных данных</span>
      </p>
    </div>
  );
};
