import * as yup from 'yup';
import {
  PASSWORD_LENGTH_REGEX,
  PHONE_LENGTH_REGEX,
  PHONE_REGEX,
} from '~/constants';

export const LoginFormSchema = yup
  .object()
  .shape({
    phoneNo: yup
      .string()
      .required('Số điện thoại không được để trống')
      .matches(PHONE_REGEX, 'Vui lòng nhập đúng số điện thoại.')
      .matches(PHONE_LENGTH_REGEX, 'Số điện thoại phải có 10 chữ số.'),
    password: yup
      .string()
      .trim()
      .matches(PASSWORD_LENGTH_REGEX, 'Mật khẩu phải có 6 chữ số.'),
  })
  .required();
