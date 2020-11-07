import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from "styled-components"
import Header from './Header'
import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
    :root {
        --white: #f1f1f1;
        --dark-grey: #383838;
    }

    body {
        margin: 0;
        font-family: 'Hind', Helvetica, Arial, sans-serif;
        background-color: var(--white);
    }

    a {
        text-decoration: none;
        color: black;
    }
`
const LayoutContentWrapper = styled.div`
    margin: 0 36px 36px 36px;
`

export default function Layout({ children }) {
    return (
        <Fragment>
            <GlobalStyle />
            <Header />
                <LayoutContentWrapper>
                    {children}
                </LayoutContentWrapper>
            <Footer />
        </Fragment>
    )
}

