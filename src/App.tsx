import React, { useState, useRef } from 'react';
import { SAMPLE_SONGS } from './lib/constants';
import { TopBar } from './components/layout/TopBar';
import { ActionButtons } from './components/layout/ActionButtons';
import { LyricsEditor } from './components/editor/LyricsEditor';
import { StylesEditor } from './components/editor/StylesEditor';
import { SongMetadata } from './components/editor/SongMetadata';
import { FormattedTextareaRef } from './components/FormattedTextarea';
import { useSmartInsert } from './hooks/useSmartInsert';

export default function App() {
  const [lyrics, setLyrics] = useState('');
  const [styles, setStyles] = useState('');
  const [title, setTitle] = useState('');
  const [isLyricsExpanded, setIsLyricsExpanded] = useState(false);
  const [formattingMode, setFormattingMode] = useState<'none' | 'simple' | 'colored'>('colored');
  const [showInfo, setShowInfo] = useState(false);
  const [lastSongIndex, setLastSongIndex] = useState(-1);
  const lyricsRef = useRef<FormattedTextareaRef>(null);

  const handleSmartInsert = useSmartInsert(lyrics, setLyrics, lyricsRef);

  const handleGenerateSong = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * SAMPLE_SONGS.length);
    } while (nextIndex === lastSongIndex);
    
    setLastSongIndex(nextIndex);
    setLyrics(SAMPLE_SONGS[nextIndex]);
    
    // Reset cursor position to top when generating a new song
    if (lyricsRef.current) {
      lyricsRef.current.setCursorPos(0);
    }
  };

  return (
    <div className="h-screen bg-[#0a0a0a] text-zinc-100 flex justify-center font-sans overflow-hidden">
      <div className="w-full max-w-[440px] bg-[#0f0f0f] h-screen flex flex-col">
        <TopBar />

        <div className="flex-1 p-4 space-y-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <ActionButtons />

          <LyricsEditor 
            lyrics={lyrics}
            setLyrics={setLyrics}
            lyricsRef={lyricsRef}
            isExpanded={isLyricsExpanded}
            setIsExpanded={setIsLyricsExpanded}
            formattingMode={formattingMode}
            setFormattingMode={setFormattingMode}
            showInfo={showInfo}
            setShowInfo={setShowInfo}
            onGenerateSong={handleGenerateSong}
            onSmartInsert={handleSmartInsert}
          />

          <StylesEditor styles={styles} />

          <SongMetadata title={title} />
        </div>

        <div className="py-3 text-center bg-[#0f0f0f] z-10 shrink-0">
          <span className="text-xs text-zinc-500">
            Prototype developed by{' '}
            <a 
              href="https://www.linkedin.com/in/alexgiustizieri/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-zinc-200 hover:underline transition-colors"
            >
              Alex Giustizieri
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
