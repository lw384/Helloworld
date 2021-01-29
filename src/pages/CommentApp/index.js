import React,{Component} from 'react'
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'
import './index.css'

export default class CommentApp extends Component{
  handleSubmitComment(comment){
    console.log(comment)
  }
  render() {
    return (
        <div className='wrapper'>
          <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
          <CommentList/>
        </div>
    )
  }
}