import { ReactElement, useState, useEffect } from 'react';
import { ArrowRight } from 'react-feather';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../../components/Button';
import { Input } from '../../../components/Form/Input';
import PresentationSide from '../PresentationSide';
import { ForgotPasswordCodeContainer } from './styles';
import { verifyForgotPasswordCodeService } from '../../../services/forgotPasswordServices';
import ErrorNotification from '../../../components/notification/ErrorNotification';
import { useForgotPassword } from '../../../hooks/useForgotPassword';

interface FormData {
  code: string;
}

export default function GetCode(): ReactElement {
  const { handleSubmit, register } = useForm();
  const history = useHistory();
  const params = useParams<{ email: string }>();
  const { forgotPasswordObj, changeForgotPasswordObj } = useForgotPassword();

  useEffect(() => {
    function validateForgotPasswordFlow() {
      if (forgotPasswordObj.email !== '') {
        return;
      }
      history.push(`/forgot-password`);
    }
    validateForgotPasswordFlow();
  }, [forgotPasswordObj.email, history]);

  async function onSubmit(data: FormData) {
    setLoading(true);
    await verifyForgotPasswordCodeService(params.email, data.code)
      .then(() => {
        forgotPasswordObj.code = data.code;
        changeForgotPasswordObj(forgotPasswordObj);
        console.log(forgotPasswordObj);
        setLoading(false);
        return history.push(
          `/forgot-password/change/${params.email}/${data.code}`,
        );
      })
      .catch(error => {
        setLoading(false);
        toast.error(<ErrorNotification message={error.message} />);
      });
  }

  const [loading, setLoading] = useState(false);

  return (
    <ForgotPasswordCodeContainer>
      <form className="formSide" onSubmit={handleSubmit(onSubmit)}>
        <label className="forgotTitle">Enviamos um codigo em seu e-mail</label>
        <Input
          type="text"
          label="Codigo recebido"
          height="55px"
          borderRadius="15px"
          shadow
          {...register('code')}
        />
        <Button
          icon={<ArrowRight className="arrowRight" size={25} />}
          isLoading={loading}
          type="submit"
          text="Entrar"
        />
      </form>
      <PresentationSide />
    </ForgotPasswordCodeContainer>
  );
}
