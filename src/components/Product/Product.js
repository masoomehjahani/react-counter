// component must be dynamic => use props to pass data
// component are reusable and dynamic
// * nested data in react
import { useEffect } from "react";
import { BiTrash } from "react-icons/bi";

// impordt normal file css
// import "./product.css";
// impoprt modul css file:
import styles from "./product.module.css";

const Product = (props) =>{
    useEffect(()=>{}, [])
    // console.log(props);
    return(
        <div className={styles.product} onClick={props.click}>
            {/* if pass by self : props.title */}
            <p className="pTitle">product name:{props.product.title}</p>
            <p className="pPrice">product price:{props.product.price}</p>
            <input type="text" onChange={props.onChange} value={props.product.title} className={styles.input}></input>
            <span className={styles.value}>{props.product.quantity}</span>
            <button onClick={props.onIncrement} className={`${styles.btn} ${styles.btnIcon} ${styles.inc}`} > + </button>
            <button className={`${styles.btn} ${styles.btnIcon} ${props.product.quantity ===1 ? styles.removeIcon : null}`}
             onClick={props.onDecres}>
            { props.product.quantity > 1 ? "-" : <BiTrash/>} </button>
            <button className={`${styles.btn} ${styles.btnIcon}`} onClick={props.onDelete}>delete</button>
            {/* <p>{props.children}</p> */}
        </div>
    );
}

export default Product