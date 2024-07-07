import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  getSavedContacts()
    .then((savedContacts) => {
      if (savedContacts.length > 0) {
        savedContacts.pop();
        updateContacts(savedContacts);
      } else {
        console.log('No saved contacts');
      }
    })
    .catch((err) => console.error(err));
};

async function getSavedContacts() {
  const savedContacts = await fs.readFile(PATH_DB);
  return JSON.parse(savedContacts);
}

const updateContacts = (contacts) =>
  fs
    .writeFile(PATH_DB, JSON.stringify(contacts))
    .then(() => console.log('Last contact removed'))
    .catch((err) => console.error(err));

removeLastContact();
