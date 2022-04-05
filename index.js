function distanceFromHqInBlocks(someValue) {
  const location = 42;
  const result = Math.abs(someValue - location);
  return result;
}
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}
function distanceTravelledInFeet(start, destination) {
  return Math.abs((start - destination) * 264);
}
function calculatesFarePrice(start, destination) {
  let someResult = distanceTravelledInFeet(start, destination);
  if (someResult <= 400) return 0;
  else if (someResult > 400 && someResult <= 2000)
    return (someResult - 400) * 0.02;
  else if (someResult > 2000 && someResult <= 2500) return 25;
  else if (someResult > 2500) return `cannot travel that far`;
}
