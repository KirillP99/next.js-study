import React from 'react';
import MyLayout from '../components/MyLayout/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = ({ shows }) => (
  <MyLayout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map(show => (
        <li key={show.id}>
          <Link href={`/p/[id]`} as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </MyLayout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
