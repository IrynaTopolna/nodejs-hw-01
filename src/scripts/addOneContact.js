import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contact = createFakeContact();
  console.log(contact);

  const savedContacts = await getSavedContacts();
  console.log(savedContacts);
  const allContacts = [...savedContacts, contact];
  console.log(allContacts);

  await updateContacts(allContacts);
};

async function getSavedContacts() {
  const savedContacts = await fs.readFile(PATH_DB);
  return JSON.parse(savedContacts);
}

const updateContacts = (contacts) =>
  fs
    .writeFile(PATH_DB, JSON.stringify(contacts))
    .then(() => console.log('Added'))
    .catch((err) => console.error(err));

addOneContact();
