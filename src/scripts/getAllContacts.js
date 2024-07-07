import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  const savedContacts = await fs.readFile(PATH_DB);
  return JSON.parse(savedContacts);
};

console.log(await getAllContacts());
