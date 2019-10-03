import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import CatchContext from './CatchContext';


// background: #030708;
//     opacity: 0.5;

const FishComponent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: min-content;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    :hover {
        span {
            ${(props) => (!props.subtitle ? ''
    : 'opacity: 100; '
  )};
        }
    }
`;

const FishInfo = styled.span`
    opacity: 0;
    transition: opacity 0.2s;
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

function random(worst, best) {
  return Math.round(Math.random() * (+best - +worst) + +worst);
}

function sustainabilitySize(number) {

  switch (number) {
    case 1:
      return '10x';
    case 2:
      return '8x';
    case 3:
      return '6x';
    case 4:
      return '4x';
    case 5:
      return '2x';
    default:
      return '1x';
  }
}

export default function Fish(props) {
  const { fish } = props;
  const { bucket, setBucket } = useContext(CatchContext);
  const size = random(fish.worst, fish.best);
  const iconSize = sustainabilitySize(size);

  const addFishToBucket = () => {
    const newFish = {...fish, size}
    bucket.push(newFish);
    const newBucket = [...bucket];
    setBucket(newBucket);
  };

  return (
    <FishComponent subtitle={fish.subtitle} onClick={addFishToBucket}>
      <span>{fish.name}</span>
      <FontAwesomeIcon
        icon={faFish}
        color={sustainabilityColor(fish.rating)}
        size={iconSize}
      />
      {fish.subtitle && <FishInfo>{`"${fish.subtitle}"`}</FishInfo>}
    </FishComponent>
  );
}
