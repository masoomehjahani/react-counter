
// import Product from "./components/Product/Product";
//this use in version older than 17 for in behind react.createlement and for use in component class
import React , {Component, useState} from "react";

// import css like a file:
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import ClassCounter from "./components/lifeCycle/ClassCounter";
import FunctionalCounter from "./components/lifeCycle/FunctionalCounter";
import ClassTimer from "./components/lifeCycle/ClassTimer";
import FunctionalTimer from "./components/lifeCycle/FunctionalTimer";
import Wrapper from "./components/hoc/Wrapper";
import ClickCounter from "./components/hocExample/ClickCounter";
import HoverCounter from "./components/hocExample/HoverCounter";
import ParentCmp from "./components/pureMemoCmp/ParentCmp";
// this is work in behind of react:
// const App = () =>{
//     return React.createElement("div" ,
//     {id:"title", className:"app-title"},
//      "this is my first");
// }

// thruly component in react:
// component: any class or function that return html tag 
// functionality component:

// const App = () =>{
//     return (
//     <div id="title" className="container">
//         <h1>hi mastan</h1>
//         <Product title="java" price="99 $"/>
//         <Product title="css" price="80 $"/>
//         <Product title="html" price="70 $">
//             <p> 15 %</p>
//         </Product>
//     </div>
//     );
// }

// class component:
// component an class of react that can extend this in my class to use evrything of react option 
class App extends Component {
    state ={
        products :[
            { title:"java" ,price:"99 $", id:1 ,quantity :1},
            { title:"css" ,price:"20 $", id:2 ,quantity :5},
            { title:"html" ,price:"100 $", id:3 ,quantity :10}
         ],
         count : 0,
         isShow :true,
      };
// state => event handler writh ther
deleteHandler = (id) =>{  
    //this method dose not muted data!
        const filteredProducts= this.state.products.filter(p => p.id !== id);
        this.setState({products : filteredProducts });
        };
incrementHandler = (id) =>{
        // muted state:

        // we dont permision to change manualy state (without setState method)
        // this falt named : mutate state
        // bayad yek copy az state clon begirim va roo oon kar konim
        // const selectedItem = this.state.products.find( p=> p.id=id);
        // const copyProducts = [...this.state.products];
        // const selectedItem = copyProducts.find(p => p.id === id);
        // selectedItem.quantity ++;
        // this.setState({products : copyProducts});

        const index= this.state.products.findIndex((item) => item.id ===id);
        const product = {...this.state.products[index]};
        product.quantity ++;

        const products = [...this.state.products];
        products[index] = product;
        this.setState({products});
        };
        componentDidUpdate(prevProps, prevState) {
            console.log(prevState);
        }
changeHandler = (event , id) =>{
        // muted state:
        // const copySelected = [...this.state.products];
        // const selectedInput = copySelected.find(p => p.id === id);
        // selectedInput.title = event.target.value;
        // this.setState({products : copySelected});

        const index= this.state.products.findIndex((item) => item.id ===id);
        const product = {...this.state.products[index]};
        product.title =  event.target.value;

        const products = [...this.state.products];
        products[index] = product;

        this.setState({products});
        };
decresHandler = (id) =>{
    //mutated state: when writ selectedItem.quantity --; outside of setstate
            // const copyProducts = [...this.state.products];
            // const selectedItem = copyProducts.find(p => p.id === id);
            // if(selectedItem.quantity > 1)
            // {
            // selectedItem.quantity --;
            //  this.setState({products : copyProducts}); 
            // }
            // else
            // {
            // //  const filteredProducts= this.state.products.filter(p => p.id !== id);
            // //  this.setState({products : filteredProducts });
            //  this.deleteHandler(id);
            // } 
            const index= this.state.products.findIndex((item) => item.id ===id);
            const product = {...this.state.products[index]};
            if(product.quantity > 1){
                product.quantity --;

                const products = [...this.state.products];
                products[index] = product;
                this.setState({products : products});
            }
            else {
                this.deleteHandler(id);
            }
        };
//for resolve "this" refrence in function => use arrow function
// arrow function "this" ro b ers mibare va oono rebind nemikone
    clickHandler= (newTitle)=>{
        console.log(newTitle);
        //in class component ,for change state ,can use just method setState()
        this.setState({
            products :[
                { title:"java" ,price:"1 $", id:1},
          { title:"css" ,price:"2 $", id:2},
          { title:"html" ,price:"5 $", id:3}
             ],
        });        
    }
    // for resolve this refrense in function:
    // by constractor bind this to the distance function
constructor(props){
   super(props);
this.countHandler = this.countHandler.bind(this);
}

// object.function => this refer to object corectly
 //this in function refer to window! =>undefined
countHandler(id)  {  
       console.log("count clicked",id);
    this.setState({count : this.state.count +1})
    //change state like bellow is rong: muted state
    // this.state.count ++;
    }
    render()
    {
        console.log(this.props);
        return(      
            // <Wrapper  className="container">
            <>
            {/* props;name */}
            <ClickCounter name="mastan" />
            <HoverCounter/>
            {/* <ParentCmp/> */}
                {/* <button onClick={() => {this.setState({isShow : !this.state.isShow})}}>
                    {this.state.isShow ? "hide" : "show"}</button>
                    {this.state.isShow ? <FunctionalTimer/> :null} */}
                {/* <ClassCounter/> */}
                {/* <FunctionalCounter/> */}
                 {/* <NavBar totalItems = {this.state.products.filter(p => p.quantity > 0).length} />
                <ProductList 
                products={this.state.products} 
                onDelete = {this.deleteHandler}
                onChange ={this.changeHandler}
                onIncrement= {this.incrementHandler}
                onDecres ={this.decresHandler}
                /> */}
                
                {/* if pass data to event like argoman function, this event 
                call widouth click!! =>for pass argumant to event use arrow function or bind*/}
                {/* <button onClick={() => this.countHandler(2)}>counter : {this.state.count}</button> */} 
                {/* //  </Wrapper> */}
              </>
                );
    }
   // WITHOUT STATE:
    // render (){
    //     return(
    //      <div id="title" className="container">
    //     <h1>hi mastan</h1>
    //     <Product title="java" price="99 $"/>
    //     <Product title="css" price="80 $"/>
    //     <Product title="html" price="70 $">
    //         <p> 15 %</p>
    //     </Product>
    //     </div>
    //     );
    // }
// }
// export default App;



//-------------------------------- functional component-------------------
// useState : return an arraye[3]:1-data , 2-function that can by use them change data
// const App = () => {
// // for every data must creat its "useState func"
// // react to recognize what data in component updated and must rerender that,use an uniqu data in dataList(in map)
// //keys help react identify which items have changed in a list(key offen are id that come from backend)
// //react recommand dont use index as key because:impact performance negatively 2-lead to some unstable component behaviour
// // if key is index, reordering an item changes this key
// // => use in some case of inde:
// //1-list is static,2-list never be re order , 3-list never filtered(add, remove) 4-there are no ids in the list
//    const [products,setProducts] = useState([
//         { title:"java" ,price:"3 $",id :1},
//         { title:"css" ,price:"1 $" , id:2},
//         { title:"html" ,price:"9 $",id:3}
//      ]);
//    const  clickHandler = () =>{
//         setProducts([
//             { title:"java" ,price:"50 $",id:1},
//             { title:"css" ,price:"100 $",id:2},
//             { title:"html" ,price:"90 $",id:3}
//         ]);
//      }
//     return ( 
//          <div id="title" className="container">
//                      <h1>hi mastan</h1>
//                   {products.map( product =>{
//                      return  <Product
//                       name ={product.title}
//                       price ={product.price}
//                       key ={product.id}
//                        />;
//                        }
//                     )}
//                     <button onClick={clickHandler}>change price</button>
//            </div> );
}
 
 export default App;
// by wrapper:
// export default Wrapper(App,'container');