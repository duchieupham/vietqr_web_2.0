import * as yup from 'yup';

export const LoginFormSchema = yup
  .object()
  .shape({
    phoneNo: yup
      .string()
      .min(10, 'Số điện thoại phải có đủ 10 số')
      .max(10, 'Số điện thoại phải có đủ 10 số')
      .required('Phone number is required')
      .matches(
        /^(?:\+84|0)(?:3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/,
        'Vui lòng nhập đúng số điện thoại !',
      ),
    password: yup
      .string()
      .trim()
      .max(6, 'Mật khẩu phải có đúng 6 ký tự')
      .min(6, 'Mật khẩu phải có đúng 6 ký tự')
      .matches(/^\d{6}$/, 'Password must be exactly 6 digits')
      .required('Vui lòng nhập mật khẩu !'),
  })
  .required();
