import { MainForm } from '../MainForm';
import { Title } from "../../../ui/title/Title";

interface ContactFormProps {
  /**
  * Button Label
  */
  contacFormBtnLabel?: string
}

export const ContactForm = ({
    contacFormBtnLabel="contacFormBtnLabel"
  }: ContactFormProps) => {
    return (
      <div>
        <Title firstPtTitle='НЕ НАШЛИ ПОДХОДЯЩИЙ' secondPtTitle='ПРОЕКТ?'/>
        <MainForm formBtnLabel={contacFormBtnLabel}/>
      </div>
    );
};