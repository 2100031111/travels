import React, { useState } from 'react';

// Time zone data
const timeZones = {
  Africa: ['Africa/Cairo', 'Africa/Lagos', 'Africa/Johannesburg', 'Africa/Nairobi'],
  America: ['America/New_York', 'America/Los_Angeles', 'America/Sao_Paulo', 'America/Chicago'],
  Asia: ['Asia/Kolkata', 'Asia/Dubai'],
  Europe: ['Europe/London', 'Europe/Berlin', 'Europe/Moscow', 'Europe/Paris'],
  Australia: ['Australia/Sydney', 'Australia/Melbourne', 'Australia/Perth'],
  Antarctica: ['Antarctica/Palmer', 'Antarctica/Rothera', 'Antarctica/Syowa', 'Antarctica/Troll'],
};

// Beach data
const beachData = [
  {
    name: 'Bondi Beach',
    location: 'Sydney, Australia',
    description: 'A famous beach for surfing and sunbathing.',
    image: 'https://via.placeholder.com/150?text=Bondi+Beach',
  },
  {
    name: 'Waikiki Beach',
    location: 'Honolulu, Hawaii',
    description: 'Known for its clear waters and scenic views.',
    image: 'https://via.placeholder.com/150?text=Waikiki+Beach',
  },
  {
    name: 'Copacabana Beach',
    location: 'Rio de Janeiro, Brazil',
    description: 'Famous for its vibrant nightlife and beautiful sunset.',
    image: 'https://via.placeholder.com/150?text=Copacabana+Beach',
  },
];

// Temple data
const templeData = [
  {
    name: 'Golden Temple',
    location: 'Amritsar, India',
    description: 'A sacred Sikh temple and a symbol of equality.',
    image: 'https://via.placeholder.com/150?text=Golden+Temple',
  },
  {
    name: 'Meenakshi Temple',
    location: 'Madurai, India',
    description: 'A historic temple known for its intricate architecture.',
    image: 'https://via.placeholder.com/150?text=Meenakshi+Temple',
  },
];

// Function to get the current time for a given time zone
function getTimeByTimeZone(timeZone) {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timeZone,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });
  return formatter.format(now);
}

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [resultData, setResultData] = useState(null);
  const [error, setError] = useState(null);

  // Handle search input changes
  const handleSearch = () => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    // Check if the search term matches a time zone
    const foundTimeZone = Object.values(timeZones)
      .flat()
      .find(zone => zone.toLowerCase().includes(normalizedSearchTerm));

    if (foundTimeZone) {
      setResultData({
        type: 'timeZone',
        zone: foundTimeZone,
        time: getTimeByTimeZone(foundTimeZone),
      });
      setError(null);
      return;
    }

    // Check if the search term matches beaches
    const foundBeaches = beachData.filter(beach =>
      beach.name.toLowerCase().includes(normalizedSearchTerm) ||
      beach.location.toLowerCase().includes(normalizedSearchTerm)
    );

    if (foundBeaches.length > 0) {
      setResultData({
        type: 'beach',
        beaches: foundBeaches,
      });
      setError(null);
      return;
    }

    // Check if the search term matches temples
    const foundTemples = templeData.filter(temple =>
      temple.name.toLowerCase().includes(normalizedSearchTerm) ||
      temple.location.toLowerCase().includes(normalizedSearchTerm)
    );

    if (foundTemples.length > 0) {
      setResultData({
        type: 'temple',
        temples: foundTemples,
      });
      setError(null);
      return;
    }

    // No matches found
    setError('No matching results found. Please try again.');
    setResultData(null);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>World Time Zones, Beaches, and Temples</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a time zone, beach, or temple..."
       
      />
      <br />
      <button
        onClick={handleSearch}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Search
      </button>

      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

      {resultData?.type === 'timeZone' && (
        <div style={{ marginTop: '20px' }}>
          <h2>Time in {resultData.zone}:</h2>
          <p>{resultData.time}</p>
        </div>
      )}

      {resultData?.type === 'beach' && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
          {resultData.beaches.map((beach, index) => (
            <div key={index} style={{ width: '200px', margin: '10px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
              <img src={beach.image} alt={beach.name} style={{ width: '100%', borderRadius: '5px' }} />
              <h3>{beach.name}</h3>
              <p><strong>Location:</strong> {beach.location}</p>
              <p>{beach.description}</p>
            </div>
          ))}
        </div>
      )}

      {resultData?.type === 'temple' && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
          {resultData.temples.map((temple, index) => (
            <div key={index} style={{ width: '200px', margin: '10px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
              <img src={temple.image} alt={temple.name} style={{ width: '100%', borderRadius: '5px' }} />
              <h3>{temple.name}</h3>
              <p><strong>Location:</strong> {temple.location}</p>
              <p>{temple.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
