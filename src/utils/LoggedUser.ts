import { UserLoginInterface } from '../interfaces/UserInterface';

export default function getLoggedUser(): UserLoginInterface | undefined {
  const user = localStorage.getItem('loggedUser');

  if (user) return JSON.parse(user) as UserLoginInterface;

  return undefined;
}

export function setAndChangeLoggedUser(obj: UserLoginInterface): void {
  localStorage.setItem('loggedUser', JSON.stringify(obj));
}

export function removeLoggedUser(): void {
  localStorage.removeItem('loggedUser');
}
