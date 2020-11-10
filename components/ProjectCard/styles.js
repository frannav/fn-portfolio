import styled from 'styled-components';


export const Article = styled.article`
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 14px 14px rgba(0, 0, 0, .25);
    margin-top: 3%;
    margin-bottom: 3%;
    width: 550px;
    border: 3px solid transparent;
    display: flex;
    flex-direction: row;
    border-radius: 2%;
    transition: .2s;
    /* max-height: 150px; */
    & :hover {
        transform: scale(1.01);
    }
    @media (max-width: 375px) {
        width: 350px;
    }
    @media (min-width: 1140px) {
        width: 750px;
    }
`

export const ImgWrapper = styled.div`
`

export const Img = styled.img`
    border-radius: 05%;
    width: 150px;
    height: auto;
    /* object-fit: cover; */
`

export const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 1%;

`

export const TitleLink = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    cursor:pointer;
    & :hover {
        color: ${({ theme }) => theme.colors.blue};
    }
`

export const TitleCard = styled.h3`
`

export const TagsCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const TagsText = styled.h4`
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 1.5em;
    padding-left: 5px;
    padding-right: 5px;
    font-size: .9em;
`
