import * as yup from 'yup';

const advertisingSchema = yup.object({
  format: yup.string().required('campo obrigatório.'),
  thumb: yup.mixed().test('fileSize', 'escolha uma imagem.', value => {
    return value.length !== 0;
  }),
  title: yup.string().required('campo obrigatório.'),
  text: yup.string().required('campo obrigatório.'),
  cta_bt: yup.string().required('campo obrigatório.'),
});

export default advertisingSchema;
