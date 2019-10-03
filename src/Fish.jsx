import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import CatchContext from './CatchContext';

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
          opacity: 100;
        }
    }
`;

const FishInfo = styled.span`
    opacity: 0;
    transition: opacity 0.2s;
`;

const FishImage = styled.img`
  width: ${(props) => props.size};
  color: ${(props) => props.color};
`;

function generateFishImage(fish, size) {
  const { type, rating } = fish
  const imageSource = `${type ? type : 'fish'}-${rating}.png`;
  let fishImage;
  try {
    const images = require.context('./Media/fish images/', true);
    fishImage = images(`./${imageSource}`);
  } catch (e) {
    fishImage = null;
  }

  let imageSize;
  switch (size) {
    case 1:
      imageSize = '10rem';
      break;
    case 2:
      imageSize =  '8rem';
      break;
    case 3:
      imageSize =  '6rem';
      break;
    case 4:
      imageSize =  '4rem';
      break;
    case 5:
      imageSize =  '2rem';
      break;
    default:
      imageSize =  '1rem';
      break;
  }

  return <FishImage src={fishImage} size={imageSize}/>
}

function random(worst, best) {
  return Math.round(Math.random() * (+best - +worst) + +worst);
}

export default function Fish(props) {
  const { fish } = props;
  const { bucket, setBucket } = useContext(CatchContext);
  const size = random(fish.worst, fish.best);
  const fishImage = generateFishImage(fish, size);

  const addFishToBucket = () => {
    const newFish = {...fish, size}
    bucket.push(newFish);
    const newBucket = [...bucket];
    setBucket(newBucket);
  };

  return (
    <FishComponent subtitle={fish.subtitle} onClick={addFishToBucket}>
      <FishInfo>{fish.name}</FishInfo>
      {fishImage}
      {fish.subtitle && <FishInfo>{`"${fish.subtitle}"`}</FishInfo>}
    </FishComponent>
  );
}
