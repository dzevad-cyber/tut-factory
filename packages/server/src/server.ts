console.time('[server] Server startup time');
import app from './app/app';
import dbSetup from './app/mysql/db.setup';

process.on('uncaughtException', (err: any) => {
  console.log('[server] UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(`[server] ${err.name}, ${err.message}}`);
  console.error('[server] Full error:', err);
  process.exit(1);
});

dbSetup();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`[server] Server listening on port ${PORT}`);
  console.log(`[server] Server mode: ${process.env.NODE_ENV}`);
  console.timeEnd('[server] Server startup time');
});

process.on('unhandledRejection', (err: any) => {
  console.log('[server] UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(`[server] ${err.name}, ${err.message}}`);
  console.error('[server] Full error:', err);
  server.close(() => {
    process.exit(1);
  });
});
