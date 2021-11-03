import React, { useState } from 'react'
import { v4 as uuid } from "uuid";

const Comments = ({comments}) => {
    
    const [commentOff, setCommentOff] = useState(false)
    const [search, setSearch] = useState("")

    const commentToggle = () => {
        setCommentOff(!commentOff)
    }

    const searchComments = comments.filter((c) => c.comment.toLowerCase().includes(search.toLowerCase()) || c.user.toLowerCase().includes(search.toLowerCase()));

    const mapComments = searchComments.map((comment) => {
        if (commentOff) {
             return <>
                 <h3 key={comment.id}>{comment.user}</h3>
                 <p>{comment.comment}</p>
             </>
        } else {
            return null;
        }
     })

    return (
        <>
        <br></br>
        <button onClick={commentToggle}>{commentOff ? "Hide Comments" : "Show Comments"}</button>
        <br></br>
        <hr size="2" width="75%"></hr>
        <h2>{mapComments.length} Comments</h2>
        <input
            type="text"
            placeholder="search comments"
            onChange={(e) => setSearch(e.target.value)}
        />
        <div>
            {mapComments}
        </div>
        </>
    )
}

export default Comments
