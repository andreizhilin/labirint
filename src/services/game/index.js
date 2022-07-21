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
