import React, { useContext } from 'react'
import { AnimationContext } from '../../contexts/animation-context'
import * as styled from './styled'

export default function MainAnimation () {
    const { hovered } = useContext(AnimationContext)

    return (
        <styled.HeroAnimation hovered={hovered}>
            <styled.Inner hovered={hovered}></styled.Inner>
        </styled.HeroAnimation>
        )
}