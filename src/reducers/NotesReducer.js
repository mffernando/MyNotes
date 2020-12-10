//initial note
const initialState = {
  list:[
    {
      title: 'Note 1',
      body: 'My new note'
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    //new note
    case 'ADD_NOTE':
      break;
  }
  return state;
}
