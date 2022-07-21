import { StepDirection } from '@game';

export function getRandomSteps(startPosition, settings) {
  return [[0, 1], [0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [1, 2], [0, 2], [1, 2]];
}

export function getRandomPosition(settings) {
  return [1, 1];
}

export function getStepDirection(from, to) {
  if (from[0] - to[0] > 0) return StepDirection.Left;
  if (from[0] - to[0] < 0) return StepDirection.Right;
  if (from[1] - to[1] > 0) return StepDirection.Up;
  if (from[1] - to[1] < 0) return StepDirection.Down;

  return null;
}

export function getDirectionsFromSteps(startPosition, steps) {
  const directions = [];
  let currentPosition = startPosition;
  for (let i = 0; i < steps.length; i++) {
    directions.push(getStepDirection(currentPosition, steps[i]));
    currentPosition = steps[i];
  }
  return directions;
}

export function arePositionsEqual(pos1, pos2) {
  return pos1?.[0] === pos2?.[0] && pos1?.[1] === pos2?.[1];
}
