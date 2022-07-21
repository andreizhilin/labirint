import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '@store';

import './index.scss';

export function RestartGameButton() {
  const settings = useSelector(state => state.settings);

  const dispatch = useDispatch();
  const handleNewGameButtonClick = () => {
    dispatch(actions.startNewGame(settings));
  };

  return (
    <button className='restart-game-button' onClick={handleNewGameButtonClick}>Новая игра</button>
  )
}
