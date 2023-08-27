import { styled } from "styled-components";

export const Head = styled.View`
    height: 150px;
    padding-top: 20px ;
    padding-bottom: 10px;
    width: 100%;
    align-items: center;
    background-color: #fbfbfb;
    justify-content: space-around;
`;
export const HeaderContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Actions =styled(HeaderContainer)`
    width: auto;
    margin: 0 15px;
    gap: 15px;
    justify-content: center;
`;

export const LogoContainer = styled(HeaderContainer)`
    width: 40%;
    align-items: center;
    justify-content: center;
`; 

export const LogoFont = styled.Text`
    font-weight: bold;
    font-size: 35px;
    color: #6343EF;
`;

export const IconContent = styled.View`
    height: 40px;
    width: 40px;
    align-items: center;
    justify-content:center;
    border-radius: 50%;
    color: #6e6e6e !important;
    background-color: #d9d9d9;
`;

export const InitialPublication = styled(HeaderContainer)`
    justify-content: center;
`;

export const ImageProfile = styled.Image`
    width: 45px;
    height: 45px;
    border-radius: 50%;
`;

export const InputPublication = styled.TextInput`
    padding: 10px;
    width: 80%;
`;