import React from 'react'
import { glyphs } from './glyphs'

export enum GlyphsEnum {
    mail = "mail",
    github = "github"
}

interface IProps {
    glyph: GlyphsEnum,
    size?: number,
    color?: string
}

export default function Icon ({ glyph, size, color } : IProps) {
    return (
        <svg width={size} height={size} fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            { glyphs[glyph] }
        </svg>
    )
}