'use client'

import { useId, useRef, useState, useEffect } from "react"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import PicturesSlider from "../PicturesSlider/page"

export default function Component() {
  const id = useId()
  const [selectedQuality, setSelectedQuality] = useState("1")
  const audioRef = useRef(null)

  useEffect(() => {
    if (selectedQuality === "5" && audioRef.current) {
      const audio = audioRef.current
  
      const startFrom = 10
      const playDuration = 20
      const fadeDuration = 3
  
      audio.currentTime = startFrom
      audio.volume = 0
  
      audio.play().then(() => {
        // Fade-in
        const fadeIn = setInterval(() => {
          if (audio.volume < 1) {
            audio.volume = Math.min(audio.volume + 0.05, 1)
          } else {
            clearInterval(fadeIn)
          }
        }, 200)
  
        // Fade-out
        const fadeOutTimer = setTimeout(() => {
          const fadeOut = setInterval(() => {
            if (audio.volume > 0) {
              audio.volume = Math.max(audio.volume - 0.05, 0)
            } else {
              clearInterval(fadeOut)
              audio.pause()
            }
          }, 200)
        }, (playDuration - fadeDuration) * 1000)
  
        // Очистка, если компонент перерисуется
        return () => {
          clearInterval(fadeIn)
          clearTimeout(fadeOutTimer)
          audio.pause()
        }
  
      }).catch((err) => {
        console.warn("Плей не удался:", err)
      })
    }
  }, [selectedQuality])
  

  return (
    <div className="h-screen flex justify-center pt-[10vh]">
      <div className="*:not-first:mt-2">
        <Label htmlFor={id}>
          <div className="text-center">
            <h1 className="text-sans uppercase mt-2">Choose the quality</h1>
            <p className="text-gray-500">from 360p to 1080p</p>
          </div>
        </Label>

        <Select defaultValue="1" required onValueChange={setSelectedQuality}>
          <SelectTrigger id={id}>
            <SelectValue placeholder="Select quality" />
          </SelectTrigger>
          <SelectContent className="w-46">
            <SelectItem value="1">---</SelectItem>
            <SelectItem value="2">360p</SelectItem>
            <SelectItem value="3">480p</SelectItem>
            <SelectItem value="4">720p</SelectItem>
            <SelectItem value="5">1080p</SelectItem>
          </SelectContent>
        </Select>

        <div className="mt-4 flex flex-col justify-center items-center">
          {selectedQuality === "2" && (
            <img src="/images/starsOne.jpg" alt="360p" className="mt-4 w-[350px]" />
          )}
          {selectedQuality === "3" && (
            <img src="/images/starsTwo.jpg" alt="480p" className="mt-4 w-[350px]" />
          )}
          {selectedQuality === "4" && (
            <img src="/images/starsThird.jpg" alt="720p" className="mt-4 w-[350px]" />
          )}
          {selectedQuality === "5" && <PicturesSlider />}
        </div>

        {/* 🎵 Музыка */}
        <audio ref={audioRef} src="/hottie/music.mp3" preload="auto" />
      </div>
    </div>
  )
}
