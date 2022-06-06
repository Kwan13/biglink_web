import { UserLoginInterface } from '../interfaces/UserInterface';

export enum Roles {
  READ = 'READ',
  WRITE = 'WRITE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export function validateRoles(
  user: UserLoginInterface | undefined,
  role: Roles,
): boolean {
  if (!user) return false;

  for (let i = 0; i < user.userRole.length; i += 1) {
    if (user.userRole[i] === role.toString()) return true;
  }

  return false;
}
