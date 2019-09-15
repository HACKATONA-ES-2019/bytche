import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Phone, Waves, Fireplace, MyLocation, Whatshot } from '@material-ui/icons';
import './App.css';
import Incendio from "./screens/emergencia/Incendio/Incendio";
import Inundacao from "./screens/emergencia/Inundacao/Inundacao";
import Contatos from './screens/contatos/Contatos';
import Maps from './screens/maps/Maps';
import MenuAppBar from "./components/AppBar";
import InundacaoA from './screens/Alarmes/InundacaoA';
import IncendioA from './screens/Alarmes/IncendioA';
import IconButton from '@material-ui/core/IconButton';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { page: 0, warnInundacao: false, warnIncendio: false }
  }

  handlePage = page => {
    this.setState({ page });
    this.setState({ warnIncendio: false });
    this.setState({ warnInundacao: false });
  };

  handleClick = (i) => {
    if(i === 1) this.setState(state => ({ warnIncendio: !state.warnIncendio }));
    if(i === 2) this.setState(state => ({ warnInundacao: !state.warnInundacao }));
  }

  render() {
    const { page, warnInundacao, warnIncendio } = this.state;
    return (
      <div className="App">
        <MenuAppBar />
        <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => this.handleClick(1)}
            color="inherit"
          >
            <Whatshot color="secondary" />
          </IconButton>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="error"
            onClick={() => this.handleClick(2)}
            color="inherit"
          >
            <Waves color="secondary" />
          </IconButton>
        { page === 3 && !warnIncendio && !warnInundacao && <Maps />}
        { warnInundacao && <InundacaoA />}
        { warnIncendio && <IncendioA />}
        <header className="App-header">
          <div>
        { page === 0 && !warnInundacao && !warnIncendio && <Contatos />}
        { page === 1 && !warnInundacao && !warnIncendio && <Incendio />}
        { page === 2 && !warnInundacao && !warnIncendio && <Inundacao />}
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
