import React from 'react'
import {Route, Link, Routes, useLocation} from 'react-router-dom'; 
import WorkDetaild from '../components/WorkDetails/WorkDetaild';



function WorkInfo() {
    const location = useLocation();
    //console.log(location)
  return (
    <div>{location}</div>
  )
}

export default WorkInfo