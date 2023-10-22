import { dbConnect, syncModels } from './db.utils';
import '../models/course.model';

const dbSetup = () => {
  dbConnect();
  syncModels();
};

export default dbSetup;
