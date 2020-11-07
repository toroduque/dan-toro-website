import styled from 'styled-components'

export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20%;
  margin-top: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export default {
    TwoColumns
}