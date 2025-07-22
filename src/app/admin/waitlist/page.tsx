"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistEntry {
  _id: string;
  name: string;
  email: string;
  joinedAt: string;
  notified: boolean;
  position?: number;
}

const ADMIN_PASSCODE = (process.env.ADMIN_CODE || "741852").toString();

export default function AdminWaitlist() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [filteredEntries, setFilteredEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, page: 1, pages: 1 });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

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

  useEffect(() => {
    // Filter entries based on search term
    if (searchTerm.trim() === "") {
      setFilteredEntries(entries);
    } else {
      const filtered = entries.filter(
        (entry) =>
          entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          entry.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEntries(filtered);
    }
  }, [searchTerm, entries]);

  const fetchEntries = async (page = 1) => {
    try {
      const response = await fetch(`/api/waitlist?page=${page}&limit=1000`); // Get all entries
      const data = await response.json();

      // Sort by joinedAt (oldest first) and add position numbers
      const sortedEntries = data.data
        .sort(
          (a: WaitlistEntry, b: WaitlistEntry) =>
            new Date(a.joinedAt).getTime() - new Date(b.joinedAt).getTime()
        )
        .map((entry: WaitlistEntry, index: number) => ({
          ...entry,
          position: index + 1,
        }));

      setEntries(sortedEntries);
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
    setSearchTerm("");
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  // Passcode Entry Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
            >
              <span className="text-white text-xl sm:text-2xl">🔐</span>
            </motion.div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              Admin Access
            </h1>
            <p className="text-sm sm:text-base text-gray-600 px-2">
              Enter the 6-digit passcode to access the dashboard
            </p>
          </div>

          {/* Passcode Form */}
          <form
            onSubmit={handlePasscodeSubmit}
            className="space-y-4 sm:space-y-6"
          >
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
                className={`w-full px-3 py-3 sm:px-4 sm:py-4 border-2 rounded-2xl focus:outline-none transition-colors duration-300 text-center text-xl sm:text-2xl font-mono tracking-widest ${
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
                  className="text-red-500 text-xs sm:text-sm mt-2 text-center"
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
              className={`w-full py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 ${
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
          <div className="flex justify-center space-x-2 mt-4 sm:mt-6">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  scale: passcode.length > index ? 1.2 : 1,
                  backgroundColor:
                    passcode.length > index ? "#EF4444" : "#E5E7EB",
                }}
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300 transition-colors duration-200"
              />
            ))}
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-400 text-center mt-6 sm:mt-8 px-2">
            Rasmlai Admin Dashboard - Authorized Access Only
          </p>
        </motion.div>
      </div>
    );
  }

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-red-200 border-t-red-500 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 text-base sm:text-lg">
            Loading dashboard...
          </p>
        </motion.div>
      </div>
    );
  }

  // Main Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Logout */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent"
          >
            Waitlist Dashboard
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleLogout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
          >
            Logout
          </motion.button>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8"
        >
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
            Statistics
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 sm:p-6 rounded-xl sm:rounded-2xl">
              <p className="text-xl sm:text-3xl font-bold text-blue-600">
                {stats.total}
              </p>
              <p className="text-blue-600 font-medium text-xs sm:text-sm">
                Total Signups
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 sm:p-6 rounded-xl sm:rounded-2xl">
              <p className="text-xl sm:text-3xl font-bold text-green-600">
                {entries.filter((entry) => entry.notified).length}
              </p>
              <p className="text-green-600 font-medium text-xs sm:text-sm">
                Notified Users
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 sm:p-6 rounded-xl sm:rounded-2xl">
              <p className="text-xl sm:text-3xl font-bold text-purple-600">
                {entries.filter((entry) => !entry.notified).length}
              </p>
              <p className="text-purple-600 font-medium text-xs sm:text-sm">
                Pending
              </p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 sm:p-6 rounded-xl sm:rounded-2xl">
              <p className="text-xl sm:text-3xl font-bold text-orange-600">
                {filteredEntries.length}
              </p>
              <p className="text-orange-600 font-medium text-xs sm:text-sm">
                {searchTerm ? "Search Results" : "Showing"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-red-500 transition-colors duration-300 text-sm sm:text-base"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
          {searchTerm && (
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Showing {filteredEntries.length} of {entries.length} entries
            </p>
          )}
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden"
        >
          <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-500">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Waitlist Entries
            </h3>
          </div>

          {filteredEntries.length === 0 ? (
            <div className="p-8 sm:p-12 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl">
                  {searchTerm ? "🔍" : "📝"}
                </span>
              </div>
              <p className="text-gray-500 text-base sm:text-lg mb-2">
                {searchTerm ? "No entries found" : "No waitlist entries yet"}
              </p>
              <p className="text-gray-400 text-sm sm:text-base px-4">
                {searchTerm
                  ? "Try searching with different terms"
                  : "Entries will appear here once users sign up"}
              </p>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        Position
                      </th>
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
                      {filteredEntries.map((entry, index) => (
                        <motion.tr
                          key={entry._id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-t border-gray-100 hover:bg-gray-50 transition-colors duration-150"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold">
                                #{entry.position}
                              </span>
                            </div>
                          </td>
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

              {/* Mobile Cards */}
              <div className="lg:hidden">
                <AnimatePresence>
                  {filteredEntries.map((entry, index) => (
                    <motion.div
                      key={entry._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-t border-gray-100 p-4 hover:bg-gray-50 transition-colors duration-150"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold">
                            #{entry.position}
                          </span>
                          <div>
                            <p className="text-gray-800 font-medium text-sm">
                              {entry.name}
                            </p>
                            <p className="text-gray-500 text-xs">
                              {entry.email}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                            entry.notified
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {entry.notified ? "Notified" : "Pending"}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs">
                        Joined:{" "}
                        {new Date(entry.joinedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </>
          )}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6 sm:mt-8 text-gray-500"
        >
          <p className="text-xs sm:text-sm px-4">
            Rasmlai Admin Dashboard • Last updated:{" "}
            <span className="hidden sm:inline">
              {new Date().toLocaleString()}
            </span>
            <span className="sm:hidden">{new Date().toLocaleDateString()}</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
