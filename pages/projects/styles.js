import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

export const Title = styled.h1`

`

export const TagsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
`

export const Tag = styled.h3`
    margin-left: .5rem;
    margin-right: .5rem;
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: .8rem;
    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const MarkdownContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: .5rem;
`

export const Content = styled.div`
    font-size: 1.3rem;
`

export const CardLink = styled.a`
    color: ${({ theme }) => theme.colors.secondary};
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
    background-color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    transition: .1s;
    width: auto;
`