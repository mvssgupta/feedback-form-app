import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
    <div className="about">
        <h1>About this Project</h1>
        <p>This is a React Project which is created by M V S S GUPTA</p>
        <Link to="/">Back to HomePage</Link>
    </div>
    </Card>
  )
}

export default AboutPage