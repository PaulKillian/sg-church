import React, { useEffect, useState } from 'react';
import { Recorder } from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'
import DownloadLink from "react-download-link";
import './recorder.css'

export default function SermonRecorder(props) {
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

  function handleRest() {
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

  useEffect(() => {
    const myImgs = document.querySelectorAll('.animate-me');
    // const hidden = document.querySelector('.hidden');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          console.log('in the view');
          entry.target.classList.add('slide')
        } else {
          console.log('out of view');
          entry.target.classList.remove('slide')
        }
      });
    });

    myImgs.forEach(image => {
    observer.observe(image);
});
  });

  return (
    <>
      <div className="center animate-me">
        <iframe className={'iframe'} src="https://www.youtube.com/embed/Df0ShwUlwkg?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;enablejsapi=1"
          allowfullscreen="" id="yui_3_17_2_1_1613437144895_80" frameborder="0"></iframe>
      </div>
      <div className={'no-x-scroll center end w75'}>
        <div className={'animate-me w50'}>
        <DownloadLink
          label="Download"
          filename={audioDetails.url}
          exportFile={() => audioDetails.url }
        />
        <Recorder
          className={'animate-me'}
          record={true}
          title={"New recording"}
          audioURL={audioDetails.url}
          showUIAudio handleAudioStop={data => handleAudioStop(data)}
          handleAudioUpload={data => handleAudioUpload(data)}
          handleRest={() => handleRest()}
          />
        </div>
    </div>
    <p className={'animate-me end w100'}>
What is Lorem Ipsum?

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      </>
  )
}
