import { useRef, useState } from 'react';
import Slider from './Slider/slider';
import './style.css';

export default function Select() {
    const images = [
        './144p.jpg',
        './360p.jpg',
        './720p.jpg',
        './1080p.jpg'
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [showSlider, setShowSlider] = useState(false);

    const handleChange = (event) => {
        const selectedIndex = event.target.selectedIndex - 1;
        if (selectedIndex === 3) {
            setShowSlider(true);
            handlePlayPause();
        } else {
            setShowSlider(false);
            setSelectedImage(images[selectedIndex]);
        }
    };

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.currentTime = 27; 
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <div className='select_option'>
            <h3>Choose the quality</h3>

            <button onClick={handlePlayPause} className='audio_btn'>
                <i className={`fa-solid ${isPlaying ? 'fa-volume-xmark' : 'fa-volume-high'} animate-volume`}></i>
            </button>
            <audio ref={audioRef} src="./tek.mp3" type="audio/mpeg"></audio>

            <select onChange={handleChange}>
                <option value="">Select</option>
                <option value="">144p</option>
                <option value="">360p</option>
                <option value="">720p</option>
                <option value="" onClick={handlePlayPause}>1080p</option>
            </select>
            
            <div className="select_img">
                {!showSlider && selectedImage && <img className='img' src={selectedImage} alt="Selected Quality" />}
                {showSlider && <Slider />}
            </div>

            <footer>
                <p>&copy; mister J</p>
            </footer>

        </div>
    );
}
