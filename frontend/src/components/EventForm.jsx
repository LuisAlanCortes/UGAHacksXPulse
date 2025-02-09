import { useState } from "react";

const EventForm = ({ lat, lng, onSubmit }) => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      name,
      detail,
      lat,
      lng,
    };

    // Call the onSubmit function passed as prop
    onSubmit(eventData);

    // Reset form
    setName("");
    setDetail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Event Detail"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        required
      />
      <div className="mt-2">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Event
        </button>
      </div>
    </form>
  );
};

export default EventForm;
