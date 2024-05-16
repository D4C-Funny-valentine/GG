import React from 'react'
import { useStartUpThemeSetting } from '../features';


const BrandLogo = ({src, alt, className, maxWidth, objectFit = 'contain', ...props }) => {
  const { mode } = useStartUpThemeSetting();
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      loading='lazy'
      style={{maxWidth: maxWidth, width: '100%', height: '100%', objectFit: objectFit, filter : mode === 'light' ? 'brightness(1) invert(0)' : 'brightness(0) invert(1)'}}
      {...props}
    />
  )
}

export default BrandLogo