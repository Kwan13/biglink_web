import { ReactElement, useState } from 'react';
import { FiChevronDown, FiTag } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import campaignSchema from '../../validations/campaignValidation';
import { groupSchema } from '../../validations/groupValidation';
import { CampaignFormInterface } from '../../interfaces/CampaignInterface';
import {
  GroupFormInterface,
  GroupValidationError,
} from '../../interfaces/GroupInterface';
import getValidationError from '../../utils/getValidationErrors';

import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { Input } from '../../components/Form/Input';
import { Select } from '../../components/Form/Select';
import { SubmitButton } from '../../components/Form/SubmitButton';
import { GroupCard } from '../../components/Cards/GroupCard';
import { InputTag } from '../../components/Form/InputTag';
import { SelectTag } from '../../components/Form/SelectTag';

import { Container, Content } from './styles';

export default function Campaign(): ReactElement {
  const [showCreateGroup, setShowCreateGroup] = useState(false);

  const [square, setSquare] = useState<string[]>([]);
  const [keyword, setKeyWord] = useState<string[]>([]);
  const [groupErrors, setGroupErrors] = useState<GroupValidationError>({});

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(campaignSchema),
  });

  const {
    handleSubmit: handleSubmitGroup,
    register: registerGroup,
    reset: resetGroupFields,
  } = useForm();

  function toggleCreateGroup() {
    setShowCreateGroup(!showCreateGroup);
  }

  function handleEditCampaign(data: CampaignFormInterface) {
    console.log(data);
  }

  async function handleCreateGroup(data: GroupFormInterface) {
    try {
      const groupData = {
        ...data,
        square,
        keyword,
      };
      await groupSchema.validate(groupData, {
        abortEarly: false,
      });
      console.log(groupData);
      resetGroupFields();
      setKeyWord([]);
      setSquare([]);
      setGroupErrors({});
    } catch (err: any) {
      const error = getValidationError(err);
      setGroupErrors(error);
    }
  }

  return (
    <>
      <Sidebar />
      <Container>
        <Header
          title="Campanha"
          subTitle="XPTO"
          buttonTitle={showCreateGroup ? 'Editar campanha' : 'Novo Grupo'}
          handleButtonClick={toggleCreateGroup}
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

          <button type="button" onClick={toggleCreateGroup}>
            {showCreateGroup ? 'Editar campanha' : 'Novo Grupo'}
            <FiChevronDown size={20} />
          </button>

          {showCreateGroup ? (
            <form onSubmit={handleSubmitGroup(handleCreateGroup)}>
              <div className="formContent">
                <div className="inputGroup">
                  <Select
                    label="Compra de mídia"
                    background="#ebecf0"
                    error={groupErrors?.cp_midia}
                    {...registerGroup('cp_midia')}
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
                    <option value="">Selecione uma opção</option>
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
                    {...registerGroup('segmentation')}
                  />

                  <InputTag
                    label="Palavras Chave"
                    name="keyword"
                    background="#ebecf0"
                    placeholder="Digite e precione espaço"
                    icon={FiTag}
                    tagList={keyword}
                    setTagList={setKeyWord}
                    error={groupErrors?.keyword}
                  />
                </div>
              </div>
              <div className="buttonContainer">
                <SubmitButton>Criar</SubmitButton>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit(handleEditCampaign)}>
              <div className="formContent">
                <div className="inputGroup">
                  <Input
                    type="text"
                    label="Nome"
                    background="#ebecf0"
                    error={errors.campaign_name?.message}
                    {...register('campaign_name')}
                  />

                  <Select
                    label="Canal"
                    background="#ebecf0"
                    error={errors.channel?.message}
                    {...register('channel')}
                  >
                    <option value="product01">Canal 01</option>
                    <option value="product02">Canal 02</option>
                    <option value="product03">Canal 03</option>
                    <option value="product04">Canal 04</option>
                    <option value="product05">Canal 05</option>
                    <option value="product06">Canal 06</option>
                    <option value="product07">Canal 07</option>
                  </Select>

                  <Select
                    label="Objetivo"
                    background="#ebecf0"
                    error={errors.objective?.message}
                    {...register('obj_midia')}
                  >
                    <option value="product01">Objetivo 01</option>
                    <option value="product02">Objetivo 02</option>
                    <option value="product03">Objetivo 03</option>
                    <option value="product04">Objetivo 04</option>
                    <option value="product05">Objetivo 05</option>
                    <option value="product06">Objetivo 06</option>
                    <option value="product07">Objetivo 07</option>
                  </Select>
                </div>

                <div className="inputGroup">
                  <Select
                    label="Tipo de Campanha"
                    background="#ebecf0"
                    error={errors.campaign?.message}
                    {...register('campaign_type')}
                  >
                    <option value="product01">Campanha 01</option>
                    <option value="product02">Campanha 02</option>
                    <option value="product03">Campanha 03</option>
                    <option value="product04">Campanha 04</option>
                    <option value="product05">Campanha 05</option>
                    <option value="product06">Campanha 06</option>
                    <option value="product07">Campanha 07</option>
                  </Select>

                  <Input
                    type="date"
                    label="Data de início"
                    background="#ebecf0"
                    error={errors.start_date?.message}
                    {...register('start_date')}
                  />

                  <Input
                    type="date"
                    label="Data de término"
                    background="#ebecf0"
                    error={errors.end_date?.message}
                    {...register('end_date')}
                  />
                </div>
              </div>

              <div className="buttonContainer">
                <SubmitButton>Editar</SubmitButton>
              </div>
            </form>
          )}

          <div className="gridTitle">
            <p>Meus grupos da campanha</p>
            <h3>XPTO</h3>
          </div>

          <div className="campaignsGrid">
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
          </div>
        </Content>
      </Container>
    </>
  );
}
