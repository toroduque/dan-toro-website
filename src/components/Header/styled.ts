import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 100%;
    border-bottom: solid 2px black;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
`
export const LogoWraper = styled.div`
     padding-left: 36px;
`

export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const MenuItem = styled.div`
    border-left: solid 2px black;
    height: 4rem;
    width: 7.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.15rem;
    position: relative;
    border-bottom: solid 1px black;


    span {
        padding-bottom: 1px;
        border-bottom: solid 1px var(--white);
        transition: 0.2s;
    }

    &::before {
        content: '';
        position: absolute;
        border-bottom: dotted 2px var(--white);
        border-top: dotted 2px var(--white);
        width: 100%;
        height: 0;
        bottom: 0;
        transition: 0.2s;
    }

    &::after {
        content: '';
        position: absolute;
        border-bottom: dotted 2px var(--white);
        border-top: dotted 2px var(--white);
        width: 100%;
        height: 0;
        bottom: 0;
        transition: 0.2s;
    }

    &:hover {
        cursor: pointer;
        transition-timing-function: cubic-bezier(.17,.67,.83,.67);

        span {
            border-bottom: solid 1px black;
        }

        &::before {
            border-bottom: dotted 2px black;
            border-top: dotted 2px black;
            height: 2px;
            bottom: 1px;
        }

        &::after {
            border-bottom: dotted 2px black;
            border-top: dotted 2px black;
            height: 6px;
            bottom: 1px;
        }
    }
`