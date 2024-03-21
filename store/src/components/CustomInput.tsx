import { View, Text, TextInput } from "react-native";
import styled from 'styled-components/native';

interface CustomInputBaseProps{
    width?: string,
}

export const Container = styled.View<CustomInputBaseProps>`
    width: ${(props) => props.width ? props.width : 'auto'};
    height: 70px;
    display: 'flex';
    flex-direction: 'column';
    gap: 8px;
`;

export const InputBase = styled.TextInput`
    width: 100%;
    height: 46px;
    background-color: #F0F0F0;
    border-radius: 5px;
    border-color: #EBEBEB;
    padding: 12px;
    font-size: 15px;
    border-width: 1px;
`;

interface CustomInputProps{
    label: string;
    typeInput?: boolean;
}

export const CustomInput: React.FC<CustomInputProps & CustomInputBaseProps> = ({label, typeInput, width, ...rest}) => {
    return (
      // criar função do olhinho
      // colocar o olhinho jumto ao typeInput
      <Container width={width}>
          <Text>{label}</Text>
          <InputBase secureTextEntry={typeInput} {...rest}></InputBase>
      </Container>
    )
}