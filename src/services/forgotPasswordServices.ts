import {
  sendForgotPasswordCodeRepository,
  verifyForgotPasswordCodeRepository,
  changePassword,
} from '../repository/forgotPasswordRepository';

export async function sendForgotPasswordCodeService(email: string) {
  return sendForgotPasswordCodeRepository(email).then(response => {
    return response;
  });
}

export async function verifyForgotPasswordCodeService(
  email: string,
  code: string,
) {
  return verifyForgotPasswordCodeRepository(email, code).then(response => {
    return response;
  });
}

export async function changePasswordService(
  email: string,
  code: string,
  newPassword: string,
) {
  return changePassword(email, code, newPassword).then(response => {
    return response;
  });
}
