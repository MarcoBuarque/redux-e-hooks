import React, { useState, useEffect } from 'react';
import { FaCheckSquare, FaSquare } from 'react-icons/fa'

// useState = valor default do state
// segundo parametro do array = this.setState
// useEffect = monitora o ciclo de vida dos componentes e faz a determinada ação de acordo com alterações que esses componentes sofrem
function App() {
 const [repos, setRepos] = useState([
  {id: 1, name: 'repo-test'},
  {id: 2, name: 'repo-test2'},
  {id: 3, name: 'repo-test3'},
]);

useEffect(async () => {
  const data = await fetchData();
  setRepos(data);
}, []);

  function handleRepositorie() {
    setRepos([...repos, {id: Math.random(), name: `repo-${Math.random()}`}])
  };
  
  async function fetchData() {
    const response = await fetch('https://api.github.com/users/diego3g/repos');
    const data = await response.json();
    
    return data;
  }

  function handleFavorite(id, check) {
    const newRepos = repos.map(repositorie => repositorie.id === id ? {...repositorie, favorite: check} : {...repositorie});
    
    setRepos(newRepos);
  }


  return (
    <>
      <ul>
        {repos.map(item => (
            <li key={item.id}>
              {!!item.favorite ? (
                <FaCheckSquare></FaCheckSquare>
               ) :
               (
                 <FaSquare></FaSquare>
               ) }
              {item.name}
              {!item.favorite? (
                <button onClick={() => handleFavorite(item.id, true)}> AddFavorite </button>
              ) : 
              (
                <button onClick={() => handleFavorite(item.id, false)}> RemoveFavorite </button>
              )}
            </li>
            ))}
      </ul>
      <button onClick={handleRepositorie}> Add Repo </button>
    </ >
  );
}

export default App;
