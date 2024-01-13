import { Icon } from './stories/ui/icon/Icon';
import { Button } from './stories/ui/button/Button';
import { FormInputPhone } from './stories/form-control/form-input-phone/FormInputPhone';
import { ContactForm } from './stories/components/forms/contact-form/ContactForm';
import logo from './logo.svg';
import './App.scss';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Icon
          iconColor="#bfe8a3"
          iconName="inst"
          iconSubColor="#e31f1f"
          iconThirdColor="#0ed6f1"
        />
        <Button btnStyle='black' />
        <Button btnStyle='black' btnSize='small'/>
        <Button showIcon={true} iconName='arrow-up'/>
        <Button showIcon={true} btnRounded={true} iconName='arrow'/>
        <hr style={{width: "100%"}}/>
        <FormInputPhone inputPhoneValue=""/>
        <hr style={{width: "100%"}}/>
        <ContactForm contacFormBtnLabel="Получить"/>

      </header>
    </div>
  );
}

export default App;
