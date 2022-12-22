import { TodoList, CustomForm, Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <CustomForm />
      <TodoList heading="Working" kind="Working" />
      <TodoList heading="Done..." kind="Done" />
    </div>
  );
}

export default App;
