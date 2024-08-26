import * as yup from 'yup';

export const LoginFormSchema = yup
  .object()
  .shape({
    phoneNo: yup
      .string()
      .matches(
        /^(?:\+84|0)(?:3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/,
        'Vui lòng nhập đúng số điện thoại !',
      )
      .required('Phone number is required'),
    password: yup.string().trim(),
  })
  .required();
