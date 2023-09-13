"use client"
import React from 'react'
import Countdown from 'react-countdown'

function CountDown() {
    const endingDate = new Date("2023-08-25")
  return (
    <Countdown className='font-bold text-5xl text-yellow-400' date={endingDate}/>
  )
}

export default CountDown