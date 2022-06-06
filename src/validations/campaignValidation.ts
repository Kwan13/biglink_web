import * as yup from 'yup';

const campaignSchema = yup.object().shape({
  campaign_name: yup.string().required('campo obrigatório.'),
  channel: yup.string().required('campo obrigatório.'),
  obj_midia: yup.string().required('campo obrigatório.'),
  campaign_type: yup.string().required('campo obrigatório.'),
  start_date: yup
    .date()
    .required('campo obrigatório.')
    .typeError('Selecione uma data válida.'),
  end_date: yup
    .date()
    .required('campo obrigatório.')
    .typeError('Selecione uma data válida.'),
});

export default campaignSchema;
