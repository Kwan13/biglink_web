import * as yup from 'yup';

export const groupSchema = yup.object({
  cp_midia: yup.string().required('campo obrigatório.'),
  segmentation: yup.string().required('campo obrigatório.'),
  square: yup
    .array()
    .required('campo obrigatório.')
    .min(1, 'selecione um ou mais itens.'),
  keyword: yup
    .array()
    .required('campo obrigatório.')
    .min(1, 'digite uma ou mais palavras chave.'),
});
