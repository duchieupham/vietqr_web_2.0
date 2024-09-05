import QRCode from 'react-qr-code';

export default function QRCodeComponent({ value }) {
  return (
    <QRCode
      value={value} // QR code value to be encoded
      size={256} // Size of the QR code
      style={{ height: 'auto', maxWidth: '100%', width: '250px' }}
      viewBox="0 0 256 256" // ViewBox for the QR code
    />
  );
}
