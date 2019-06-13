import React from 'react';
import TopBar from './TopBar';
import ClaimCard from './ClaimCard';

const Home = (props) => {

  return (
    <div id="home">
      <TopBar />
      <ClaimCard
        sampleImage="accident.jpg"
        clientName="Bailey Tincher"
        type="Multi-Accident"
        timeSince="1h ago"
      />
      <ClaimCard
        sampleImage="accident2.jpeg"
        clientName="Jackie Oh"
        type="Multi-Accident"
        timeSince="3h ago"
      />
    </div>
  );
};

export default Home;
