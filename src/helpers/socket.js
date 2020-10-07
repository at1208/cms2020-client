import socketio from 'socket.io-client';
export const io = socketio(process.env.REACT_APP_API_URL)
