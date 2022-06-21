import { useSelector, useDispatch } from 'react-redux'
import { increaseCount, decreaseCount } from "./redux/actions/actionCreator"

const App = () => {

  const dispatch = useDispatch();

  const count = useSelector((store: any) => store?.counter?.count);

   const handleIncrease = () => {
    dispatch(increaseCount());
  };

   const handleDecrease = () => {
    dispatch(decreaseCount());
  };

return (
  <div>
    <h1>{count} </h1>
    <button onClick={handleIncrease}>increase</button>
    <button onClick={handleDecrease}>decrease</button>
  </div>
)
};

export default App;
