import React from 'react';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Fish from './Fish';
import useFishData from './useFishData';
import boat from './Media/fishing-boat.jpg';
import hook from './Media/hook.png';
import trap from './Media/fishing-trap.png';
import net from './Media/net.jpg';
import CatchContext from './CatchContext';
import BucketContents from './Bucket';

const FishBowl = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: url(${trap}), auto;
`;

const Ocean = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  background-image: radial-gradient(circle at 20px -30px, transparent 40px, #4aadce 42px);
  background-size: 40px 100%;
  padding-top: 1rem;
  cursor: url(${hook}), auto;
  justify-content: center;

  span {
    color: white;
  }
`;

const FishingBoat = styled.img`
  max-width: 30rem;
  width: 100%;
  margin-bottom: -15px;
`;

const Air = styled.div`
  display: flex;
`;

const Bucket = styled.div`
  padding: 1rem;
  margin: auto;
  max-width: 40rem;
  height: 60%;
  top: 20%;
  position: relative;
  overflow-y: scroll;
  outline: none;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  background-image: url(${net});
  background-size: 100%;
  border-radius: 20px;
  border-style: ridge;
`;

function App() {
  const context = useFishData();
  const { fishes } = context;
  const fishToDisplay = [];
  fishes.forEach((fish) => {
    fishToDisplay.push(<Fish fish={fish} key={fish.id} />);
  });
  const [bucketOpen, setBucketOpen] = React.useState(false);

  return (
    <FishBowl>
      <CatchContext.Provider value={context}>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={bucketOpen}
          onClose={() => setBucketOpen(false)}
        >
          <Bucket>
            <BucketContents />
          </Bucket>
        </Modal>
        <Air>
          <FishingBoat src={boat} onClick={() => setBucketOpen(true)} />
        </Air>
        <Ocean>
          {fishToDisplay}
        </Ocean>
      </CatchContext.Provider>
    </FishBowl>
  );
}

export default App;
