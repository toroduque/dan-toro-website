import React, { useContext } from 'react'
import { Link } from "gatsby"
import Logo from '../Logo'
import { AnimationContext } from '../../contexts/animation-context'
import * as styled from './styled'

export default function Header () {
    const { setHovered } = useContext(AnimationContext)

    const menuItems = [
        'about',
        // 'portfolio',
        // 'blog',
        // 'contact'
    ]

    return (
        <styled.HeaderWrapper>
            <Link to="/">
                <styled.LogoWraper>
                    <Logo size={32}/>
                </styled.LogoWraper>
            </Link>
      
            <styled.MenuWrapper>
                {
                    menuItems.map(item => (
                        <Link key={item} to={`/${item}`}>
                            <styled.MenuItem onMouseEnter={() => setHovered(item)} onMouseLeave={() => setHovered('')}>
                               <span>{item}</span>
                            </styled.MenuItem>
                        </Link>
                    ))
                }
            </styled.MenuWrapper>
        </styled.HeaderWrapper>
    )
}