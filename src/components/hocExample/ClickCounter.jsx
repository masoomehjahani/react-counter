
import withCount from "../hoc/withCount";

const ClickCounter = ({count , incrementCount,name}) => {
    // console.log(name);
    return (
        <div onClick={incrementCount}>clicked {count} times</div>
      );
}
 
export default withCount(ClickCounter,5);