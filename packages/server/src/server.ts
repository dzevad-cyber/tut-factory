console.time('Server startup time');
import app from './app/app';
import dbSetup from './app/mysql/db.setup';

dbSetup();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Server mode: ${process.env.NODE_ENV}`);
  console.timeEnd('Server startup time');
});
