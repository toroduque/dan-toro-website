import React from 'react'

export const AnimationContext = React.createContext({ 
    hovered: '',
    setHovered: (hovered : string) => { return hovered }
})