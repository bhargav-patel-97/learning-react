import React from 'react';
import styles from './Person.css';
import AuthContext from '../../../context/auth-context';
import WIthClass from '../../../hoc/WithClass';

const person = (props) => {

    return (
        <WIthClass>
        <AuthContext.Consumer>
            {(context) =>
                context.authenticated ? <p>Authenticated!</p> : <p>Please Log in </p>
            }
        </AuthContext.Consumer>
            <div className={styles.Person}>
                <p>I am {props.name} and I'm {props.age} years old.</p>
                <p>{props.children}</p>
                <input className={styles.inputField} type="text" onChange={props.changed}/>
                <button className={styles.removeBtn} onClick={props.clicked}></button>
            </div>
        </WIthClass>
    );
};

export default person;