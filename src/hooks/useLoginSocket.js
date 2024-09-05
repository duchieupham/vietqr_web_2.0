import { useEffect } from 'react';

const useLoginSocket = (loginID, randomKey, onSubmit) => {
  useEffect(() => {
    const socket = new WebSocket(
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
        onSubmit(data);
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };

    return () => {
      socket.close();
    };
  }, [loginID, randomKey, onSubmit]);
};

export default useLoginSocket;
