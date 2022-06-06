import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { AdvertisingInterface } from '../../interfaces/AdvertisingInterface';
import advertisingSchema from '../../validations/advertisingValidation';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';
import { Select } from '../../components/Form/Select';
import { TextArea } from '../../components/Form/TextArea';
import { InputFile } from '../../components/Form/InputFile';
import { SubmitButton } from '../../components/Form/SubmitButton';

import { Container, Content } from './styles';

export default function Advertising(): ReactElement {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(advertisingSchema),
  });
  const history = useHistory();

  function handleBackPage() {
    history.push('/projects');
  }

  function handleEditAdvertising(data: AdvertisingInterface) {
    console.log(data);
  }

  return (
    <>
      <Sidebar />
      <Container>
        <Header
          subTitle="Anúncio"
          buttonTitle="Voltar"
          handleButtonClick={handleBackPage}
        />
        <Content>
          <div className="projectDetails">
            <p>
              <span>Criado por:</span> Kawan, em 20/11/2021.
            </p>
            <p>
              <span>Última atualização:</span> 20/11/2021, por Kawan.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleEditAdvertising)}>
            <div className="formContent">
              <div className="inputGroup">
                <Input
                  label="Título"
                  background="#ebecf0"
                  error={errors.title?.message}
                  {...register('title')}
                />

                <Select
                  label="Formato"
                  background="#ebecf0"
                  error={errors.format?.message}
                  {...register('format')}
                >
                  <option value="region01">Região 01</option>
                  <option value="region02">Região 02</option>
                  <option value="region03">Região 03</option>
                  <option value="region04">Região 04</option>
                </Select>

                <InputFile
                  label="Thumb"
                  background="#ebecf0"
                  accept="image/*"
                  error={errors.thumb?.message}
                  {...register('thumb')}
                />
              </div>

              <div className="inputGroup">
                <Input
                  label="Botão de CTA"
                  background="#ebecf0"
                  error={errors.cta_bt?.message}
                  {...register('cta_bt')}
                />

                <TextArea
                  height="135px"
                  label="Texto da públicidade"
                  background="#ebecf0"
                  error={errors.text?.message}
                  {...register('text')}
                />
              </div>
            </div>

            <div className="buttonContainer">
              <SubmitButton>Editar</SubmitButton>
            </div>
          </form>
        </Content>
      </Container>
    </>
  );
}
