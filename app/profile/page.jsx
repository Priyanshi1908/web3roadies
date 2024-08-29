"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Profile from "../../components/Profile";
import BottomBar from "../../components/BottomBar";
function UserProfile() {
  
  return (
    <>
      
        <Profile/>
     
      <BottomBar />
    </>
  );
}

export default UserProfile;
