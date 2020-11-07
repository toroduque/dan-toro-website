import styled from 'styled-components'

interface IProps {
    size?: TextSize
}

export enum TextSize {
    large = "26px",
    medium = "20px",
    small = "16px",
}

const Text = styled.p`
    font-size: ${({ size } : IProps) => size || TextSize.medium };
    margin: 0;
    line-height: 40px;

    @media(max-width: 768px) {
        line-height: 32px;
    };
`

export default Text