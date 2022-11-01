import { Component } from 'react';
// routing
import { Routes, Route, Link } from "react-router-dom";
// assets
import Logo from './assets/logo.png'
// components
import Home from './screens/home/Home';
import Contacts from './screens/contacts/Contacts';
import Gallery from './screens/Gallery/Gallery';
import Service from './screens/service/Service';
import Listen from './screens/listen/Listen';
import Setup from './screens/setup/Setup';
// style
import './App.scss';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loader: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loader: false
      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">

        {this.state.loader &&

          <section className='logo'>
            <img src={Logo} alt="logo" />
          </section>
        }
        {!this.state.loader &&
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="service" element={<Service />} />
            <Route path="listen" element={<Listen />} />
            <Route path="setup" element={<Setup />} />
          </Routes>
        }

      </div>
    );
  }
}

export default App;
