import styled from 'styled-components'

export enum TitleSize {
    large = "58px",
    medium = "40px"
}

interface IProps {
    size: TitleSize
}

const Title = styled.h1`
    font-size: ${ ({ size } : IProps) => size || TitleSize.medium };

    @media(max-width: 768px) {
        line-height: 70px;
    };
`

export default Title