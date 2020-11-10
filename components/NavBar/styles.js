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
