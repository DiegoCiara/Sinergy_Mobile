import { Text, TextInput, View } from "react-native";
import { Actions, Header, HeaderContainer, IconContent, ImageProfile, InitialPublication, InputPublication, LogoContainer, LogoFont, NavContainer } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



export function NavBar(){
    return(
        <Header>
            <HeaderContainer>
                <LogoContainer>
                    <LogoFont>Sinergy</LogoFont>
                </LogoContainer>
                <Actions>
                    <IconContent>
                        <FontAwesome name="plus" size={20}/>
                    </IconContent>
                    <IconContent>
                        <FontAwesome name="search" size={20}/>
                    </IconContent>
                    <IconContent>
                        <FontAwesome name="bell" size={20} color="black" />
                    </IconContent>
                </Actions>                
            </HeaderContainer>
            <InitialPublication>
                <ImageProfile source={require('./assets/profile.png')}/>
                <InputPublication
                    placeholder="Vamos compartilhar algo hoje..."/>
            </InitialPublication>

        </Header>
    )
}