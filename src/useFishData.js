import React from 'react';
import fishData from './fish-data.json';

export default function useFishData() {
  const [fishes, setFishes] = React.useState(fishData);
  const [bucket, setBucket] = React.useState([]);
  // fishToDisplay = fishToDisplay.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
  return {
    fishes,
    setFishes,
    bucket,
    setBucket,
  };
}
