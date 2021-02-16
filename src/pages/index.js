import React, { useState } from 'react';
import SermonRecorder from './templates/recorder/recorder'

export default function App() {

  const [recording, setRecordingState] = useState(null)

  function recordingState(props) {
    setRecordingState({ recording: props })
  }
  return (
    <SermonRecorder record={ recording } />
  )
}
