import * as yup from 'yup';

const projectSchema = yup.object().shape({
  name: yup.string().required('campo obrigatório.'),
  status: yup.string().required('campo obrigatório.'),
  description: yup.string().required('campo obrigatório.'),
});

export default projectSchema;
