"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistEntry {
  _id: string;
  name: string;
  email: string;
  joinedAt: string;
  notified: boolean;
}

const ADMIN_PASSCODE = process.env.ADMIN_CODE! || 741852;
console.log("Admin:",ADMIN_PASSCODE);
export default function AdminWaitlist() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, page: 1, pages: 1 });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    // Check if user was previously authenticated in this session
    const authStatus = sessionStorage.getItem("rasmlai_admin_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      fetchEntries();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchEntries = async (page = 1) => {
    try {
      const response = await fetch(`/api/waitlist?page=${page}&limit=50`);
      const data = await response.json();
      setEntries(data.data);
      setStats(data.pagination);
    } catch (error) {
      console.error("Error fetching entries:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (passcode === ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem("rasmlai_admin_auth", "true");
      setLoading(true);
      fetchEntries();
    } else {
      setIsShaking(true);
      setAttempts((prev) => prev + 1);
      setPasscode("");

      // Remove shake effect after animation
      setTimeout(() => setIsShaking(false), 500);

      // Lock out after 5 failed attempts (optional security measure)
      if (attempts >= 4) {
        alert(
          "Too many failed attempts. Please refresh the page to try again."
        );
        setPasscode("");
        setAttempts(0);
      }
    }
  };

  const handlePasscodeChange = (value: string) => {
    // Only allow numbers and limit to 6 digits
    const numericValue = value.replace(/\D/g, "").slice(0, 6);
    setPasscode(numericValue);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("rasmlai_admin_auth");
    setPasscode("");
    setAttempts(0);
  };

  // Passcode Entry Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span className="text-white text-2xl">🔐</span>
            </motion.div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              Admin Access
            </h1>
            <p className="text-gray-600">
              Enter the 6-digit passcode to access the dashboard
            </p>
          </div>

          {/* Passcode Form */}
          <form onSubmit={handlePasscodeSubmit} className="space-y-6">
            <motion.div
              animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <label
                htmlFor="passcode"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Passcode
              </label>
              <input
                type="password"
                id="passcode"
                value={passcode}
                onChange={(e) => handlePasscodeChange(e.target.value)}
                className={`w-full px-4 py-4 border-2 rounded-2xl focus:outline-none transition-colors duration-300 text-center text-2xl font-mono tracking-widest ${
                  isShaking
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 focus:border-red-500"
                }`}
                placeholder="• • • • • •"
                maxLength={6}
                autoComplete="off"
                autoFocus
              />
              {attempts > 0 && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2 text-center"
                >
                  Incorrect passcode. {5 - attempts} attempts remaining.
                </motion.p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              disabled={passcode.length !== 6}
              whileHover={{ scale: passcode.length === 6 ? 1.05 : 1 }}
              whileTap={{ scale: passcode.length === 6 ? 0.95 : 1 }}
              className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                passcode.length === 6
                  ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg hover:shadow-xl"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              {passcode.length === 6
                ? "Access Dashboard"
                : `Enter ${6 - passcode.length} more digits`}
            </motion.button>
          </form>

          {/* Visual Passcode Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  scale: passcode.length > index ? 1.2 : 1,
                  backgroundColor:
                    passcode.length > index ? "#EF4444" : "#E5E7EB",
                }}
                className="w-3 h-3 rounded-full bg-gray-300 transition-colors duration-200"
              />
            ))}
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-400 text-center mt-8">
            Rasmlai Admin Dashboard - Authorized Access Only
          </p>
        </motion.div>
      </div>
    );
  }

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-red-200 border-t-red-500 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 text-lg">Loading dashboard...</p>
        </motion.div>
      </div>
    );
  }

  // Main Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Logout */}
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent"
          >
            Waitlist Dashboard
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleLogout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-200"
          >
            Logout
          </motion.button>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl">
              <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
              <p className="text-blue-600 font-medium">Total Signups</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl">
              <p className="text-3xl font-bold text-green-600">
                {entries.filter((entry) => entry.notified).length}
              </p>
              <p className="text-green-600 font-medium">Notified Users</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl">
              <p className="text-3xl font-bold text-purple-600">
                {entries.filter((entry) => !entry.notified).length}
              </p>
              <p className="text-purple-600 font-medium">Pending</p>
            </div>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-lg overflow-hidden"
        >
          <div className="px-6 py-4 bg-gradient-to-r from-red-500 to-pink-500">
            <h3 className="text-xl font-semibold text-white">
              Waitlist Entries
            </h3>
          </div>

          {entries.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <p className="text-gray-500 text-lg">No waitlist entries yet</p>
              <p className="text-gray-400">
                Entries will appear here once users sign up
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Joined At
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {entries.map((entry, index) => (
                      <motion.tr
                        key={entry._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-t border-gray-100 hover:bg-gray-50 transition-colors duration-150"
                      >
                        <td className="px-6 py-4 text-gray-800 font-medium">
                          {entry.name}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {entry.email}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {new Date(entry.joinedAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                              entry.notified
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {entry.notified ? "Notified" : "Pending"}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8 text-gray-500"
        >
          <p>
            Rasmlai Admin Dashboard • Last updated:{" "}
            {new Date().toLocaleString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
