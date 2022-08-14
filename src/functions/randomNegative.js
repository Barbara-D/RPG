export function randomNegative(number) {
  if (Math.random() > 0.5) {
    return number;
  } else return -number;
}
