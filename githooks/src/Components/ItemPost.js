import React, { memo } from 'react'

function ItemPost({ post }) {
  console.log('ItemLIst')
  return (
    <li>
      <strong>{post.title}</strong>
      <p>User ID: {post.userId}</p>
      <p>ID: {post.id}</p> 
      {/* <strong>{item.body}</strong> */}
    </li>
  )
}

export default memo(ItemPost)