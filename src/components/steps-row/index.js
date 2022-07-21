import React from 'react';
import { useSelector } from 'react-redux';

import { gameService } from '@services'; 

import './index.scss';

export function StepsRow({ position }) {
  const { startPosition, steps } = useSelector(state => state.game);

  if (!steps || !startPosition) return null;

  const directions = gameService.getDirectionsFromSteps(startPosition, steps);

  return (
    <div className='steps-row'>
      {directions.map((direction) => (
        <div className='steps-row__step'>{direction}</div>
      ))}
    </div>
  )
}