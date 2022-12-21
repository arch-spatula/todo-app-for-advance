import CustomForm from "./components/CustomForm";
import { TodoList } from "./components";

function App() {
  return (
    <div className="App">
      <CustomForm />
      <TodoList heading="Working" kind="Working" />
      <TodoList heading="Done..." kind="Done" />
    </div>
  );
}

export default App;
