/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function handleError(error: any): any {
  console.log(error);

  if (error.response) {
    if (error.response.data.message) {
      throw Object.assign(new Error(error.response.data.message.toString()));
    } else if (error.response.data.error) {
      throw Object.assign(new Error(error.response.data.error.toString()));
    } else {
      throw Object.assign(new Error(error.response.data.toString()));
    }
  } else {
    throw Object.assign(
      new Error(
        'Não foram recebidas informações do erro, servidor fora do ar ou inacessível.',
      ),
    );
  }
}
