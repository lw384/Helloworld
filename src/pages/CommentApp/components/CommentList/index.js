import React,{Component} from "react";

class CommentList extends Component{
  render() {
    const comments = [
      { username:'Jerry',content:'Nice'},
      { username:'Helen',content:'I agree'},
      { username:'Amy',content:'I like it'}

    ]
    return (
        <div>
          {comments.map((comment,i)=>{
            return (
                <div key={i}>
                  {comment.username}:{comment.content}
                </div>
            )
          })
          }
        </div>
    )
  }
}
export default CommentList