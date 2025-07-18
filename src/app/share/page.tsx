"use client"
import { useEffect, useState } from "react";

export default function SharePage() {
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    if (typeof navigator.share === "function") {
      setCanShare(true);
    }
  }, []);

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title: "Join the Waitlist!",
        text: "I just joined this amazing waitlist, check it out!",
        url: window.location.href,
      });
    } catch (error) {
      console.error("Sharing failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">🎉 You&apos;re on the Waitlist!</h2>
        <p className="mb-6 text-gray-700">Want to spread the word?</p>

        {canShare ? (
          <button
            onClick={handleNativeShare}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            📤 Share This
          </button>
        ) : (
          <p className="text-sm text-gray-500">
            Sharing only works on supported mobile devices.
          </p>
        )}
      </div>
    </div>
  );
}
