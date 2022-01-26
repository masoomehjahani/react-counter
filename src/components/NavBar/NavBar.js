import styles from './NavBar.module.css';

const NavBar = (props) => {
    // destructur object: b jaye props pass => {totalItems,...}
    return (
        <header className={styles.navBar}>
           <h2>my shopping</h2>
           <span>{props.totalItems}</span>
            </header>
      );
}
 
export default NavBar;
