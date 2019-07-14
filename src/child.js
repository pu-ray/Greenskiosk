import React from 'react';

 class child extends React.Component{
    render(){
       return (
        <div>
        <button onClick={this.props.changeName}>Call Parent</button>
        </div>
        )
    }

}
export default child;