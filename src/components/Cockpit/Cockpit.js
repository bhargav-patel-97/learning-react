import React, { useContext } from 'react';
import styles from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const authContext = useContext(AuthContext);  
    const classes = [];
    let btnClass ='';

    if(props.showPersons) {
        btnClass = styles.Red;
        console.log("Persons Showing");
    }

    if(props.personsLength <= 2) {
      classes.push(styles.red);
    }
    if (props.personsLength <= 1) {
      classes.push(styles.danger);
    }

    return(
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <h2 className={classes.join(' ')}>We have {props.personsLength} person(s) onboard!</h2>
            <button
            className={btnClass}
            onClick={props.clicked}>TOGGLE
            </button>
              {<button onClick={authContext.login}>Log In</button>}
        </div>
    );
}

export default React.memo(cockpit);
