import { useState } from 'react';
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
        } else {
            setShowSlider(false);
            setSelectedImage(images[selectedIndex]);
        }
    };

    return (
        <div className='select_option'>
            <h3>Choose the quality</h3>
            
            <select onChange={handleChange}>
                <option value="">Select</option>
                <option value="">144p</option>
                <option value="">360p</option>
                <option value="">720p</option>
                <option value="">1080p</option>
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
