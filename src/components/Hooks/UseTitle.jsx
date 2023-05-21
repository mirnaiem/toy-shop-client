import React, { useEffect } from 'react';

const UseTitle = title => {
useEffect(()=>{
 document.title=`${title} - ToysTruction`
},[title])
};

export default UseTitle;