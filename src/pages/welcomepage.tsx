import React from 'react';

interface WelcomePageProps {
  pageName: string;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ pageName }) => {
  return <h1>Welcome to {pageName}</h1>;
};

export default WelcomePage;
