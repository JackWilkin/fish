import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import CatchContext from './CatchContext';

const BucketContent = styled.div`
    
`;

function sustainabilityColor(number) {
  switch (number) {
    case 1:
      return 'green';
    case 1.5:
      return '#17fc03';
    case 2:
      return '#a1fc03';
    case 2.5:
      return '#cefc03';
    case 3:
      return '#fcf003';
    case 3.5:
      return '#fcca03';
    case 4:
      return '#fc8403';
    case 4.5:
      return '#fc5e03';
    case 5:
      return 'red';
    default:
      return '#bfbfbf';
  }
}

export default function Bucket() {
  const fishes = [];
  const { bucket } = useContext(CatchContext);
  for(let i = 0; i < bucket.length; i++) {
    const fish = bucket[i];
    fishes.push(<FontAwesomeIcon
      icon={faFish}
      size="2x"
      color={sustainabilityColor(fish.rating)}
      key={i}
    />);
  }

  return (
    <BucketContent>
      {fishes}
    </BucketContent>
  );
}
