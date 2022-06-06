import { ReactElement } from 'react';
import Lottie from 'react-lottie';
import Cloud from '../../../assets/lotties-json/cloud-security.json';

import { PresentationBarSide } from './styles';

export default function PresentationSide(): ReactElement {
  return (
    <PresentationBarSide>
      <div className="lottieContainer">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: Cloud,
          }}
          width="100%"
          height={400}
        />
      </div>
      <div className="informationContainer">
        <label className="titleForgot">Recuperação da senha</label>
        <label className="subTitleForgot">
          Esqueceu sua senha? Sem problemas! Informe seu e-mail e assim,
          enviaremos um e-mail com um código de verificação para que você
          consiga recuperar a senha da sua conta.
        </label>
      </div>
    </PresentationBarSide>
  );
}
