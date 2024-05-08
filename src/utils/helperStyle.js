const hoverBoxShadowStyle = (mode) => {
    return {boxShadow : mode === 'light' ?  'rgba(140, 152, 164, 0.1) 0px 12px 15px' : 'rgba(0, 0, 0, 0.1) 0px 12px 15px'}
}

const cardBorderColor = (mode) => {
    return {borderColor: mode === 'light' ? 'lightgray' : '#ffffff1f',}
}

export {
    hoverBoxShadowStyle,
    cardBorderColor
}