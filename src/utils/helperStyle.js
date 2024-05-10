const hoverBoxShadowStyle = (mode) => {
    return {boxShadow : mode === 'light' ?  'rgba(140, 152, 164, 0.1) 0px 12px 15px' : 'rgba(0, 0, 0, 0.1) 0px 12px 15px'}
}

const cardBorderColor = (mode) => {
    return {borderColor: mode === 'light' ? 'lightgray' : '#ffffff1f',}
}

/**
 * 
 * @param {'X' | 'Y' | 'Z'} axis - Translate axis.
 * @param {number} position Translate position by pixel.
 * @param {string} transitionDelay - Transition delay.
 * @param {'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'} transitionType - Transition Type.
 * @returns 
 */

const hoverCardTranslate = (axis, position, transitionDelay,transitionType) => {
    return {'&:hover': {transform: `translate${axis ?? 'Y'}(${position + 'px'})`}, transition: `${transitionDelay} all ${transitionType ?? 'linear'}`}
}


export {
    hoverBoxShadowStyle,
    cardBorderColor,
    hoverCardTranslate
}