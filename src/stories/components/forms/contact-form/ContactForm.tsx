import { MainForm } from '../MainForm';
import { SectionTitle } from "../../../ui/section-title/SectionTitle";

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
        <SectionTitle firstPtTitle='НЕ НАШЛИ ПОДХОДЯЩИЙ' secondPtTitle='ПРОЕКТ?'/>
        <MainForm formBtnLabel={contacFormBtnLabel}/>
      </div>
    );
};