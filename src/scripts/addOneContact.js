import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contact = createFakeContact();

  const savedContacts = await getSavedContacts();
  const allContacts = [...savedContacts, contact];

  await updateContacts(allContacts);
};

async function getSavedContacts() {
  const savedContacts = await fs.readFile(PATH_DB);
  return JSON.parse(savedContacts);
}

const updateContacts = (contacts) =>
  fs
    .writeFile(PATH_DB, JSON.stringify(contacts))
    .then(() => console.log('Contact was added'))
    .catch((err) => console.error(err));

addOneContact();
