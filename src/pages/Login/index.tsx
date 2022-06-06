import { ReactElement, useEffect, useState } from 'react';
import { ArrowRight } from 'react-feather';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from '../../components/Button';
import { Input } from '../../components/Form/Input';
import ErrorNotification from '../../components/notification/ErrorNotification';

import { useAuth } from '../../hooks/useAuth';
import { loginService } from '../../services/userServices';
import getLoggedUser from '../../utils/LoggedUser';
import { LoginMainContainer } from './styles';

interface FormData {
  email: string;
  password: string;
}

export default function Login(): ReactElement {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const { changeLoggedUser, user } = useAuth();
  const userLocalStorage = getLoggedUser();
  const { handleSubmit, register } = useForm();

  useEffect(() => {
    if (userLocalStorage && !user) {
      changeLoggedUser(userLocalStorage);
      history.push('/projects');
    }
  }, [history]);

  async function handleLogin(data: FormData) {
    setLoading(true);
    await loginService(data.email, data.password)
      .then(response => {
        changeLoggedUser(response);
        setLoading(false);

        return history.push('/projects');
      })
      .catch(error => {
        setLoading(false);
        toast.error(<ErrorNotification message={error.message} />);
      });
  }

  return (
    <LoginMainContainer>
      <div className="presentationBarSide">
        <div className="logoBoxContainer">
          <div className="logoBox" />
          <div className="presentationNameContainer">
            <label className="presentationNameTitle">BigLink</label>
            <label className="presentationNameSubTitle">By: BigDay</label>
          </div>
        </div>
        <div className="presentationTextContainer">
          <label className="presentationText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
            risus feugiat in ante metus. Quisque sagittis purus sit amet
            volutpat consequat. Luctus accumsan tortor posuere ac ut consequat
            semper viverra. Tristique nulla aliquet enim tortor at. Diam donec
            adipiscing tristique risus nec. Molestie nunc non blandit massa enim
            nec dui nunc. Cras tincidunt lobortis feugiat vivamus at augue. Urna
            nec tincidunt praesent semper feugiat nibh sed pulvinar proin.
            Sodales ut etiam sit amet nisl purus. Id venenatis a condimentum
            vitae. Vitae turpis massa sed elementum tempus egestas sed.
          </label>
        </div>
      </div>
      <form className="formSide" onSubmit={handleSubmit(handleLogin)}>
        <div className="presentationFormTitleContainer">
          <label className="presentationFormTitle">
            Seja Bem-vindo de volta!
          </label>
        </div>
        <div className="formContainer">
          <Input
            type="email"
            shadow
            label="E-mail"
            height="55px"
            background="#FFFFFF"
            {...register('email')}
          />
          <Input
            type="password"
            label="Senha"
            shadow
            height="55px"
            background="#FFFFFF"
            {...register('password')}
          />
          <Link className="forgotPasswordLink" to="/forgot-password">
            Esqueci minha senha
          </Link>
          <Button
            icon={<ArrowRight className="arrowRight" size={25} />}
            isLoading={loading}
            type="submit"
            text="Entrar"
          />
        </div>
      </form>
    </LoginMainContainer>
  );
}
