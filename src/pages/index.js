import React, { useState } from 'react';
import SermonRecorder from './templates/recorder/recorder'
import Post from './templates/post/post'

export default function App() {

  const [recording, setRecordingState] = useState(null)

  function recordingState(props) {
    setRecordingState({ recording: props })
  }
  return (
    <>
      <SermonRecorder record={recording} />
      <Post />
    </>
  )
}
