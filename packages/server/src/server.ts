console.time('[server] Server startup time');
import app from './app/app';
import dbSetup from './app/mysql/db.setup';

dbSetup();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`[server] Server listening on port ${PORT}`);
  console.log(`[server] Server mode: ${process.env.NODE_ENV}`);
  console.timeEnd('[server] Server startup time');
});

process.on('unhandledRejection', (err: any) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
