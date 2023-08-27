import { 
    Actions, 
    Header,
    HeaderContainer,
    IconContent,
    ImageProfile,
    InitialPublication,
    InputPublication,
    LogoContainer,
    LogoFont,
    } from "./styles";
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
                        <FontAwesome name="plus" size={20} color='#6e6e6e'/>
                    </IconContent>
                    <IconContent>
                        <FontAwesome name="search" size={20} color='#6e6e6e'/>
                    </IconContent>
                    <IconContent>
                        <FontAwesome name="bell" size={20} color='#6e6e6e'/>
                    </IconContent>
                </Actions>                
            </HeaderContainer>
            <InitialPublication>
                <ImageProfile source={require('./assets/profile.png')}/>
                <InputPublication
                    placeholder="Vamos compartilhar algo novo hoje..."
                    placeholderTextColor="black"/>
                </InitialPublication>

        </Header>
    )
}