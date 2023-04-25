import React from 'react'
import {WorkContainer, WorkItemStyle} from './style'
import { Link } from "react-router-dom";
import WorkItem from './WorkItem/WorkItem';
import {arr} from '../../constant/MOCK_DATA'


function Work() {
 
  return (
    <WorkContainer>
    {arr.map((item)=>{
        return <WorkItem key={item.id} item={item}/>
    })}

    </WorkContainer>
  )
}

export default Work