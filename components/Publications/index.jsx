import { View } from "react-native";
import { ImageProfile } from "../Header/styles";
import { Action, ActionsPublication, EmojiAction, HeaderPublication, LegendPublication, ProfileContent, PublicImage, Publication, TimeAgo, UserName } from "./style";
import { Feather } from '@expo/vector-icons';


export function Publications(props){
    function ImagePublication(){
        if(!props.imagePublication){
            return null
        } else {
        return (
            <PublicImage source={props.imagePublication}/>
        )
        }
    }
    return(
        <Publication>
            <HeaderPublication>
                 <ProfileContent>
                    <ImageProfile source={props.imageProfile}/>
                    <View>
                        <UserName>
                            {props.userName}
                        </UserName>
                        <TimeAgo>
                            {props.timeAgo}
                        </TimeAgo>
                    </View>
                </ProfileContent>
                <View>
                    <Feather name="more-horizontal" size={24} color="#6e6e6e" />
                </View>
            </HeaderPublication>
                <LegendPublication>
                    {props.legend}
                </LegendPublication>
                <ImagePublication/>
            <ActionsPublication>
                <Action>
                    ❤️ Curtir
                </Action>
                <Action>
                    💬 Comentar
                </Action>
                <Action>
                    💡 Compartilhar
                </Action>
            </ActionsPublication>
        </Publication>
    )
}