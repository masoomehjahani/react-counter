
import withCount from "../hoc/withCount";

const HoverCounter = ({count , incrementCount}) => {
    return (
        <div onMouseOver={incrementCount}>hover {count} times</div>
      );
}
 
export default withCount(HoverCounter,10);