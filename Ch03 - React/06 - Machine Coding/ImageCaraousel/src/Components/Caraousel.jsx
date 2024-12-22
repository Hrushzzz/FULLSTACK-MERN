import React, {useEffect, useState} from 'react'
const items = [
    {
      id: 1,
      imageUrl: 'https://live.staticflickr.com/65535/53507181857_9dc916d768_h.jpg',
      title: 'Item 1',
      description: 'Description of item 1',
    },
    {
      id: 2,
      imageUrl: 'https://images8.alphacoders.com/971/thumbbig-971236.webp',
      title: 'Item 2',
      description: 'Description of item 2',
    },
    {
      id: 3,
      imageUrl: 'https://wallpapercave.com/wp/wp6390941.jpg',
      title: 'Item 3',
      description: 'Description of item 3',
    },
  ];

function Caraousel() {
    const [currentItem, setCurrentItem] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setNext();
        },2000);
        //to prevent memory leaks
        return () => clearInterval(timer);
    },[currentItem]);
    
    const setPrev = () => {
        let previdx = currentItem -1 ;
        if(previdx<0) previdx=previdx+items.length;
        setCurrentItem(previdx);
    }

    const setNext = () => {
        let nextIdx = (currentItem + 1) % items.length;
        setCurrentItem(nextIdx);
    }

  return (
    <div>
        <button onClick={setPrev}>Prev</button>
        <div className='carasouel-item'>
            <img height="400" width="800" src={items[currentItem]["imageUrl"]} alt={items[currentItem]["title"]}></img>
            <h2>{items[currentItem]["title"]}</h2>
            <p>{items[currentItem]["description"]}</p>
        </div>
        <button onClick={setNext}>Next</button>
    </div>
  )
}

export default Caraousel