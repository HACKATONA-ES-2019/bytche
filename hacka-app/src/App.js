import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Phone, Waves, Fireplace, MyLocation } from '@material-ui/icons';
import './App.css';
import Incendio from "./screens/emergencia/Incendio/Incendio";
import Inundacao from "./screens/emergencia/Inundacao/Inundacao";
import Contatos from './screens/contatos/Contatos';
import Maps from './screens/maps/Maps';
import MenuAppBar from "./components/AppBar";

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
        <MenuAppBar />
        { page === 3 && <Maps />}
        <header className="App-header">
          <div>
            { page === 0 && <Contatos />}
            { page === 1 && <Incendio />}
            { page === 2 && <Inundacao />}
          </div>
        </header>
        <BottomNavigation
            value={page}
            onChange={(event, page) => {
              this.handlePage(page);
            }}
            showLabels
            className="menu"
          >
            <BottomNavigationAction label="Contatos" icon={<Phone />} />
            <BottomNavigationAction label="Caso de incêndio" icon={<Fireplace />} />
            <BottomNavigationAction label="Inundação" icon={<Waves />} />
            <BottomNavigationAction label="Adicionar Locais" icon={<MyLocation />} />
          </BottomNavigation>
      </div>
    );
  }
}

export default App;
