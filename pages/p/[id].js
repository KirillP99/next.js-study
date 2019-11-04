import React from 'react';
import MyLayout from '../../components/MyLayout/MyLayout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <MyLayout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <img src={props.show.image.medium} alt="picture" />
  </MyLayout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default Post;
