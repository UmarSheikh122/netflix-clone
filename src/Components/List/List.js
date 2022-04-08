import React, { useRef, useState } from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../ListItem/ListItem'
import './list.scss'
const List = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false)
    const listRef = useRef();
    const handleArrow = direction => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x -50;
        console.log("distance", distance);
        if(direction === "left" && slideNumber > 0){
            console.log('left')
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${distance+230}px)`
        }if(direction === "right" && slideNumber<5){
            console.log('right')

            setSlideNumber(slideNumber+1)
            listRef.current.style.transform = `translateX(${-230+distance}px)`
        }
    }
  return (
    <div className="list">
        <span className="listTitle">Continue To Watch</span>
        <div className="wrapper">
            <ArrowBackIosNewOutlinedIcon style={{
                display: !isMoved && "none"
            }} className="sliderArrow left" onClick = {()=>handleArrow("left")}/>
            <div ref = {listRef} className="container">
                <ListItem index = {0} />
                <ListItem index = {1}/>
                <ListItem index = {2}/>
                <ListItem index = {3}/>
                <ListItem index = {4}/>
                <ListItem index = {5}/>
                <ListItem index = {6}/>
                <ListItem index = {7}/>
                <ListItem index = {8}/>
                <ListItem index = {9}/>
                <ListItem index = {10}/>
                <ListItem index = {11}/>
                <ListItem index = {12}/>

            </div>
            <ArrowForwardIosOutlinedIcon className="sliderArrow right" onClick = {()=>handleArrow("right")}/>
        </div>
    </div>
  )
}

export default List