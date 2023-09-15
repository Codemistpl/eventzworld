import React, { useEffect, useState } from 'react';

const FullDetails = ({ match }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:4113/create_post/getCreatePost/${match.params.id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchItem();
  }, [match.params.id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.author}</p>
      <p>{item.date}</p>
      {/* Render other details here */}
    </div>
  );
};

export default FullDetails;
