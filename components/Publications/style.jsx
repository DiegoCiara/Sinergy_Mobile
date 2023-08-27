import { styled } from "styled-components";

export const Publication = styled.View`
    align-items: center;
    width: 100%;
    height: auto;
    margin: 15px 0 0 0 ;
    background-color: #ffff;
`;

export const HeaderPublication = styled.View`
    width: 100%;
    padding: 5px 15px;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ProfileContent = styled.View`
    width: 40%;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;

export const UserName = styled.Text`
    font-weight: 600;
`;

export const TimeAgo = styled.Text`
    font-weight: 300;
    color: #6e6e6e;
`;

export const LegendPublication = styled.Text`
    width: 100%;
    padding: 10px 15px;
`;

export const PublicImage = styled.Image`
    width: 100%;
    padding: 0;
    min-height: 300px;
    margin: 0;
    height: auto;
    max-height: 250px;
`;

export const ActionsPublication = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    align-items: center;
`;

export const Action = styled.Text`
    flex-direction: row;
    align-items: center;
`;

export const EmojiAction = styled.View`
    padding: 20px;
    background-color: #C2BBE0;
    border: 1px solid #6343EF;
`;