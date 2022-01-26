// const Wrapper = (props) => {
//     return (
//         <div className={props.className}>{props.children}</div>
//       );
// }

// dynamik tar:
//WrappedComponent : component
const Wrapper = (WrappedComponent,className) =>{

   return (props)=>{
    //    console.log(props);
    //    return updated component
    return( 
          <div className={className}>
            <WrappedComponent {...props}/>
          </div>
          );
   };
};
 
export default Wrapper;