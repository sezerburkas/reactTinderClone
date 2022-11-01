import React, {useState, useRef, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // 


export default function SwapCard() {

    const [photoCount, setPhoto] = useState(0);

    const photoRef = useRef([]);
    const selectorRef = useRef([]);

    useEffect(()=>{
        photoRef.current = photoRef.current.slice(0, 5);
        selectorRef.current = selectorRef.current.slice(0, 5);
        console.log(photoCount);
    },[]);

    function nextPhoto(event){
        if(photoCount < 4){
            const photoElement = photoRef.current[photoCount];
            const selectorElement = selectorRef.current[photoCount+1];

            selectorRef.current.map((element) => {
                element.className = "photo-selector";
            })

            photoElement.style.display = "none";
            setPhoto(photoCount + 1);

            console.log(photoCount);
            selectorElement.className  = selectorElement.className+" active";
        }

    }

    function prevPhoto(event){
        if(photoCount > 0){
            const photoElement = photoRef.current[photoCount-1];
            const selectorElement = selectorRef.current[photoCount-1];

            selectorRef.current.map((element) => {
                element.className = "photo-selector";
            })

            photoElement.style.display = "block";
            setPhoto(photoCount - 1);

            console.log(photoCount);
            selectorElement.className  = selectorElement.className+" active";
        }
    }

  return (
    <div className='card'>
        <div className="arrow-buttons">
            <button className='arrow-button' onClick={prevPhoto}>
                
            </button>
            <button className='arrow-button' onClick={nextPhoto}>
                
            </button>
        </div>
        <div className='card-header'>
            <div className="photo-count">
                <a ref={selector => selectorRef.current[0] = selector} href="#" className='photo-selector active' style={{ width:'19%' }}></a>
                <a ref={selector => selectorRef.current[1] = selector} href="#" className='photo-selector' style={{ width:'19%' }}></a>
                <a ref={selector => selectorRef.current[2] = selector} href="#" className='photo-selector' style={{ width:'19%' }}></a>
                <a ref={selector => selectorRef.current[3] = selector} href="#" className='photo-selector' style={{ width:'19%' }}></a>
                <a ref={selector => selectorRef.current[4] = selector} href="#" className='photo-selector' style={{ width:'19%' }}></a>
            </div>
            <div className="image-container">
                <img ref={photo => photoRef.current[0] = photo} src="https://picsum.photos/800/1200" alt="..."></img>
                <img ref={photo => photoRef.current[1] = photo} src="https://picsum.photos/799/1200" alt="..."></img>
                <img ref={photo => photoRef.current[2] = photo} src="https://picsum.photos/798/1200" alt="..."></img>
                <img ref={photo => photoRef.current[3] = photo} src="https://picsum.photos/797/1200" alt="..."></img>
                <img ref={photo => photoRef.current[4] = photo} src="https://picsum.photos/796/1200" alt="..."></img>
            </div>       
        </div>
        <div className="card-description">
            <div className="name">
                <h1>Selen <small>21</small></h1>
            </div>
            <div className="info">
                <span className='activity'>Recently Active</span>
                <span className='location'><FontAwesomeIcon icon={solid('location-dot')}/> 4 miles away</span>
            </div>
            <div className="card-buttons">
                <button className='revert small'><FontAwesomeIcon icon={solid('rotate-left')}/></button>
                <button className='nope'><FontAwesomeIcon icon={solid('xmark')}/></button>
                <button className='super-star small'><FontAwesomeIcon icon={solid('star')}/></button>
                <button className='yes'><FontAwesomeIcon icon={solid('heart')}/></button>
                <button className='boost small'><FontAwesomeIcon icon={solid('bolt')}/></button>
            </div>
        </div>
    </div>
  )
}

