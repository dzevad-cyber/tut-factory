import morgan from 'morgan';

morgan.token('server', function (req, res) {
  return '[server]';
});

const outputFormat =
  ':server :method :url :status :response-time ms - :res[content-length]';

export default outputFormat;
