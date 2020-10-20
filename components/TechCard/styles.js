import styled from 'styled-components';

let first = '#161a1d'
let second = '#a4161a'
let third = '#d3d3d3'

export const Content = styled.div`
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    overflow: hidden;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Section = styled.section`
    display: flex;
    justify-content: center;
`

export const Card = styled.article`
    margin: 7%;
    box-shadow: 0px 14px 14px rgba(0, 0, 0, .25);
    color: ${({ theme }) => theme.colors.primary };
    background-color: #e5e5e5;
    width: 380px;
    transition: .3s;
    & :hover {
        transform: scale(1.1)
    }
`

export const Category = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-top: 7px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${first};
    color: ${({ theme }) => theme.colors.secondary };
    transition: .1s;
    & :hover {
        color: ${({ theme }) => theme.colors.yellow };
    }
`

export const TextCategory = styled.p`
    font-weight: bold;
    font-size: 2em;
`

export const Techs = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #e5e5e5;   
    transition: .1s;
    & :hover {
        color: ${({ theme }) => theme.colors.blue };
    } 
`

export const TextTechs = styled.p`
    margin: 11px;
    font-weight: 500;
`

export const SecondCategory = styled(Category)`
    background-color: ${second};
    & :hover {
        color: ${({ theme }) => theme.colors.primary };
    }
`

export const ThirdCategory = styled(Category)`
    background-color: #B88700;
    & :hover {
        color: ${({ theme }) => theme.colors.primary };
    }
`

export const FourthCategory = styled(Category)`
    background-color:${({ theme }) => theme.colors.blue };
    & :hover {
        color: ${({ theme }) => theme.colors.primary };
    }
`