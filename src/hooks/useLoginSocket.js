import { useEffect } from 'react';
import { useAppSelector } from '~/redux/hook';

const useLoginSocket = ({ onSuccess }) => {
  const { qr } = useAppSelector((state) => state.qr);

  useEffect(() => {
    const { loginID, randomKey } = qr;

    let socket;
    if (loginID) {
      socket = new WebSocket(
        `wss://api.vietqr.org/vqr/socket?loginId=${loginID}`,
      );
      socket.onopen = () => {
        // console.log('WebSocket connection established');
        const message = JSON.stringify({
          type: 'subscribe',
          loginID,
          randomKey,
        });
        socket.send(message);
      };

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.loginId === loginID) {
          onSuccess(data);
        }
      };
      socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      socket.onclose = (event) => {
        console.log('WebSocket connection closed:', event);
      };
    }

    return () => {
      if (socket) socket.close();
    };
  }, [qr]);
};

export default useLoginSocket;
