import { connect, connection, ConnectionStates } from 'mongoose';

const conn = {
  isConnected: false,
};

export async function connectDB() {
  if (conn.isConnected) return;

  const mongoDbKey = process.env.MONGODB_KEY;
  if (!mongoDbKey) {
    throw new Error('La variable de entorno MONGODB_KEY no está definida');
  }

  const db = await connect(mongoDbKey);
  console.log(db.connection.db.databaseName);
  conn.isConnected =
    db.connections[0].readyState === ConnectionStates.connected;
}

connection.on('connected', () => {
  console.log('mongoose is connected');
});

connection.on('error', err => {
  console.log('Mongoose connection error', err);
});
