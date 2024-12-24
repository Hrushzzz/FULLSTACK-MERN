// This is an example of Higher Order Component

import React, {Component} from 'react'

const WithLoading = (WrappedComp) => {
  return class WithLoading extends Component {
    constructor(props){
      super(props);
      this.state={
        isLoading: true
      }
    }

    alterTheme = (e) => {
      console.log("I am going to toggle the theme");
      //change p tag background color.
    }

    componentDidMount(){
      setTimeout(() => {
        this.setState({isLoading: false});
      }, 3000)
    }

    render(){
      if(this.state.isLoading){
        return <div>Loading....</div>
      }

      return <WrappedComp alterTheme={this.alterTheme} {...this.props}/>
      // In Class based components, we can send props like this : {...this.props}
    }
  }
}

export default WithLoading
