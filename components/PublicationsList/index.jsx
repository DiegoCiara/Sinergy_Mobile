import { FlatList, ScrollView, Text } from "react-native";
import { ListPublication } from "./style";
import { Publication } from "../Publications/style";
import { Publications } from "../Publications";
import { Header } from "../Header";


export function PublicationsList(){
    const imageProfile = './assets/Diego.png';
    const Posts = [
        {
            name: 'Diego Ciara',
            imageProfile: require('./assets/Diego.png'),
            timeAgo: '3h',
            legend:'Hoje foi Home Office no setup novo!',
            imagePublication: require('./assets/imagepublication.jpg'),
        },
        {
            name: 'Larissa Alcantara',
            imageProfile: require('./assets/Larissa.jpg'),
            timeAgo: '2h',
            legend:'Alguém pode me dizer se amanhã é feriado?',
            imagePublication: null,
        },
        {
            name: 'Robert Downey Jr.',
            imageProfile: require('./assets/Robert.jpg'),
            timeAgo: '5h',
            legend:'Que cena memorável!!😍',
            imagePublication: require('./assets/ironman.jpg'),
        },
        {
            name: 'Elizabeth Olsen',
            imageProfile: require('./assets/Olsen.jpg'),
            timeAgo: '5h',
            legend:'Aprender JavaScript parece feitiçaria! 😂😂😂😂',
            imagePublication: null,
        },
        {
            name: 'Tobey Maguire',
            imageProfile: require('./assets/Maguire.jpg'),
            timeAgo: '5h',
            legend:'Meu jogo favorito',
            imagePublication: require('./assets/spiderman.jpg'),
        },
    ]
    return(
            <ListPublication 
            scrollEnabled
            >
            <Header/>
            {Posts.map((post, index) => (
                <Publications
                    key={index}
                    userName={post.name}
                    timeAgo={post.timeAgo}
                    legend={post.legend}
                    imageProfile={post.imageProfile}
                    imagePublication={post.imagePublication}
                />
            ))}
            </ListPublication>
        )
}
