import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { gameService } from '@services';
import { actions } from '@store';

import './index.scss';

export function Cell({ position }) {
  const settings = useSelector(state => state.settings);
  const { steps, startPosition, selectedCellPosition } = useSelector(state => state.game);

  const dispatch = useDispatch();
  const handleCellClick = () => {
    dispatch(actions.selectCell(position, settings));
  };

  return (
    <div
      className={classNames('cell', {
        'cell_start': gameService.arePositionsEqual(position, startPosition),
        'cell_final': gameService.arePositionsEqual(position, steps?.at(-1)),
        'cell_selected': gameService.arePositionsEqual(position, selectedCellPosition),
      })}
      onClick={handleCellClick}
    />
  )
}