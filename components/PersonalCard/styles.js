import styled from 'styled-components';

export const Section = styled.section`

`

export const Article = styled.article`
    border: 2px solid #BFBFC4;
    background-color: ${({ theme }) => theme.colors.grey};
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 100px;
    padding: 7px;
    border-radius: 12px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin: 15px;
        padding: 10px;
    }
`

export const Img = styled.img`
    height: 300px;
    width: 300px;
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    object-fit: cover;
    border-radius: 50%;
    padding: 1px;
    border: 3px solid transparent;
    transition: .2s;
    & :hover {
        transform: scale(1.07)
    }
    @media (max-width: 768px) {
        height: 150px;
        width: 150px;
        margin: 0 auto;
    }
`

export const ImgCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 300px;
    width: 300px;
    transition: .2s;
    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    & :hover {
        transform: scale(1.2);
        background: linear-gradient(70deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    }
    @media (max-width: 768px) {
        height: 150px;
        width: 150px;
        margin: 0 auto;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

export const LinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    `

export const CardLink = styled.a`
    color: ${({ theme }) => theme.colors.blue};
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;
    padding: 3px 12px 3px 12px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    font-weight: 500;
    transition: .2s;
`

export const Text = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    padding-left: 0.8em;
`

export const Name = styled(Text)`
    font-size: 2.5em;
    padding-left: 0.4em;
`
