import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Profile = ({ user, webAppInitData, fetchProfile }) => {
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    if (user?.profile_image) {
      setProfileImage(user.profile_image);
    }
    simulateFetchProfile(); // Simulate the profile fetching
  }, [user]);

  const simulateFetchProfile = () => {
    // Simulated profile data fetching
    setTimeout(() => {
      const simulatedUser = {
        username: "SimulatedUser",
        profile_image: "https://example.com/profile-image.jpg",
        level: 5,
        experience: 1500,
        nextLevelExp: 2000,
        stats: {
          played_games: 120,
          won_games: 85,
        },
        points: 35000,
      };

      //   fetchProfile(simulatedUser);
    }, 1000); // Simulate a 1-second delay
  };

  const handleUploadComplete = (imageUrl) => {
    setProfileImage(imageUrl);
  };

  const experiencePercentage = user
    ? (user.experience / user.nextLevelExp) * 100
    : 0;

  return (
    <div className="p-6 bg-custom-bg min-h-screen text-white">
      <motion.div
        className="bg-gray-900 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center mb-6">
          <img
            src={profileImage || "/user.png"}
            alt={user?.username || "Player"}
            className="w-24 h-24 rounded-full border-4 border-blue-600"
          />
          <div className="mt-6">
            {/* <ImageUpload
              webAppInitData={webAppInitData}
              onUploadComplete={handleUploadComplete}
            /> */}
          </div>
          <h1 className="text-3xl font-bold mt-4 text-blue-400">
            {user?.username || "Player"}
          </h1>
          <p className="text-blue-500 text-lg">Level {user?.level || 1}</p>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-4 mb-6">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${experiencePercentage}%` }}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-800 p-3 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-400">Played</h2>
            <p className="text-2xl text-blue-300">
              {user?.stats?.played_games || 0}
            </p>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-400">Won</h2>
            <p className="text-2xl text-blue-300">
              {user?.stats?.won_games || 0}
            </p>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-400">Points</h2>
            <p className="text-2xl text-blue-300">
              {user?.points?.toLocaleString() || 0}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
