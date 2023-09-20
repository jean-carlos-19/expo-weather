import { ObjectSchema, object, string } from 'yup';

const validationSearch = object({
 search: string().required('field is requeried'),
});
export { validationSearch };
