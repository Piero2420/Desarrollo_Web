import React from 'react';
import Header from '@/layouts/Header';
import Aside from '@/layouts/Aside';
import Footer from '@/layouts/Footer';
import ReadPosts from '@/components/ReadPosts';

const Home = () => {
  return (
    <div className="container">
      <div className="container-header">
        <Header />
      </div>
      <div className="container-center">
        <div className="container-aside">
          <Aside />
        </div>
        <div className="container-main">
            <ReadPosts />
        </div>
      </div>
      <div className="container-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
