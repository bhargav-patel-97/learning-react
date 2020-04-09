import React from 'react';

const WIthClass = props => (
    <div className={props.classes}>{props.children}</div>
);

export default WIthClass;