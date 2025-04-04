import React, { useState } from 'react';

function BookTable() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table booked for ${name} on ${date} at ${time} for ${guests} guests.`);
  };

  return (
    <div className="container mt-4">
      <h1>Book a Table</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input type="time" className="form-control" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Number of Guests</label>
          <input type="number" className="form-control" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" required />
        </div>
        <button type="submit" className="btn btn-primary">Book Table</button>
      </form>
    </div>
  );
}

export default BookTable;