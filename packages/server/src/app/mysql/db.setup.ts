import { dbConnect, syncModels } from './db.utils';
import '../models/user.model';

const dbSetup = () => {
  dbConnect();
  syncModels();
};

export default dbSetup;
