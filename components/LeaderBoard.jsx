import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setHardcodedData(); // Set the hardcoded data
  }, [currentPage]);

  // Hardcoded data function to simulate leaderboard data
  const setHardcodedData = () => {
    const hardcodedPlayers = [
      { first_name: "Alice", points: 5000, profile_image: "/alice.png" },
      { first_name: "Bob", points: 4500, profile_image: "/bob.png" },
      { first_name: "Charlie", points: 4000, profile_image: "/charlie.png" },
      { first_name: "David", points: 3500, profile_image: null },
      { first_name: "Eve", points: 3000, profile_image: null },
      { first_name: "Frank", points: 2500, profile_image: null },
      { first_name: "Grace", points: 2000, profile_image: null },
      { first_name: "Hank", points: 1500, profile_image: null },
      { first_name: "Ivy", points: 1000, profile_image: null },
      { first_name: "Jack", points: 500, profile_image: null },
      { first_name: "Kate", points: 400, profile_image: null },
      { first_name: "Leo", points: 300, profile_image: null },
      { first_name: "Mona", points: 200, profile_image: null },
      { first_name: "Nate", points: 100, profile_image: null },
      // Add more hardcoded players as needed
    ];
    setPlayers(hardcodedPlayers);
    setTotalPages(1); // Assume all data fits in one page
    setLoading(false);
  };

  const getInitials = (name) => {
    if (!name) return "P";
    const names = name.split(" ");
    const initials = names.map((n) => n[0].toUpperCase()).join("");
    return initials.length > 2 ? initials.slice(0, 2) : initials;
  };

  const getColorClass = (index) => {
    switch (index) {
      case 0:
        return "border-purple-500";
      case 1:
        return "border-blue-500";
      case 2:
        return "border-pink-500";
      default:
        return "border-transparent";
    }
  };

  const getTextColorClass = (index) => {
    switch (index) {
      case 0:
        return "text-purple-500";
      case 1:
        return "text-blue-500";
      case 2:
        return "text-pink-500";
      default:
        return "text-blue-300";
    }
  };

  const getCrownImage = (index) => {
    switch (index) {
      case 0:
        return "/1.png"; // 1st place crown
      case 1:
        return "/2.png"; // 2nd place crown
      case 2:
        return "/3.png"; // 3rd place crown
      default:
        return "/default-crown.png"; // Default crown
    }
  };

  const loadMorePlayers = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-4 bg-custom-bg bg-cover min-h-screen mb-16">
      <h1 className="text-center text-[#9331e8] text-4xl mb-6 font-bold">
        LEADERBOARD
      </h1>

      {/* First Div: Top 3 Players */}
      {players.length >= 3 && (
        <div className="flex justify-center items-end mb-8 mt-5 gap-8">
          {players.slice(0, 3).map((player, index) => (
            <motion.div
              key={player.points + index} // Using a unique key
              className={`flex flex-col items-center ${
                index === 0 ? "order-2" : index === 1 ? "order-1" : "order-3"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={getCrownImage(index)} alt="Crown" className="w-14" />
              <div
                className={`w-24 h-24 border-4 ${getColorClass(
                  index
                )} rounded-full`}
              >
                <div className="flex items-center justify-center w-full h-full bg-gray-800 rounded-full text-3xl font-bold text-white">
                  {getInitials(player.first_name)}
                </div>
              </div>

              <p className="text-white mt-2">{player.first_name || "Unknown"}</p>
              <p className={getTextColorClass(index)}>
                {player.points ? player.points.toLocaleString() : "N/A"}
              </p>
              <p className="text-gray-300">Rank: {index + 1}</p>{" "}
              {/* Display rank based on index */}
            </motion.div>
          ))}
        </div>
      )}

      {/* Second Div: Rest of the Players */}
      {players?.length > 3 && (
        <div className="mt-14">
          {players?.slice(3).map((player, index) => (
            <motion.div
              key={player.points + index + 3} // Using a unique key
              className="flex items-center my-4 bg-gradient-to-r from-purple-800 via-blue-900 to-black p-3 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className={`w-12 h-12 border-4 ${getColorClass(
                  index + 3
                )} rounded-full`}
              >
                {player.profile_image ? (
                  <img
                    src={player.profile_image}
                    alt={player.first_name || "Player"}
                    className="w-full h-full rounded-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/default-avatar.png";
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-gray-700 rounded-full text-lg font-bold text-white">
                    {getInitials(player.first_name)}
                  </div>
                )}
              </div>
              <div className="flex justify-between w-full ml-4">
                <p className="text-gray-200 font-bold">
                  {player.first_name || "Unknown"}
                </p>
                <p className={getTextColorClass(index + 3)}>
                  {player.points ? player.points.toLocaleString() : "N/A"}
                </p>
                <p className="text-blue-300">Rank: {index + 4}</p>{" "}
                {/* Adjust rank based on slice index */}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {players?.length >= 20 && currentPage < totalPages && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMorePlayers}
            className="px-4 py-2 bg-[#00FF9C] text-black rounded-lg hover:bg-[#00CC7A]"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
