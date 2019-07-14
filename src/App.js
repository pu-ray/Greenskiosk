import React from 'react';
import child from "./child";
import Sibling from './Sibling';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      name:"Emma Mbugua"
    }
    this.changeName = this.changeName.bind(this)
  }
  render(){
    return(
    <div>
    <Sibling name = {this.state.name} />
    <child changeName = {this.changeName}/>
    <h1>{this.props.gender}</h1>
   </div>
    )
  }


changeName(){
  this.setState({
    name:"Puray Mbugua"
  })
}
}

App.defaultProps = {
  gender:"female",
}

App.defaultProps = {
  // gender:React.propTypes.string
}

export default App;
