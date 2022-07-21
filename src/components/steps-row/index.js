import React from 'react';
import { useSelector } from 'react-redux';

import { images } from '@assets'; 
import { gameService } from '@services'; 

import './index.scss';

export function StepsRow({ position }) {
  const { startPosition, steps } = useSelector(state => state.game);

  if (!steps || !startPosition) return null;

  const directions = gameService.getDirectionsFromSteps(startPosition, steps);

  return (
    <div className='steps-row'>
      <div className='steps-mobile-row'>
        {directions.slice(0, steps.length / 2).map((direction, index) => (
          <div key={index} className='steps-mobile-row__step'>
            <img className='step__image' src={images[direction]} />
          </div>
        ))}
      </div>
      <div className='steps-mobile-row'>
        {directions.slice(steps.length / 2, steps.length).map((direction, index) => (
          <div key={index} className='steps-mobile-row__step'>
            <img className='step__image' src={images[direction]} />
          </div>
        ))}
      </div>
    </div>
  )
}