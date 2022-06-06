export interface ProjectInterface {
  _id: string;
  customerId: string;
  name: string;
  status: string;
  description: string;
  createdAt: {
    userId: string;
    date: string;
  };
  updatedAt: {
    userId: string;
    date: string;
  };
}

export interface ProjectFormInterface {
  name: string;
  status: string;
  description: string;
}

export interface CreateProjectInterface {
  name: string;
  userId: string;
  status: string;
  customerId: string;
  description: string;
}
