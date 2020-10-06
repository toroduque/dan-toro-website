import styled from 'styled-components'

interface IProps {
    justifyContent?: string,
    alignItems?: string
}

const FlexContainer = styled.div`
    display: flex;
    justify-content: ${(props : IProps) => props.justifyContent || 'start'};
    align-items: ${(props: IProps) => props.alignItems || 'flex-start'};
`

export default FlexContainer