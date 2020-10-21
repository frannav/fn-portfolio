import styled from 'styled-components';

export const FooterStyled = styled.footer`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 10em;
    margin-top: 15%;
    @media (max-width: 768px) {
        margin-top: 10%;
    }
`

export const CardLink = styled.a`
    color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;
    margin-left: .5em;
    margin-right: .5em;
    padding: 3px 12px 3px 12px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    transition: .1s;
`