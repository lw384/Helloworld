import React,{Component} from 'react'
import ReactDOM from 'react-dom'
// import 'index.css'

class Title extends Component{
  handleClickOnTitle(e){
    console.log(this)
  }
  render() {
    return(
        <h1 onClick={this.handleClickOnTitle.bind(this)}>React 小书</h1>
    )
  }
}

class Header extends Component {
  render () {
    return (
        <div>
          <Title />
         <div>
           {
             [
                 <span>React.js</span>,
                 <span>is</span>,
               <span>good</span>,
             ]
           }
         </div>
        </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
        <div>
          <h2>This is main content</h2>
        </div>
    )
  }
}

class Footer extends Component {
  render () {
    return (
        <div>
          <h2>This is footer</h2>
        </div>
    )
  }
}

export default class Index extends Component {
  render () {
    return (
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
    )
  }
}



