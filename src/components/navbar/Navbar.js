import { useTranslations } from 'next-intl';
import useImage from '~/hooks/useImage';
import Image from 'next/image';
import { Button, MenuItem, Select } from '@mui/material';
import AppImages from '~/constants/ImagesConstant';
import { LoginHeader } from '../header';

export default function Navbar() {
  const t = useTranslations();
  const imageUri = useImage(AppImages.logoVietQr);
  const optionSelect = [{ language: 'vietnamese' }];

  return (
    <div
      style={{
        width: '100%',
        position: 'sticky',
        top: 0,
      }}
    >
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          height: '100%',
        }}
      >
        <div
          style={{
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <div>
            <LoginHeader />
          </div>
          <div
            style={{
              marginRight: '25rem',
            }}
          >
            {imageUri && (
              <Image
                priority
                alt={imageUri}
                src={imageUri}
                width={70}
                height={70}
              />
            )}
          </div>
          <div>
            <Button>{t('contact')}</Button>
            <Select>
              {optionSelect &&
                optionSelect.map((option) => (
                  <div key={option.language}>
                    <MenuItem>{t(option.language)}</MenuItem>
                  </div>
                ))}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
