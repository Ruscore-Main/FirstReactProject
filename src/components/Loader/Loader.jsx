import React from 'react';
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div class={styles.lds_roller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Loader;
