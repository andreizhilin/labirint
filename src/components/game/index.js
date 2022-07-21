import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { Field, RestartGameButton, StepsRow } from '@components';

import './index.scss';

export function Game() {
  const { status } = useSelector(state => state.game);

  return (
    <div className={classNames('game', `game_${status}`)}>
      <RestartGameButton />
      <Field />
      <StepsRow />
    </div>
  )
}
