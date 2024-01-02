import React from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import style from './Main.module.css';

export default function Main() {
  return (
    <>
      <div className={style.main}>
        <Header />
        <List></List>
        <Footer />
      </div>
    </>
  );
}
