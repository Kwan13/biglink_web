import { ReactElement, useState, useEffect } from 'react';
import { ArrowRight } from 'react-feather';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';
import { changePasswordService } from '../../../services/forgotPasswordServices';
import Button from '../../../components/Button';
import { Input } from '../../../components/Form/Input';
import PresentationSide from '../PresentationSide';
import { ForgotPasswordCodeContainer } from './styles';
import ErrorNotification from '../../../components/notification/ErrorNotification';
import { useForgotPassword } from '../../../hooks/useForgotPassword';

interface FormData {
  newPassword: string;
  confirmPassword: string;
}

export default function ChangePassword(): ReactElement {
  const { handleSubmit, register } = useForm();

  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const params = useParams<{ email: string; code: string }>();

  const { forgotPasswordObj, changeForgotPasswordObj } = useForgotPassword();

  useEffect(() => {
    function validateForgotPasswordFlow() {
      if (forgotPasswordObj.email !== '' && forgotPasswordObj.code !== '') {
        return;
      }
      history.push(`/forgot-password`);
    }
    validateForgotPasswordFlow();
  }, []);

  async function onSubmit(data: FormData) {
    if (
      data.newPassword !== data.confirmPassword ||
      data.newPassword.length < 6
    ) {
      toast.error(
        <ErrorNotification message="Campos digitados incorretamente." />,
      );
      return;
    }

    setLoading(true);
    await changePasswordService(params.email, params.code, data.newPassword)
      .then(() => {
        forgotPasswordObj.code = '';
        forgotPasswordObj.email = '';
        forgotPasswordObj.passwordChanged = true;
        changeForgotPasswordObj(forgotPasswordObj);
        setLoading(false);
        return history.push(`/forgot-password/changed`);
      })
      .catch(error => {
        setLoading(false);
        toast.error(<ErrorNotification message={error.message} />);
      });
  }

  return (
    <ForgotPasswordCodeContainer>
      <form className="formSide" onSubmit={handleSubmit(onSubmit)}>
        <label className="forgotTitle">Insira sua nova senha para acesso</label>
        <Input
          type="password"
          label="Digite sua nova senha"
          height="55px"
          borderRadius="15px"
          placeholder="Senha precisa ter no minimo 6 digitos!"
          shadow
          {...register('newPassword')}
        />
        <Input
          type="password"
          label="Confirme sua senha"
          height="55px"
          borderRadius="15px"
          placeholder="Senha precisa ter no minimo 6 digitos!"
          shadow
          {...register('confirmPassword')}
        />
        <Button
          icon={<ArrowRight className="arrowRight" size={25} />}
          isLoading={loading}
          type="submit"
          style={{
            marginTop: 40,
          }}
          text="Alterar senha"
        />
      </form>
      <PresentationSide />
    </ForgotPasswordCodeContainer>
  );
}
