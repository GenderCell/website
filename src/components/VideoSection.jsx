import React from 'react'

const VideoSection = (props) => {
  return (
    <div style={{margin:"10px",height:'100px',backgroundColor:'#fff',borderRadius:'8px',boxShadow:'0 2px 4px rgba(0, 0, 0, 0.1)',padding:'2rem'}}>
      <h2 style={{display:'flex',justifyContent:"flex-start"}}>{props.title}</h2>
      <p style={{display:'flex',justifyContent:"flex-start"}}>{props.value}</p>
    </div>
  )
}

export default VideoSection
