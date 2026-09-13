import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import './BackgroundAudio.css';

const VOLUME = 0.55;

const BackgroundAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = VOLUME;

    const start = () => {
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    const removeFirstGestureListeners = () => {
      window.removeEventListener('click', onFirstGesture);
      window.removeEventListener('keydown', onFirstGesture);
      window.removeEventListener('touchstart', onFirstGesture);
    };

    function onFirstGesture() {
      start();
      removeFirstGestureListeners();
    }

    // Try to autoplay; if the browser blocks it, start on the first user gesture.
    const playPromise = audio.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.then(() => setIsPlaying(true)).catch(() => {
        window.addEventListener('click', onFirstGesture);
        window.addEventListener('keydown', onFirstGesture);
        window.addEventListener('touchstart', onFirstGesture);
      });
    }

    return removeFirstGestureListeners;
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    const playPromise = audio.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/bgaudio.mp3" loop preload="auto" />
      <button
        type="button"
        className={`bg-audio-toggle ${isPlaying ? 'is-playing' : ''}`}
        onClick={toggle}
        aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
        aria-pressed={isPlaying}
        title={isPlaying ? 'Mute background music' : 'Play background music'}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  );
};

export default BackgroundAudio;
