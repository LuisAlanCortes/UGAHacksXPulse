import React from "react";

const BottomNav = ({ onExplore, onAddEvent }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around p-4">
      <button onClick={onExplore} className="p-2 bg-blue-500 rounded">Explore</button>
      <button onClick={onAddEvent} className="p-2 bg-green-500 rounded">Add Event</button>
      <button className="p-2 bg-gray-700 rounded">Updates</button>
    </div>
  );
};

export default BottomNav;