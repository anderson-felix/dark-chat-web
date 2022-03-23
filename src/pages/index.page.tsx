import React from 'react';
import { GetServerSideProps } from 'next';

const Home: React.FC = () => {
  return null;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  return { redirect: { destination: '/home', permanent: false } };
};
