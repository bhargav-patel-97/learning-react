import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {

    const classes = [];
    let btnClass ='';

    if(props.showPersons) {
        btnClass = styles.Red;
    }

    if(props.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (props.persons.length <= 1) {
      classes.push(styles.danger);
    }

    return(
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <h2 className={classes.join(' ')}>We have {props.persons.length} person(s) onboard!</h2>
            <button
            className={btnClass}
            onClick={props.clicked}>TOGGLE
            </button>
        </div>
    );
}

export default cockpit;
