import { ReactElement, useState } from 'react';
import { ArrowRight } from 'react-feather';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import { Input } from '../../components/Form/Input';
import PresentationSide from './PresentationSide';
import { ForgotPasswordSetupContainer } from './styles';
import { sendForgotPasswordCodeService } from '../../services/forgotPasswordServices';
import ErrorNotification from '../../components/notification/ErrorNotification';
import { useForgotPassword } from '../../hooks/useForgotPassword';

interface FormData {
  email: string;
}

export default function ForgotPassword(): ReactElement {
  const { handleSubmit, register } = useForm();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { forgotPasswordObj, changeForgotPasswordObj } = useForgotPassword();

  async function onSubmit(data: FormData) {
    setLoading(true);
    await sendForgotPasswordCodeService(data.email)
      .then(() => {
        forgotPasswordObj.email = data.email;
        changeForgotPasswordObj(forgotPasswordObj);
        setLoading(false);
        return history.push(`/forgot-password/code/${data.email}`);
      })
      .catch(error => {
        setLoading(false);
        toast.error(<ErrorNotification message={error.message} />);
      });
  }

  return (
    <ForgotPasswordSetupContainer>
      <form className="formSide" onSubmit={handleSubmit(onSubmit)}>
        <label className="forgotTitle">Perdeu sua senha? Sem problemas</label>
        <Input
          type="email"
          label="E-mail"
          height="55px"
          borderRadius="15px"
          shadow
          {...register('email')}
        />
        <Button
          icon={<ArrowRight className="arrowRight" size={25} />}
          isLoading={loading}
          style={{
            marginTop: 40,
          }}
          type="submit"
          text="Entrar"
        />
      </form>
      <PresentationSide />
    </ForgotPasswordSetupContainer>
  );
}
