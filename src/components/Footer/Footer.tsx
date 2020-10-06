import React from 'react'
import Icon, { GlyphsEnum } from '../Icon'
import * as styled from './styled'

export default function Footer() {
    return (
        <styled.FooterWrapper>
            <a href="mailto:toro.duque@gmail.com" target="_blank">
                <styled.FooterOption>
                    <Icon size={28} glyph={GlyphsEnum.mail}/>
                </styled.FooterOption>
            </a>
            <a href="https://github.com/toroduque" target="_blank">
                <styled.FooterOption>
                    <Icon size={28} glyph={GlyphsEnum.github}/>
                </styled.FooterOption>
            </a>
        </styled.FooterWrapper>
    )
}