import React from "react";


const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      

      {/* Hero Section */}
      <header className="text-center py-20">
        <h2 className="text-5xl font-bold">
          Compete. Code. <span className="text-purple-400">Conquer.</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Join real-time coding battles, solve challenges, and climb the global rankings.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-500">
            Start Competing
          </button>
          <button className="bg-gray-700 px-6 py-2 rounded-lg hover:bg-gray-600">
            Watch Live Battles
          </button>
        </div>
      </header>

      {/* Active Rooms */}
      <section className="px-10">
        <h3 className="text-2xl font-bold">Active Rooms</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {[1, 2, 3].map((room) => (
            <div key={room} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold">Algo Clash</h4>
              <p className="text-gray-400">Dynamic Programming</p>
              <p className="text-gray-400">3/6 Players</p>
              <p className="text-gray-400">45:00</p>
              <button className="bg-purple-600 mt-4 px-4 py-2 w-full rounded-lg hover:bg-purple-500">
                Join Room
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose CodeClash? */}
      <section className="text-center py-16">
        <h3 className="text-2xl font-bold">Why Choose CodeClash?</h3>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <div className="flex flex-col items-center">
            <span className="text-yellow-400 text-4xl">⚡</span>
            <h4 className="text-lg font-bold mt-2">Real-Time Battles</h4>
            <p className="text-gray-400">Compete with players globally.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-blue-400 text-4xl">🏆</span>
            <h4 className="text-lg font-bold mt-2">Global Rankings</h4>
            <p className="text-gray-400">Climb the leaderboard.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-purple-400 text-4xl">👥</span>
            <h4 className="text-lg font-bold mt-2">Custom Rooms</h4>
            <p className="text-gray-400">Create private battles.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gray-800 py-16">
        <h3 className="text-2xl font-bold">Ready to Test Your Skills?</h3>
        <p className="text-gray-400 mt-2">Join thousands of developers in real-time coding challenges.</p>
        <button className="bg-purple-600 mt-6 px-6 py-2 rounded-lg hover:bg-purple-500">
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6">
        <p className="text-gray-400">&copy; 2025 CodeClash. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
