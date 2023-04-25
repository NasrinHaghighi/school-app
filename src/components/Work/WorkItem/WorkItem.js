import React from 'react'
import { Link } from 'react-router-dom'

function WorkItem({item}) {
  return (
    <div>
        <Link to={item.tit}>{item.tit}</Link>
    </div>
  )
}

export default WorkItem