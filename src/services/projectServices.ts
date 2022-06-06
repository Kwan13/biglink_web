import {
  CreateProjectInterface,
  ProjectFormInterface,
  ProjectInterface,
} from '../interfaces/ProjectInterface';
import { createProject, getProjects } from '../repository/projectRepository';
import getLoggedUser from '../utils/LoggedUser';

export async function getProjectService(): Promise<
  ProjectInterface[] | undefined
> {
  const user = getLoggedUser();
  if (!user) {
    throw Object.assign(
      new Error('Você precisa estar logado para realizar esta requisição.'),
    );
  }

  return getProjects(user.costumer.costumerId, user.accessToken).then(
    response => {
      return response;
    },
  );
}

export async function createProjectService(
  project: ProjectFormInterface,
): Promise<ProjectInterface | undefined> {
  const user = getLoggedUser();
  if (!user) {
    throw Object.assign(
      new Error('Você precisa estar logado para realizar esta requisição.'),
    );
  }

  const enrichedProject: CreateProjectInterface = {
    customerId: user.costumer.costumerId,
    userId: user._id,
    description: project.description,
    name: project.name,
    status: project.status,
  };

  return createProject(enrichedProject, user.accessToken).then(response => {
    return response;
  });
}
