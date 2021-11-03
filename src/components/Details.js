import React from 'react'

const Details = ({src, title, views, uploadDate}) => {
    
    return (
        <>
        <iframe
            width="919"
            height="525"
            src={src}
            frameBorder="0"
            allowFullScreen
            title={title}
        />
        <h1>{title}</h1>
        <p>{views} Views | Uploaded {uploadDate} </p>
        </>
    )
}

export default Details
