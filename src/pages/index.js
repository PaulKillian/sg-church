import React, { useState } from 'react';
import { Recorder } from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'
import DownloadLink from "react-download-link";

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
  const [blob, setBlob] = useState(null)

  function handleAudioStop(data) {
    setDetails({ audioDetails: data });
  }

  function handleAudioUpload(file) {
    setBlob({ blob: audioDetails.url })
  };

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
      <DownloadLink
        label="Download"
        filename={audioDetails.url}
        exportFile={() => audioDetails.url }
      />
      <Recorder
        record={true}
        title={"New recording"}
        audioURL={audioDetails.url}
        showUIAudio handleAudioStop={data => handleAudioStop(data)}
        handleAudioUpload={data => handleAudioUpload(data)}
        handleRest={() => handleRest()}
      />
    </>
  )
}
