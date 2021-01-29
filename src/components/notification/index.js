import React,{Component} from 'react'
// 使用 React.js 构建一个未读消息组件 Notification。
// 通过 getNotificationsCount() 来获取未读消息的数量 ，如果有未读消息 N 条，而且 N > 0，那么 Notification 组件渲染显示：
class Notification extends Component{
  getNotificationsCount(){

  }
  render() {
    const N = getNotificationsCount();
    return N>0?<span>有{{N}}条未读消息</span>:<span>没有未读消息</span>
  }
}