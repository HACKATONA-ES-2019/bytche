import React, { Component } from 'react';
import logo from './logo.svg';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Phone, Waves, Fireplace, MyLocation } from '@material-ui/icons';
import './App.css';
import Incendio from "./screens/emergencia/Incendio";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { page: 0 }
  }

  handlePage = page => {
    this.setState({ page });
  };

  render() {
    const { page } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {/* adicionar infos */}
          <div>
        { page == 0 && <Incendio />}
        { page == 1 && <Incendio />}
        { page == 2 && <Incendio />}
        { page == 3 && <Incendio />}

        </div>
        </header>
        <BottomNavigation
            value={page}
            onChange={(event, page) => {
              this.handlePage(page);
            }}
            showLabels
            className={{ width: "100%" }}
          >
            <BottomNavigationAction label="Caso de incêndio" icon={<Fireplace />} />
            <BottomNavigationAction label="Inundação" icon={<Waves />} />
            <BottomNavigationAction label="Contatos" icon={<Phone />} />
            <BottomNavigationAction label="Adicionar Locais" icon={<MyLocation />} />
          </BottomNavigation>
      </div>
    );
  }
}

export default App;
