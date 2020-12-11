import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #333333;
`;

export const TitleInput = styled.TextInput`
    font-size: 18px;
    font-weight: bold;
    padding: 15px;
    color: #FFFFFF;
`;

export const BodyInput = styled.TextInput`
    flex:1;
    padding: 15px;
    font-size: 18px;
    color: #FFFFFF;
    background-color: #444444;
`;

export const SaveButton = styled.TouchableHighlight`
    margin-right: 15px;
`;

export const SaveButtonImage = styled.Image`
    width: 24px;
    height: 24px;
`;

export const CloseButton = styled.TouchableHighlight`
    margin-left: 15px;
`;

export const CloseButtonImage = styled.Image`
    width: 24px;
    height: 24px;
`;