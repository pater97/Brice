import { Component } from 'react';
import Logo from './assets/logo.png'
import Home from './screens/home/Home';
import './App.scss';


class  App extends Component{

  constructor(props){
    super(props)

    this.state = {
      loader:true
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loader:false
      })
    },5000)
  }

  render(){
    return (
      <div className="App">

        { this.state.loader &&

        <section className='logo'>
            <img src={Logo} alt="logo" />
        </section>
        }
        { !this.state.loader &&
            <Home/>
        }

      </div>
    );
  }
}

export default App;
