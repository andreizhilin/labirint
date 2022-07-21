export function getNumber(max) {
  return Math.floor(Math.random() * max);
}

export function getSiblingNumber(number, min, max) {
  if (number >= max) {
    if (number <= min) {
      throw new Error(`Invalid params passed to getSiblingNumber function ${number}, ${min}, ${max}`);
    }

    return number - 1;
  }

  if (number <= min) {
    return number + 1;
  }

  return getNumber(2) === 0 ? number - 1 : number + 1;
}
