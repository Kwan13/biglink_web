import { ReactElement } from 'react';
import { ArrowRight } from 'react-feather';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';

import Love from '../../assets/lotties-json/lock-animation.json';
import Button from '../../components/Button';

import { ConfirmPasswordChangedContainer, LootieContainer } from './styles';

export default function Unauthorized(): ReactElement {
  const history = useHistory();

  function redirect() {
    history.push('/');
  }

  return (
    <ConfirmPasswordChangedContainer>
      <div className="leftSideInformationContainer">
        <label className="leftSideInformationTitle">
          Você não tem acesso a essa requisição!
        </label>
        <label className="leftSideInformationSubTitle">
          Você não tem acesso de leitura para essa pagina, solicite acesso ao
          administrador e tente novamente em seguida!
        </label>

        <Button
          icon={<ArrowRight className="arrowRight" size={25} />}
          isLoading={false}
          onClick={() => {
            redirect();
          }}
          text="Voltar"
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
