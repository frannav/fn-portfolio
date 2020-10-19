import styled from 'styled-components';

export const Navigation = styled.nav`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 10em;
`

export const Logo = styled.img`
    height: 200px;
    width: 200px;
`

export const MenuLink = styled.a`
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    margin-right: 5%;
    font-size: 1.2em;
    font-weight: 500;
`