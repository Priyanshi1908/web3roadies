"use client";
import Leaderboard from '../../components/LeaderBoard';
import BottomBar from '../../components/BottomBar';
import { useState, useEffect, useContext } from 'react';
function LeaderBoard() {
  

  return (
    <>
 
      <Leaderboard/>
      <BottomBar />
    </>
  );
}

export default LeaderBoard;
