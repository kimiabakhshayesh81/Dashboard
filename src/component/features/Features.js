import React from 'react'
import'./Features.css'

export default function Features(props) {
  return (
    <div className='feature'>
        <div className='featureItem'>
            <span className='featureTitle'>{props.title}</span>
            <div className='featureContainer'>
                <span className='featureMony'>{props.money}</span>
                <span className='featureRate'>
                    {props.rate} {props.icon}
                </span>
            </div>
            <span className='featureSub'>{props.sub}</span>
        </div>

        
      
    </div>
  )
}
