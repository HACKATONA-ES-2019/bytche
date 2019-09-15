import React from 'react';
import { Phone } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import "./contatos.css";


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none',
  },
}));

const useStyles1 = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "red"
  },
  input: {
    display: 'none',
  },
}));

const useStyles2 = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#800000"
  },
  input: {
    display: 'none',
  },
}));

const useStyles3 = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#32a852"
  },
  input: {
    display: 'none',
  },
}));

const Contatos = () => {
  const classes = useStyles();
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const classes3 = useStyles3();

  return (
    <div className="Main">
      <Phone color="action" style={{ fontSize: 80, color: "red" }} />
      <p className="title">Em caso de emergência, ligue:</p>
      <Card className="card">
          Policia Militar
          <Button variant="contained" color="primary" className={classes.button}>
            <a href="tel:+190" className="link">190</a> Ligar
          </Button>
      </Card>

      <Card className="card">
          SAMU
          <Button variant="contained" color="primary" className={classes1.button}>
            <a href="tel:+192" className="link">192</a> Ligar
          </Button>
      </Card>

      <Card className="card">
          Corpo de Bombeiros
          <Button variant="contained" color="primary" className={classes2.button}>
              <a href="tel:+193" className="link">193</a> Ligar
          </Button>
      </Card>

      <Card className="card">
        Defesa Civil
          <Button variant="contained" color="primary" className={classes3.button}>
              <a href="tel:+199" className="link">199</a> Ligar
          </Button>
      </Card>
    </div>
  );
}

export default Contatos;
