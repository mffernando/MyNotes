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

  let newList = [ ...state.list ];

  switch (action.type) {
    //new note
    case 'ADD_NOTE':
      newList.push({
        title: action.payload.title,
        body: action.payload.body
      });
    break;
    
    //edit note
    case 'EDIT_NOTE':
      if (newList[action.payload.key]) {
        newList[action.payload.key] = {
          title: action.payload.title,
          body: action.payload.body
        };
      }
    break;

    //delete note
    case 'DEL_NOTE':
      newList = newList.filter((item, index) => index != action.payload.key);
    break;

  }
  return { ...state, list: newList };
}
