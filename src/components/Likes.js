import React, {useState} from 'react'

const Likes = ({upvotes, downvotes}) => {
    
    const [likevotes, setUpvotes] = useState(upvotes)
    const [noLikevotes, setDownvotes] = useState(downvotes)

    const handleUpVote = () => {
        setUpvotes((likevotes) => likevotes + 1);
    }
    
    const handleDownVote = () => {
        setDownvotes((noLikevotes) => noLikevotes + 1)
    }
    
    return (
        <div>
            <button onClick={handleUpVote}> 👍 {likevotes} </button>
            <button onClick={handleDownVote}> 👎 {noLikevotes} </button>
        </div>
    )
}

export default Likes
