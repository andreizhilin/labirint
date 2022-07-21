import { GameStatus } from '@game';
import { actions } from '@store';
import { gameService } from '@services';

const initialState = {
  status: GameStatus.Initialized,
  startPosition: null,
  steps: null,
  selectedCellPosition: null,
};

export const game = (state = initialState, action) => {
  switch (action.type) {
    case actions.GameActionNames.StartNewGame:
      const startPosition = gameService.getRandomPosition(action.settings);
      const steps = gameService.getRandomSteps(startPosition, action.settings);

      return {
        status: GameStatus.Started,
        startPosition,
        steps,
        selectedCellPosition: null,
      };

    case actions.GameActionNames.SelectCell:
      if (state.status !== GameStatus.Started) {
        return state;
      }

      const finalPosition = state.steps.at(-1);
      const isSuccess = gameService.arePositionsEqual(action.position, finalPosition);

      return {
        ...state,
        status: isSuccess ? GameStatus.Success : GameStatus.Failed,
        selectedCellPosition: action.position,
      };
    
    default:
      return state;
  }
};
