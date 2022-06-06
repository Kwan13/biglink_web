import api from '../config/projectsApi';
import handleError from '../config/handleApiError';
import {
  CreateProjectInterface,
  ProjectInterface,
} from '../interfaces/ProjectInterface';

export async function getProjects(
  costumerId: string,
  token: string,
): Promise<ProjectInterface[] | undefined> {
  const returnValue = await api
    .get(`/projects/costumerId/${costumerId}`, {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(response => {
      return response.data as Array<ProjectInterface>;
    })
    .catch(error => {
      return handleError(error);
    });

  return returnValue;
}

export async function createProject(
  project: CreateProjectInterface,
  token: string,
): Promise<ProjectInterface | undefined> {
  const returnValue = await api
    .post(`/projects/`, project, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(response => {
      return response.data as ProjectInterface;
    })
    .catch(error => {
      return handleError(error);
    });

  return returnValue;
}
