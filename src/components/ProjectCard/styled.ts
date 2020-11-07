import styled from 'styled-components'

export const LinkButton = styled.a`
    background-color: black;
    color: var(--white);
    padding: 0.4rem 1rem;
    transition: 0.4s;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 3px;
    text-align: center;

    &:hover {
      background-color: var(--dark-grey);  
      transition: .2s;
    }
`