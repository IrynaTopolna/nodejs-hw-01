import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const newContacts = [];
  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    newContacts.push(contact);
  }

  const savedContacts = await getSavedContacts();
  const allContacts = savedContacts.concat(newContacts);

  updateContacts(allContacts);
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

generateContacts(5);
