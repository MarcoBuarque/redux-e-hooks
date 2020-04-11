import React, { useState, useEffect } from 'react'

import ItemPost from './ItemPost'

export default function ReactMemo() {
  const [postList, setPostList] = useState([])
  const [newPost, setNewPost] = useState('')
  const URI = 'https://jsonplaceholder.typicode.com/posts'

  async function fetchData() {
    try {
      const response = await fetch(URI)
      const data = await response.json()

      setPostList(data)
    } catch (error) {
      alert('Deu ruim', error)
    }
  } 

  useEffect(() => {
    fetchData(URI)
  }, [])

  return (
    <>
      <input onChange={e => setNewPost(e.target.value)} value={newPost}/> 
      {/* Toda vez que houver acrescimo ou decrescimo de de caracter no text, haverá rerender do 
      componente PostList. Logo, se não utilizarmos o memo('Component') no ItemPost, sempre haverá o rerender de todos os 
      items da lista de forma desnecessária, já que ela não foi modificada  */}
      <ul>
        {postList.map(item => <ItemPost key={item.id} post={item}/>)}
      </ul>
    </>
  )
}