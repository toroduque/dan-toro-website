import React from 'react'
import Text from '../Text'
import * as styled from './styled'

interface IProps {
    title: string,
    description: string
}

export default function SkillCard ({ title, description } : IProps) {
    return (
        <styled.SkillCardWrapper>
            <styled.TitleWrapper>
                <h4>{title}</h4>
            </styled.TitleWrapper>
            <Text>{description}</Text>
        </styled.SkillCardWrapper>
    )
}