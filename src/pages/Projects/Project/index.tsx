import { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiChevronDown } from 'react-icons/fi';
import { yupResolver } from '@hookform/resolvers/yup';

import projectSchema from '../../../validations/projectValidation';
import campaignSchema from '../../../validations/campaignValidation';
import { ProjectFormInterface } from '../../../interfaces/ProjectInterface';
import { CampaignFormInterface } from '../../../interfaces/CampaignInterface';

import { Sidebar } from '../../../components/Sidebar';
import { Header } from '../../../components/Header';
import { CampaignCard } from '../../../components/Cards/CampaignCard';
import { Input } from '../../../components/Form/Input';
import { Select } from '../../../components/Form/Select';
import { TextArea } from '../../../components/Form/TextArea';
import { SubmitButton } from '../../../components/Form/SubmitButton';

import { Container, Content } from './styles';

export default function Project(): ReactElement {
  const [showCreateCampaign, setShowCreateCampaign] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(projectSchema),
  });

  const {
    handleSubmit: handleSubmitCampaign,
    register: registerCampaign,
    formState: campaignFormState,
    reset: resetCampaignFields,
  } = useForm({
    resolver: yupResolver(campaignSchema),
  });
  const { errors: campaignErrors } = campaignFormState;

  function toggleCreateCampaign() {
    setShowCreateCampaign(!showCreateCampaign);
  }

  function handleCreateCampaign(data: CampaignFormInterface) {
    console.log(data);
    resetCampaignFields();
  }

  function handleEditProject(data: ProjectFormInterface) {
    reset();
    console.log(data);
  }

  return (
    <>
      <Sidebar />
      <Container>
        <Header
          title="Projeto"
          subTitle="Fiat"
          buttonTitle={showCreateCampaign ? 'Editar projeto' : 'Nova campanha'}
          handleButtonClick={toggleCreateCampaign}
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

          <button type="button" onClick={toggleCreateCampaign}>
            {showCreateCampaign ? 'Editar projeto' : 'Nova campanha'}
            <FiChevronDown size={20} />
          </button>

          {showCreateCampaign ? (
            <form onSubmit={handleSubmitCampaign(handleCreateCampaign)}>
              <div className="formContent">
                <div className="inputGroup">
                  <Input
                    label="Nome"
                    background="#ebecf0"
                    error={campaignErrors.campaign_name?.message}
                    {...registerCampaign('campaign_name')}
                  />

                  <Select
                    label="Canal"
                    background="#ebecf0"
                    error={campaignErrors.channel?.message}
                    {...registerCampaign('channel')}
                  >
                    <option value="product01">Canal 01</option>
                    <option value="product02">Canal 02</option>
                  </Select>

                  <Select
                    label="Objetivo"
                    background="#ebecf0"
                    error={campaignErrors.objective?.message}
                    {...registerCampaign('obj_midia')}
                  >
                    <option value="product01">Objetivo 01</option>
                    <option value="product01">Objetivo 02</option>
                  </Select>
                </div>

                <div className="inputGroup">
                  <Select
                    label="Tipo de Campanha"
                    background="#ebecf0"
                    error={campaignErrors.campaign?.message}
                    {...registerCampaign('campaign_type')}
                  >
                    <option value="product01">Campanha 01</option>
                    <option value="product01">Campanha 02</option>
                  </Select>

                  <Input
                    type="date"
                    label="Data de início"
                    background="#ebecf0"
                    error={campaignErrors.start_date?.message}
                    {...registerCampaign('start_date')}
                  />

                  <Input
                    type="date"
                    label="Data de término"
                    background="#ebecf0"
                    error={campaignErrors.end_date?.message}
                    {...registerCampaign('end_date')}
                  />
                </div>
              </div>

              <div className="buttonContainer">
                <SubmitButton>Criar</SubmitButton>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit(handleEditProject)}>
              <div className="formContent">
                <div className="inputGroup">
                  <Input
                    label="Nome"
                    background="#ebecf0"
                    error={errors.name?.message}
                    {...register('name')}
                  />

                  <Input
                    label="Status"
                    background="#ebecf0"
                    error={errors.status?.message}
                    {...register('status')}
                  />
                </div>

                <div className="inputGroup">
                  <TextArea
                    height="134px"
                    label="Descrição"
                    background="#ebecf0"
                    error={errors.description?.message}
                    {...register('description')}
                  />
                </div>
              </div>

              <div className="buttonContainer">
                <SubmitButton>Editar</SubmitButton>
              </div>
            </form>
          )}

          <div className="gridTitle">
            <p>Minhas campanhas do projeto</p>
            <h3>FIAT</h3>
          </div>
          <div className="campaignsGrid">
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
          </div>
        </Content>
      </Container>
    </>
  );
}
