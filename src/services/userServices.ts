import { UserLoginInterface } from '../interfaces/UserInterface';
import { login } from '../repository/userRepository';

export async function loginService(
  email: string,
  password: string,
): Promise<UserLoginInterface | undefined> {
  return login(email, password).then(response => {
    return response;
  });
}
