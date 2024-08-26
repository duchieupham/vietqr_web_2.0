import { useTranslations } from 'next-intl';
import useImage from '~/hooks/useImage';
import Image from 'next/image';
// eslint-disable-next-line object-curly-newline
import { Box, Button, MenuItem, Select } from '@mui/material';
import AppImages from '~/constants/ImagesConstant';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import Link from 'next/link';
import LoginHeaderBar from '../header/LoginHeaderBar';

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
            position: 'relative',
          }}
        >
          <Box component="div">
            <LoginHeaderBar />
          </Box>
          <Box
            component="div"
            sx={{
              marginRight: { xs: '2rem', md: '25rem' },
              display: 'flex',
              alignItems: 'center',
              width: '250px',
              height: '100px',
              position: 'relative', // the parent must be assigned a position of relative
            }}
          >
            <Link href="/">
              {imageUri && (
                <Image
                  src={imageUri}
                  alt="VietQR Logo"
                  objectFit="contain"
                  fill
                />
              )}
            </Link>
          </Box>
          <Box
            component="div"
            sx={{
              display: 'flex',
              gap: '1rem',
            }}
          >
            <Button
              sx={{
                color: 'black',
                fontSize: '1rem',
                fontWeight: 'normal',
                textTransform: 'none',
                gap: '0.5rem',
              }}
            >
              <HeadphonesOutlinedIcon />
              {t('contact')}
            </Button>
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
