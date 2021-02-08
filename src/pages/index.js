import React, { useEffect, useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

export default function SermonRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [blobUrl, setBlobUrl] = useState('');
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        setIsBlocked({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        setIsBlocked({ isBlocked: true })
      },
    );
  });

  const start = () => {
    if (isBlocked === true) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          setIsRecording({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

    const stop = () => {
      Mp3Recorder
        .stop()
        .getMp3()
        .then(([buffer, blob]) => {
          const blobURL = URL.createObjectURL(blob)
          setBlobUrl(blobUrl)
          setIsRecording({ blobURL, isRecording: false });
        }).catch((e) => console.log(e));
    };

    return (
      <>
        <button onClick={start} disabled={isRecording}>
          Record
        </button>
        <button onClick={stop} disabled={!isRecording}>
            Stop
        </button>
        <audio controls="controls">
          <track default
            kind="captions"
            srcLang="en"
            src={blobUrl}
            />
        </audio>
      </>
    )
  }
