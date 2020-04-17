import React from 'react';
import Form from './Form';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.state = {
      userInfo : {
        palette:'',
        name:'',
        phone:''
      }
    }
  }

  handleInputValue(inputName,inputValue) {
      this.setState(prevState => {
        return {
          userInfo: {
            ...prevState.userInfo,
            [inputName]:inputValue
          }
        }
      })
  }

  componentDidUpdate(){
    localStorage.setItem('userInfo',JSON.stringify(this.state.userInfo))
  }

  componentDidMount(){
    const userLocalInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(userLocalInfo !== null){
      this.setState({
        userInfo: {
          palette:userLocalInfo.palette,
          name:userLocalInfo.name,
          phone:userLocalInfo.phone
        }
      })
    }
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Form phone={this.state.userInfo.phone}
              name={this.state.userInfo.name}
              handleInputValue={this.handleInputValue}
              checked={this.state.userInfo.palette}
              hobbies={this.state.userInfo.hobbies}
        />
      </div>
    );
  }
}

export default App;
