import React, { useState } from 'react';
import { Recorder } from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'

export default function SermonRecorder() {
  const [audioDetails, setDetails] = useState({
    url: null,
    blob: null,
    chunks: null,
    duration: {
      h: null,
      m: null,
      s: null,
      }
  });

  function handleAudioStop(data) {
    setDetails({ audioDetails: data });
  }

  function handleAudioUpload(file) {
    console.log(file);
    // fetch("/addname")
    // .then
  }

  function handleRest(){
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: null,
        m: null,
        s: null,
      }
    }
    setDetails({ audioDetails: reset });
  }

  return (
    <>
      <form method="post" action="/addname">
        <label>Paul</label><br></br>
        <input type="text" name="firstName" placeholder="Enter first name..." required></input>
        <input type="text" name="lastName" placeholder="Enter last name..." required></input>
        <input type="submit" value="Add Name"></input>
      </form>
      <Recorder
      record={true}
      title={"New recording"}
      audioURL={audioDetails.url}
      showUIAudio handleAudioStop={data => handleAudioStop(data)}
      handleAudioUpload={data => handleAudioUpload(data)}
    handleRest={() => handleRest()} />
    </>
  )
}
