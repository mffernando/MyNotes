import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

//styled
import {
  Container,
  TitleInput,
  BodyInput,
  SaveButton,
  SaveButtonImage,
  CloseButton,
  CloseButtonImage
} from './styles';

export default () => {

  //hooks
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const list = useSelector(state => state.notes.list);

  //states
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('new'); //new or edit note?

  //effect
  useEffect(() => {
    //validate key to edit the note
    if (route.params?.key != undefined && list[route.params.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].title); //set new title
      setBody(list[route.params.key].body); //set new body
    }
  }, []);

  //update layout
  useLayoutEffect(() => {
    //title: new or edit
    navigation.setOptions({
      title: status == 'new' ? 'New Note' : 'Edit Note',
      //left button
      headerLeft: () => (
        <CloseButton underlayColor='transparent' onPress={handleCloseButton}>
          <CloseButtonImage source={require('../../assets/close.png')} />
        </CloseButton>
      ),
      //right button
      headerRight: () => (
        <SaveButton underlayColor='transparent' onPress={handleSaveButton}>
          <SaveButtonImage source={require('../../assets/save.png')} />
        </SaveButton>
      )
    });
  }, [status, title, body]);

  //save button function
  const handleSaveButton = () => {
    //validate empty field
    if (title != '' && body != '') {
      //validate edit mode
      if (status == 'edit') {
        //edit reducer NotesReducer.js
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            key: route.params.key,
            title: title,
            body: body
          }
        });
      } else {
        //add reducer NotesReducer.js
        dispatch({
          type: 'ADD_NOTE',
          payload: {
            title: title,
            body: body
          }
        });
      }
      //back after save
      navigation.goBack();
    } else {
      alert('Empty Field');
    }
  }

  //close button function
  const handleCloseButton = () => {
    navigation.goBack();
  }

  return (
    <Container>
      <TitleInput
        value={title}
        onChangeText={text=>setTitle(text)} 
        placeholder="Note Title"
        placeholderTextColor="#FFFFFF"
        autoFocus={true}
      />
      <BodyInput 
          value={body}
          onChangeText={text=>setBody(text)}
          placeholder="Note Body"
          placeholderTextColor="#FFFFFF"
          multiline={true}
          textAlignVertical="top"
      />
    </Container>
  );
}
