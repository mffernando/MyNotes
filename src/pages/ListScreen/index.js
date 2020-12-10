import React, { useLayoutEffect } from 'react';

//redux hooks
import { useSelector } from 'react-redux';

//navigation
import { useNavigation } from '@react-navigation/native';

//styled
import {
  Container,
  AddButton,
  AddButtonImage,
  NotesList,
  NoNotes,
  NoNotesImage,
  NoNoteText
} from './styles';

import NoteItem from '../../components/NoteItem';

export default () => {
  //navigation
  const navigation = useNavigation();
  //list of notes
  const list = useSelector(state => state.notes.list);
  //const list = [];
  //layout initialize
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Notes',
      headerRight: () => (
        <AddButton underlayColor="transparent" onPress={()=>navigation.navigate('Edit')} >
          <AddButtonImage source={require('../../assets/more.png')} />
        </AddButton>
      )
    });
  }, []);

  //edit note
  const handleNotePress = (index) => {
    navigation.navigate('Edit', {
      key: index
    });
    //alert("index " + index + " clicked!");
  }

  return (
    <Container>
      {
        //show notes > 0
        list.length > 0 &&
          <NotesList
            data={list}
            renderItem={({item, index})=>(
              <NoteItem 
                data={item}
                index={index}
                onPress={handleNotePress}
              />
            )}
            keyExtractor={(item, index)=>index.toString()}
          />
    }
    {
      //if there are no notes
      list.length == 0 &&
        <NoNotes>
          <NoNotesImage source={require('../../assets/note.png')} />
          <NoNoteText>No Notes</NoNoteText>
        </NoNotes>
    }
    </Container>
  );
}
