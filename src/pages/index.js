import React, { useState } from 'react';
import SermonRecorder from './templates/recorder/recorder'
import Post from './templates/post/post'
import Hero from './templates/hero/hero'

export default function App() {

  const [recording, setRecordingState] = useState(null)

  function recordingState(props) {
    setRecordingState({ recording: props })
  }
  return (
    <>
      <Hero />
    </>
  )
}
