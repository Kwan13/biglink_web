import api from '../config/authApi';
import handleError from '../config/handleApiError';
import { UserLoginInterface } from '../interfaces/UserInterface';

export async function login(
  email: string,
  password: string,
): Promise<UserLoginInterface | undefined> {
  const data = {
    email,
    password,
  };

  const returnValue = await api
    .post('/oauth/access_token', data, {
      method: 'POST',
    })
    .then(response => {
      console.log(response);
      return response.data as UserLoginInterface;
    })
    .catch(error => {
      return handleError(error);
    });

  return returnValue;
}
