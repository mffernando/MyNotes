import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//styled
import {
  Container,
  Text,
  Button
} from './styles';

export default () => {

  const navigation = useNavigation();

  return (
    <Container>
      <Text>My Notes</Text>
      <Button title="Edit" onPress={()=>navigation.navigate('Edit')} />
    </Container>
  );
}
