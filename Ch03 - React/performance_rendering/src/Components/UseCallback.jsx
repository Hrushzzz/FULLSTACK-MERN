import React, { useCallback, useState } from 'react'

function UseCallback() {
    const [items,setItem] = useState(["item1","item2","item3"]);

    // const removeItem = (itemsToRemove) => {
    //     setItem(prevItem => prevItem.filter(item => item !== itemsToRemove))
    // };

    const removeItem = useCallback((itemsToRemove) => {
        setItem(prevItem => prevItem.filter(item => item !== itemsToRemove))
    },[]);


  return (
    <div>
        { items.map((item) => (
            <div key={item}>
                {item}
                <button onClick={() => removeItem(item) }>Remove</button>
            </div>
        ))}
    </div>
  )
}

export default UseCallback