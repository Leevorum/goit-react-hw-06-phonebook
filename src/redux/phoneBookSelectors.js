export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

//  Filtered contacts
export const filteredContacts = state => {
  const contacts = getItems(state);
  const filter = getFilter(state);

  const toLowerCaseFilter = filter.toLowerCase();
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(toLowerCaseFilter);
  });
};
