import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

export const Title = styled.h1`
    margin-top: 3.5rem;
    font-size: 3rem;
`

export const TagsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
    align-items: center;
`

export const Tag = styled.h3`
    margin-left: .5rem;
    margin-right: .5rem;
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

export const Body = styled.div`
    padding: .8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MarkdownContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: .5rem;
`

export const MarkdownImage = styled.img`
    max-width: 700px;
    max-height: 900px;
    width: auto;
    height: auto;
`

export const Content = styled.div`
    font-size: 1.3rem;
`

export const CardLink = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    margin-left: .5em;
    margin-right: .5em;
    padding: 3px 12px 3px 12px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    font-weight: 500;
    transition: .1s;
    width: auto;
    & :hover {
        color: #0E5F81;
    }
`



export const DemoLink = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    margin-left: .5em;
    margin-right: .5em;
    padding: 3px 12px 3px 12px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    font-weight: 500;
    transition: .1s;
    width: auto;
    & :hover {
        color: #0E5F81;
    }
`