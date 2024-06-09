// GithubUser.js
import React, { useState } from 'react';
import useGithubUser from './useGithubUser';

const GithubUser = () => {
  const [username, setUsername] = useState('');
  const { user, loading, error } = useGithubUser(username);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Enter GitHub username"
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data</p>}
      {user && (
        <div>
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
          <img src={user.avatar_url} alt={`${user.name}'s avatar`} width={100} />
        </div>
      )}
    </div>
  );
};

export default GithubUser;
