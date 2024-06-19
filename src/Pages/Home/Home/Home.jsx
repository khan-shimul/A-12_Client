import React from 'react';
import Banner from '../Banner/Banner';
import LatestReview from '../Latest Review/LatestReview';
import ShowAdvertise from '../../../Components/ShowAdvertise/ShowAdvertise';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <ShowAdvertise></ShowAdvertise>
            <LatestReview></LatestReview>
        </div>
    );
};

export default Home;