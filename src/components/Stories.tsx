"use client";

import { useState, useEffect, useCallback } from "react";
import { stories, Story } from "@/data/stories";

function StoryViewer({
  story,
  onClose,
  onPrev,
  onNext,
}: {
  story: Story;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const slide = story.slides[currentSlide];
  const duration = slide.duration || 5000;

  useEffect(() => {
    setProgress(0);
    setCurrentSlide(0);
  }, [story.id]);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        if (currentSlide < story.slides.length - 1) {
          setCurrentSlide((s) => s + 1);
        } else {
          onNext();
        }
      }
    }, 50);
    return () => clearInterval(interval);
  }, [currentSlide, story.id, duration, onNext]);

  const handleClick = (e: React.MouseEvent) => {
    const x = e.clientX;
    const w = window.innerWidth;
    if (x < w / 3) {
      if (currentSlide > 0) setCurrentSlide((s) => s - 1);
      else onPrev();
    } else if (x > (w * 2) / 3) {
      if (currentSlide < story.slides.length - 1) setCurrentSlide((s) => s + 1);
      else onNext();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 z-[110] text-white/80 hover:text-white"
      >
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="absolute top-0 left-0 right-0 flex gap-1 p-3 pt-4 z-[105]">
        {story.slides.map((_, i) => (
          <div key={i} className="flex-1 h-[3px] bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-none"
              style={{
                width: i < currentSlide ? "100%" : i === currentSlide ? `${progress}%` : "0%",
              }}
            />
          </div>
        ))}
      </div>

      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6 pb-10 text-white z-[105]" onClick={(e) => e.stopPropagation()}>
        {slide.title && (
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{slide.title}</h3>
        )}
        {slide.subtitle && (
          <p className="text-sm sm:text-base text-white/80 mb-4">{slide.subtitle}</p>
        )}
        {slide.cta && slide.link && (
          <a
            href={slide.link}
            className="inline-block bg-[#FCD208] text-black font-bold text-sm px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {slide.cta}
          </a>
        )}
      </div>
    </div>
  );
}

export default function Stories() {
  const [activeStory, setActiveStory] = useState<number | null>(null);

  const goNext = useCallback(() => {
    if (activeStory === null) return;
    if (activeStory < stories.length - 1) setActiveStory(activeStory + 1);
    else setActiveStory(null);
  }, [activeStory]);

  const goPrev = useCallback(() => {
    if (activeStory === null) return;
    if (activeStory > 0) setActiveStory(activeStory - 1);
    else setActiveStory(null);
  }, [activeStory]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (activeStory === null) return;
      if (e.key === "Escape") setActiveStory(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeStory, goNext, goPrev]);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-2 sm:pb-3">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-hide">
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(story.id)}
              className="flex flex-col items-center gap-2 shrink-0 group"
            >
              <div className="w-[68px] h-[68px] sm:w-[80px] sm:h-[80px] rounded-full p-[3px] bg-gradient-to-tr from-[#FCD208] via-yellow-400 to-[#FCD208] group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full border-[3px] border-white overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-gray-700 max-w-[80px] truncate">
                {story.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {activeStory !== null && (
        <StoryViewer
          story={stories[activeStory]}
          onClose={() => setActiveStory(null)}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}
