export const createWebSocket = (url, onMessage, onError, onOpen, onClose) => {
  const ws = new WebSocket(url);

  ws.onopen = () => {
    // console.log('WebSocket connection opened');
    if (onOpen) onOpen();
  };

  ws.onmessage = (event) => {
    // console.log('WebSocket message received:', event.data);
    if (onMessage) onMessage(event.data);
  };

  ws.onerror = (error) => {
    // console.error('WebSocket error:', error);
    if (onError) onError(error);
  };

  ws.onclose = () => {
    // console.log('WebSocket connection closed');
    if (onClose) onClose();
  };

  return ws;
};
