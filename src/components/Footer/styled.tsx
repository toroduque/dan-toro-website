import styled from 'styled-components'

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    border-top: solid 2px black;
    background-color: #f1f1f1;
    position: fixed;
    bottom: 0;
`

export const FooterOption = styled.div`
    display: flex;
    border-left: solid 2px black;
    width: 4.3rem;
    height: 3.5rem;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        border-bottom: dotted 2px #f1f1f1;
        border-top: dotted 2px #f1f1f1;
        width: 4.3rem;
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