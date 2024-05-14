import React from 'react'

const GoogleMap = ({src, width='100%', height ='100%'}) => {
  return (
        <iframe 
            src={src} 
            width={width} 
            height={height}
            style={{border: 0}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title='map'
        />
    )
}

export default GoogleMap