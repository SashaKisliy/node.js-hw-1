const contacts = require("./contacts.js");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      console.table(oneContact);
      break;

    case "add":
      const newBook = await contacts.addContact({ name, email, phone });
      console.table(newBook);
      break;

    case "remove":
      const newContacts = await contacts.removeContact(id);
      console.table(newContacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
