import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ReferAndEarn = () => {
  const [referralCode, setReferralCode] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReferralCode(); // Simulate fetching the referral code
  }, []);

  const fetchReferralCode = async () => {
    try {
      setLoading(true);
      // Simulated API call using setTimeout
      setTimeout(() => {
        const response = { data: { referralCode: "GRUMPY123" } };
        setReferralCode(response.data.referralCode);
        setLoading(false);
      }, 1000); // Simulate 1 second delay
    } catch (error) {
      console.error("Error fetching referral code:", error);
      setLoading(false);
    }
  };

  const handleInvite = () => {
    if (referralCode && window.Telegram.WebApp) {
      const referralLink = `#`;
      window.Telegram.WebApp.openTelegramLink(referralLink);
    }
  };

  const handleTelegram = () => {
    if (referralCode && window.Telegram.WebApp) {
      const referralLink = `#`;
      window.Telegram.WebApp.openTelegramLink(referralLink);
    }
  };

  const handleX = () => {
    if (referralCode) {
      const referralLink = `#`;
      window.open(referralLink, "_blank");
    }
  };

  return (
    <div
      className="bg-custom-bg bg-cover bg-center min-h-screen p-6 mb-20"  >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="flex flex-col items-center w-full font-medium text-gray-800">
          {/* <img
            loading="lazy"
            src="/refer.png"
            alt="Refer"
            className="object-contain mb-4 w-40 h-40"
          /> */}
          <h1 className="text-3xl font-semibold text-teal-600 mb-6">
            Refer & Earn Credits
          </h1>

          <div className="w-full max-w-md">
            <button
              onClick={handleInvite}
              className="flex items-center justify-between px-6 py-3 w-full bg-teal-600 hover:bg-teal-500 text-white rounded-lg shadow-lg mb-4 transition duration-300"
            >
              <div className="flex items-center gap-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a817799e297c26d2a65dd1d2b1eea901cb0cfcc80bacfa17715ef2002e360ff?placeholderIfAbsent=true&apiKey=14e062e704a44f37915b7d6ad6b8a9ca"
                  alt="Invite Friends"
                  className="w-10 h-10"
                />
                <div className="flex flex-col">
                  <span className="text-lg">Invite Friends</span>
                  <span className="text-xs">Earn +100 credits</span>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aaa73c16b5a9cc2061ece12f5d2928a29b66b4eee226e566c9f61c8ed458bc7?placeholderIfAbsent=true&apiKey=14e062e704a44f37915b7d6ad6b8a9ca"
                alt="Arrow"
                className="w-6 h-6"
              />
            </button>

            <button
              onClick={handleTelegram}
              className="flex items-center justify-between px-6 py-3 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg mb-4 transition duration-300"
            >
              <div className="flex items-center gap-3">
                <img
                  loading="lazy"
                  src="/telegram.png"
                  alt="Telegram"
                  className="w-10 h-10"
                />
                <div className="flex flex-col">
                  <span className="text-sm">Join Telegram Community</span>
                  <span className="text-xs">Stay updated with us!</span>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aaa73c16b5a9cc2061ece12f5d2928a29b66b4eee226e566c9f61c8ed458bc7?placeholderIfAbsent=true&apiKey=14e062e704a44f37915b7d6ad6b8a9ca"
                alt="Arrow"
                className="w-6 h-6"
              />
            </button>

            <button
              onClick={handleX}
              className="flex items-center justify-between px-6 py-3 w-full bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-lg mb-4 transition duration-300"
            >
              <div className="flex items-center gap-3">
                <img
                  loading="lazy"
                  src="/x.jpg"
                  alt="X Twitter"
                  className="w-10 h-10"
                />
                <div className="flex flex-col">
                  <span className="text-sm">Follow Us on Twitter</span>
                  <span className="text-xs">Stay in the loop!</span>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aaa73c16b5a9cc2061ece12f5d2928a29b66b4eee226e566c9f61c8ed458bc7?placeholderIfAbsent=true&apiKey=14e062e704a44f37915b7d6ad6b8a9ca"
                alt="Arrow"
                className="w-6 h-6"
              />
            </button>
          </div>
        </section>

        <div className="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-center text-xl font-semibold mb-4 ">
            Your Referral Code
          </h2>
          <div className="flex justify-center items-center mb-6">
            <span className="bg-teal-100 text-teal-800 px-6 py-2 rounded-lg font-mono text-lg tracking-wide">
              {loading
                ? "Loading..."
                : referralCode || "No referral code available"}
            </span>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleInvite}
              className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-6 rounded-full transition duration-300"
              disabled={!referralCode || loading}
            >
              Invite Friends
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReferAndEarn;
