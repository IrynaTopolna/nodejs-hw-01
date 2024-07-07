import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  const savedContacts = await fs.readFile(PATH_DB);
  const parsedContacts = JSON.parse(savedContacts);
  return parsedContacts.length;
};

console.log(await countContacts());
