import { ReactElement, useState, useEffect } from 'react';
import { ArrowRight } from 'react-feather';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import { useForgotPassword } from '../../../hooks/useForgotPassword';

import Love from '../../../assets/lotties-json/love-message-animation.json';
import Button from '../../../components/Button';

import { ConfirmPasswordChangedContainer, LootieContainer } from './styles';

export default function ConfirmPasswordChanged(): ReactElement {
  const history = useHistory();
  const { forgotPasswordObj, changeForgotPasswordObj } = useForgotPassword();

  function forgotPasswordHandle() {
    forgotPasswordObj.passwordChanged = false;
    changeForgotPasswordObj(forgotPasswordObj);

    return history.push('/');
  }

  useEffect(() => {
    function validateForgotPasswordFlow() {
      console.log(forgotPasswordObj);
      if (forgotPasswordObj.passwordChanged) {
        return;
      }
      history.push(`/forgot-password`);
    }
    validateForgotPasswordFlow();
  }, []);

  return (
    <ConfirmPasswordChangedContainer>
      <div className="leftSideInformationContainer">
        <label className="leftSideInformationTitle">
          Sua senha foi recuperada com sucesso!
        </label>
        <label className="leftSideInformationSubTitle">
          Uma nova senha foi definida em sua conta, volte a tela de login para
          acessar sua conta utilizando está sua nova senha!
        </label>

        <Button
          icon={<ArrowRight className="arrowRight" size={25} />}
          isLoading={false}
          onClick={forgotPasswordHandle}
          text="Finalizar"
        />
      </div>
      <LootieContainer>
        <Lottie
          isClickToPauseDisabled
          ariaRole=".test"
          options={{
            loop: true,
            autoplay: true,
            animationData: Love,
          }}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
          }}
        />
      </LootieContainer>
    </ConfirmPasswordChangedContainer>
  );
}
