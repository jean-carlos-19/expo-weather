import { ObjectSchema, object, string } from "yup";

const validation: ObjectSchema<any> = object({
    search:string().required('field is requeried')
});
export { validation };