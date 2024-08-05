export default function fixClosestTime(array) {
  while (array.length < 3) {
    array.push(array[0]);
  }
  return array;
}
