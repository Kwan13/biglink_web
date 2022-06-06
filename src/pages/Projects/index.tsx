import { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PulseLoader } from 'react-spinners';
import { yupResolver } from '@hookform/resolvers/yup';

import projectSchema from '../../validations/projectValidation';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { ProjectCard } from '../../components/Cards/ProjectCard';
import { Input } from '../../components/Form/Input';
import { TextArea } from '../../components/Form/TextArea';
import { SubmitButton } from '../../components/Form/SubmitButton';
import { Pagination } from '../../components/Pagination';

import { Container, Content } from './styles';
import { ProjectFormInterface } from '../../interfaces/ProjectInterface';
import { createProjectService } from '../../services/projectServices';
import { useProjects } from '../../hooks/useProjects';

export default function Projects(): ReactElement {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(projectSchema),
  });
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, refetch } = useProjects(currentPage);

  function onSubmit(data: ProjectFormInterface) {
    createProjectService(data);
    reset();
    toggleCreateProject();
    refetch();
  }

  function toggleCreateProject() {
    setShowCreateProject(!showCreateProject);
  }

  return (
    <>
      <Sidebar />
      <Container>
        <Header
          title="Meus projetos na"
          subTitle="BigLink"
          buttonTitle="Novo projeto"
          search
          handleButtonClick={toggleCreateProject}
        />

        <Content>
          <button type="button" onClick={toggleCreateProject}>
            Novo projeto
          </button>

          {showCreateProject && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formContent">
                <div className="inputGroup">
                  <Input
                    type="text"
                    label="Nome"
                    background="#ebecf0"
                    error={errors.name?.message}
                    {...register('name')}
                  />

                  <Input
                    type="text"
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
                <SubmitButton>Criar</SubmitButton>
              </div>
            </form>
          )}

          <h3>Projetos</h3>

          {isLoading && (
            <div className="loadingContainer">
              <PulseLoader color="#6cc8fc" />
            </div>
          )}

          <div className="projectsGrid">
            {data?.projects &&
              data.projects.map(project => (
                <ProjectCard key={project._id} data={project} />
              ))}
          </div>

          {data?.totalCount && (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              total={data?.totalCount}
            />
          )}
        </Content>
      </Container>
    </>
  );
}
