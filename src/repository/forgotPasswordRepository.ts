import api from '../config/apiUsers';
import handleError from '../config/handleApiError';

export async function sendForgotPasswordCodeRepository(email: string) {
  const data = {
    email,
  };

  const returnValue = await api
    .post('/users/forgotpassword', data, {
      method: 'POST',
    })
    .catch(error => {
      return handleError(error);
    });

  return returnValue;
}

export async function verifyForgotPasswordCodeRepository(
  email: string,
  code: string,
) {
  const data = {
    email,
    code,
  };

  const returnValue = await api
    .post('/users/codeverifier', data, {
      method: 'POST',
    })
    .catch(error => {
      return handleError(error);
    });

  return returnValue;
}

export async function forgotPasswordCodeVerifier(email: string, code: string) {
  const data = {
    email,
    code,
  };

  const returnValue = await api
    .post('/users/codeverifier', data, {
      method: 'POST',
    })
    .catch(error => {
      return handleError(error);
    });

  return returnValue;
}

export async function changePassword(
  email: string,
  code: string,
  newPassword: string,
) {
  const data = {
    email,
    newPassword,
    code,
  };

  const returnValue = await api
    .patch('/users/resetpassword', data, {
      method: 'PATCH',
    })
    .catch(error => {
      return handleError(error);
    });

  return returnValue;
}
