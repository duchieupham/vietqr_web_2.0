import ContactLangButton from '~/components/ContactLangButton';

export default function LanguagePopover() {
  return (
    <ContactLangButton
      type="dashboard"
      style={{
        '& .MuiSelect-select': {
          fontSize: 10,
          py: 0,
        },
        '& .MuiInputBase-root': {
          background: '#F0F4FA',
        },
      }}
    />
  );
}
