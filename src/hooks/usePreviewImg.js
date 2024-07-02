import React, { useState } from 'react'
import useShowToast from './useShowToast'

function usePreviewImg() {

  const [imgURL, setImageURL]=useState('')
  const showToast=useShowToast()

  const handleImageChange=(e)=>{
    const file=e.target.files[0]
    
    
    if(file && file.type.startsWith('image/')){
      const reader=new FileReader()  //js file reader api

      reader.onloadend=()=>{
        setImageURL(reader.result)
      }

      reader.readAsDataURL(file)  //convert the selected file to base64 string
    }
    else{
      showToast('Invalid file format.', 'Please select an image.', 'error')
    }
  }

  return {handleImageChange, imgURL}
}

export default usePreviewImg