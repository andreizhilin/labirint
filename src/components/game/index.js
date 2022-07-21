import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import JSConfetti from 'js-confetti';

import { Field, RestartGameButton, StepsRow } from '@components';
import { GameStatus } from '@game';
import { actions } from '@store';

import './index.scss';

export function Game() {
  const settings = useSelector(state => state.settings);
  const { status } = useSelector(state => state.game);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.startNewGame(settings));
  }, [settings]);

  useEffect(() => {
    if (status === GameStatus.Success) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  }, [status]);

  return (
    <div className={classNames('game', `game_${status}`)}>
      <RestartGameButton />
      <Field />
      <StepsRow />
    </div>
  )
}
