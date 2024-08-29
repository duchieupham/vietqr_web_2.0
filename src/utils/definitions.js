import * as yup from 'yup';

export const LoginFormSchema = yup
  .object()
  .shape({
    phoneNo: yup
      .string()
      .required('Số điện thoại không được để trống')
      .matches(
        /(?:\+84|0084|0)[235789][0-9]{1,2}[0-9]{7}(?:[^\d]+|$)/g,
        'Vui lòng nhập đúng số điện thoại.',
      ),
    password: yup.string().trim(),
  })
  .required();
