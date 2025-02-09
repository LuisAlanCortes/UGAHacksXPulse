import React from "react";

const Sidebar = ({ events }) => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-4 overflow-y-auto z-50 shadow-2xl">
      <h2 className="text-xl font-bold">Nearby Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="p-2 border-b border-gray-700">
            <strong>{event.name}</strong>
            <p>{event.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
