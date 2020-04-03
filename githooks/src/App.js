import React, { useState } from 'react';

// useState = valor default do state
// segundo parametro do array = this.setState
function App() {
 const [repos, setRepos] = useState([
  {id: 1, name: 'repo-test'},
  {id: 2, name: 'repo-test2'},
  {id: 3, name: 'repo-test3'},
])

  function handleRepositorie() {
    setRepos([...repos, {id: Math.random(), name: `repo-${Math.random()}`}])
  }
  return (
    <>
      <ul>
        {repos.map( item => (
            <li key={item.id}>{item.name}</li>
          ))}
      </ul>
      <button onClick={handleRepositorie}> Add Repo </button>
    </ >
  );
}

export default App;
