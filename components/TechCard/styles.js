import styled from 'styled-components';

let first = '#14213D'
let second = '#14213D'
let third = '#14213D'
let fourth = '#14213D'

export const Content = styled.div`
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    overflow: scroll;
    @media (max-width: 1271px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
    @media (max-width: 768px) {
        display: flex;
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
    width: 332px;
    transition: .3s;
    & :hover {
        transform: scale(1.05)
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
`

export const TextCategory = styled.p`
    font-weight: bold;
    font-size: 2em;
    & ::after {
        content: '';
        display: block;
        width: 0;
        height: 4px;
        background: white;
        transition: width .1s;
    }
    & :hover::after {
        width: 100%;
        transition: width .3s;
    }
`

export const Techs = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #e5e5e5;   
    transition: .1s;
`

export const TextTechs = styled.p`
    margin: 11px;
    font-weight: 500;
    & ::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: black;
        transition: width .3s;
    }
    & :hover::after {
        width: 100%;
        transition: width .3s;
    }
`

export const SecondCategory = styled(Category)`
    background-color: ${second};
`

export const ThirdCategory = styled(Category)`
    background-color: ${third};
`

export const FourthCategory = styled(Category)`
    background-color: ${fourth};
`