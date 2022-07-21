import { StepDirection } from '@game';
import { random } from '@services';

export function getRandomSteps(startPosition, settings) {
  const steps = [];

  let currentPosition = startPosition;
  for (let i = 0; i < settings.stepCount; i++) {
    if (random.getNumber(2) === 0){
      steps.push([
        random.getSiblingNumber(currentPosition[0], 0, settings.rowCount - 1),
        currentPosition[1],
      ]);
    } else {
      steps.push([
        currentPosition[0],
        random.getSiblingNumber(currentPosition[1], 0, settings.columnCount - 1),
      ]);
    }
    currentPosition = steps[i];
  }

  return steps;
}

export function getRandomPosition(settings) {
  return [random.getNumber(settings.rowCount), random.getNumber(settings.columnCount)];
}

export function getStepDirection(from, to) {
  if (from[0] - to[0] > 0) return StepDirection.Up;
  if (from[0] - to[0] < 0) return StepDirection.Down;
  if (from[1] - to[1] > 0) return StepDirection.Left;
  if (from[1] - to[1] < 0) return StepDirection.Right;

  throw new Error(`Invalid params passed to getStepDirection function ${from}, ${to}`);
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
