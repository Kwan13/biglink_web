import { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiChevronDown, FiTag } from 'react-icons/fi';
import { yupResolver } from '@hookform/resolvers/yup';

import getValidationError from '../../utils/getValidationErrors';
import {
  GroupValidationError,
  GroupFormInterface,
} from '../../interfaces/GroupInterface';
import { groupSchema } from '../../validations/groupValidation';
import advertisingSchema from '../../validations/advertisingValidation';
import { AdvertisingInterface } from '../../interfaces/AdvertisingInterface';

import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { Input } from '../../components/Form/Input';
import { Select } from '../../components/Form/Select';
import { SubmitButton } from '../../components/Form/SubmitButton';
import { AdvertisingCard } from '../../components/Cards/AdvertisingCard';
import { InputFile } from '../../components/Form/InputFile';
import { SelectTag } from '../../components/Form/SelectTag';
import { InputTag } from '../../components/Form/InputTag';

import { Container, Content } from './styles';
import { TextArea } from '../../components/Form/TextArea';

export default function Group(): ReactElement {
  const { handleSubmit, register, reset } = useForm();

  const {
    handleSubmit: handleSubmitAds,
    register: registerAds,
    reset: resetAdsFields,
    formState: formStateAds,
  } = useForm({
    resolver: yupResolver(advertisingSchema),
  });

  const { errors: adsErrors } = formStateAds;

  const [showCreateAdvertising, setShowCreateAdvertising] = useState(false);
  const [square, setSquare] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string[]>([]);
  const [groupErrors, setGroupErrors] = useState<GroupValidationError>();

  function toggleCreateAdvertising() {
    setShowCreateAdvertising(!showCreateAdvertising);
  }

  async function handleEditGroup(data: GroupFormInterface) {
    try {
      const group = {
        ...data,
        square,
        keyword,
      };

      await groupSchema.validate(group, {
        abortEarly: false,
      });
      console.log(group);
      reset();
      setKeyword([]);
      setSquare([]);
      setGroupErrors({});
    } catch (err: any) {
      const error = getValidationError(err);
      setGroupErrors(error);
    }
  }

  function handleCreateAdvertising(data: AdvertisingInterface) {
    console.log(data);
    resetAdsFields();
  }

  return (
    <>
      <Sidebar />
      <Container>
        <Header
          title="Grupo"
          subTitle="XPTO"
          buttonTitle={showCreateAdvertising ? 'Editar grupo' : 'Novo anúncio'}
          handleButtonClick={toggleCreateAdvertising}
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

          <button type="button" onClick={toggleCreateAdvertising}>
            {showCreateAdvertising ? 'Editar grupo' : 'Novo anúncio'}
            <FiChevronDown size={20} />
          </button>

          {showCreateAdvertising ? (
            <form onSubmit={handleSubmitAds(handleCreateAdvertising)}>
              <div className="formContent">
                <div className="inputGroup">
                  <Input
                    label="Título"
                    background="#ebecf0"
                    error={adsErrors.title?.message}
                    {...registerAds('title')}
                  />

                  <Select
                    label="Formato"
                    background="#ebecf0"
                    error={adsErrors.format?.message}
                    {...registerAds('format')}
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
                    error={adsErrors.thumb?.message}
                    {...registerAds('thumb')}
                  />
                </div>

                <div className="inputGroup">
                  <Input
                    label="Botão de CTA"
                    background="#ebecf0"
                    error={adsErrors.cta_bt?.message}
                    {...registerAds('cta_bt')}
                  />

                  <TextArea
                    height="135px"
                    label="Texto da públicidade"
                    background="#ebecf0"
                    error={adsErrors.text?.message}
                    {...registerAds('text')}
                  />
                </div>
              </div>

              <div className="buttonContainer">
                <SubmitButton>Criar</SubmitButton>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit(handleEditGroup)}>
              <div className="formContent">
                <div className="inputGroup">
                  <Select
                    label="Compra de mídia"
                    background="#ebecf0"
                    error={groupErrors?.cp_midia}
                    {...register('cp_midia')}
                  >
                    <option value="region01">Região 01</option>
                    <option value="region02">Região 02</option>
                    <option value="region03">Região 03</option>
                    <option value="region04">Região 04</option>
                    <option value="region05">Região 05</option>
                    <option value="region06">Região 06</option>
                    <option value="region07">Região 07</option>
                  </Select>

                  <SelectTag
                    label="Praça"
                    background="#ebecf0"
                    name="square"
                    tagList={square}
                    setTagList={setSquare}
                    error={groupErrors?.square}
                  >
                    <option value="">Selecione</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goías</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraíma</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </SelectTag>
                </div>

                <div className="inputGroup">
                  <Input
                    label="Segmentação"
                    background="#ebecf0"
                    error={groupErrors?.segmentation}
                    {...register('segmentation')}
                  />

                  <InputTag
                    label="Palavras Chave"
                    name="keyword"
                    background="#ebecf0"
                    placeholder="Digite e precione espaço"
                    icon={FiTag}
                    tagList={keyword}
                    setTagList={setKeyword}
                    error={groupErrors?.keyword}
                  />
                </div>
              </div>

              <div className="buttonContainer">
                <SubmitButton>Editar</SubmitButton>
              </div>
            </form>
          )}

          <div className="gridTitle">
            <p>Anúncios</p>
          </div>
          <div className="campaignsGrid">
            <AdvertisingCard />
            <AdvertisingCard />
            <AdvertisingCard />
            <AdvertisingCard />
            <AdvertisingCard />
            <AdvertisingCard />
          </div>
        </Content>
      </Container>
    </>
  );
}
