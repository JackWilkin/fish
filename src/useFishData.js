import React from 'react';
import fishData from './fish-data.json';

export default function useFishData() {
  // const [fishes, setFishes] = React.useState(fishData);
  const [fishes, setFishes] = React.useState(fishData.sort((a, b) => (a.rating > b.rating) ? 1 : -1));
  const [bucket, setBucket] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const bucketSize = bucket.length;
      if (bucketSize > 0) {
      const latestFishInBucket = bucket[bucketSize - 1];
      const allLatestFishInBucket = bucket.filter(fish => fish.id == latestFishInBucket.id);
      const sumOfFishSizes = allLatestFishInBucket.map(fish => fish.size).reduce((a, b) => a + b, 0);
      const averageSize = sumOfFishSizes / allLatestFishInBucket.length;
      const temp = latestFishInBucket.rating;

      if (averageSize > temp || averageSize == 5) {
        const fishToUpdate = fishes.filter(fish => fish.id == latestFishInBucket.id)[0];
        fishToUpdate.best = latestFishInBucket.best + latestFishInBucket.best/latestFishInBucket.worst;
      }
    }
    })();
  }, [bucket]);


  return {
    fishes,
    setFishes,
    bucket,
    setBucket,
  };
}
