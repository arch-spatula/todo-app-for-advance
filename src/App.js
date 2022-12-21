import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomForm from "./components/CustomForm";
import { getTodoThunk } from "./redux/modules/todoSlice";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(getTodoThunk());
    console.log(data.todos.data);
  }, []);
  return (
    <div className="App">
      <CustomForm />
    </div>
  );
}

export default App;
