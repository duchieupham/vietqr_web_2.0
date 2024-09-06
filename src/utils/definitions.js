import * as yup from 'yup';
import { passwordLengthRegex, phoneLengthRegex, phoneRegex } from '~/constants';

export const LoginFormSchema = yup
  .object()
  .shape({
    phoneNo: yup
      .string()
      .required('Số điện thoại không được để trống')
      .matches(phoneRegex, 'Vui lòng nhập đúng số điện thoại.')
      .matches(phoneLengthRegex, 'Số điện thoại phải có 10 chữ số.'),
    password: yup
      .string()
      .trim()
      .matches(passwordLengthRegex, 'Mật khẩu phải có 6 chữ số.'),
  })
  .required();
