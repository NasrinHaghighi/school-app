import React from 'react'
import { useParams } from 'react-router-dom';

import {arr} from '../../constant/MOCK_DATA'


function WorkDetaild() {
    const { tit } = useParams();
const selectedWork=arr.find((item)=>{
  return  item.tit ===tit
})

console.log(selectedWork)
  return (
    <>
    <div>{selectedWork.tit}</div>
    <div>
    {selectedWork.members.map((m)=>{
        return<div>{m}</div>
    })}
    </div>
    <div>{}</div>
    </>
  )
}

export default WorkDetaild