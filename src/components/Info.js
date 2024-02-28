import React from 'react'
import Comments from './Data'
function Info() {
    // const { data } = Comments;
    // console.log(data)
    return (
        <div>
            <p>{Comments[0].postId}</p>
        </div>
    )
}

export default Info
