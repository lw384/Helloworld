import React,{Component} from "react";
import './index.css'
import _ from 'loadsh'
export default class Steps extends Component{
  static defaultProps = {
    current:'1',
    step:[
      {done:'Yes',
        title:'步骤一',
        number:'1'},
      {done:'',
        title:'步骤一',
        number:'2'},
      {done:'',
        title:'步骤一',
        number:'3'}
    ]
  }

  goNext(obj){
    let newstep = _.findIndex(obj.step,function (o) {
     return  o.number ===obj.current
    })
    console.log(newstep)
  }
  constructor(props){
    super(props)
  }

  render() {
    let steps = this.props.step.map((item,index)=>{
      return (
          <div  key={index} className={item.done ? 'progress-item done' : 'progress-item'} style={{ width: item.width ? item.width + 'px' : ''}}>
            <div className="progress-title">{item.title}</div>
            <div className="progress-body">
              <h3>{item.number}</h3>
              <div className="progress-line"/>
            </div>
          </div>
      )
    });
    return(
        <div>
          {
            steps
          }
          <button className="next-btn" onClick={this.goNext(this.props)}>下一步</button>
        </div>
    )
  }
}