export const GameActionNames = {
  StartNewGame: 'START_NEW_GAME',
  SelectCell: 'SELECT_CELL',
}

export const startNewGame = (settings) => ({
  type: GameActionNames.StartNewGame,
  settings,
});

export const selectCell = (position, settings) => ({
  type: GameActionNames.SelectCell,
  position,
  settings,
});
