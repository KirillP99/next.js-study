import React from 'react';
import Header from '../Header';
import Styles from './MyLayout.Module.scss';

const Layout = ({ children }) => (
  <div className={Styles.Main}>
    <Header />
    { children }
  </div>
);

export default Layout;
