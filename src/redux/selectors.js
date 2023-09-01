

export const getContacts = state => state.contacts;
export const getFilter = state => state.filters;

export const getFilteredContacts = state => {
    console.log(state)
  return state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filters.trim().toLowerCase())
  );
};
