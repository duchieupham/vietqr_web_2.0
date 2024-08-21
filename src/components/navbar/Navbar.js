import { useTranslations } from 'next-intl';
import useImage from '~/hooks/useImage';
import Image from 'next/image';
// eslint-disable-next-line object-curly-newline
import { Box, Button, MenuItem, Select } from '@mui/material';
import AppImages from '~/constants/ImagesConstant';
import { LoginHeader } from '../header';

export default function Navbar() {
  const t = useTranslations();
  const imageUri = useImage(AppImages.logoVietQr);
  const optionSelect = [{ language: 'vietnamese' }];

  return (
    <Box
      component="div"
      style={{
        width: '100%',
        position: 'sticky',
        top: 0,
      }}
    >
      <Box
        component="div"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          height: '100%',
        }}
      >
        <Box
          component="div"
          style={{
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Box component="div">
            <LoginHeader />
          </Box>
          <Box
            component="div"
            style={{
              marginRight: '25rem',
            }}
          >
            {imageUri && (
              <Image
                quality={100}
                priority
                alt={imageUri}
                src={imageUri}
                width={70}
                height={70}
              />
            )}
          </Box>
          <Box component="div">
            <Button>{t('contact')}</Button>
            <Select>
              {optionSelect &&
                optionSelect.map((option) => (
                  <div key={option.language}>
                    <MenuItem>{t(option.language)}</MenuItem>
                  </div>
                ))}
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
