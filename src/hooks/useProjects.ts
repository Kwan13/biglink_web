import { useQuery } from 'react-query';

import { ProjectInterface } from '../interfaces/ProjectInterface';
import { getProjectService } from '../services/projectServices';

interface FetchProjects {
  projects: ProjectInterface[] | undefined;
  totalCount: number;
}

async function fetchProjects(page: number): Promise<FetchProjects | undefined> {
  const response = await getProjectService().catch(error => {
    console.log(error);
  });

  const limitPerPage = 6;
  const pageStart = (page - 1) * limitPerPage;
  const pageEnd = pageStart + limitPerPage;
  const totalCount = Number(response?.length);

  const projects = response?.slice(pageStart, pageEnd);

  return { projects, totalCount };
}

export function useProjects(page: number) {
  return useQuery(['projects', page], () => fetchProjects(page), {
    // staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
