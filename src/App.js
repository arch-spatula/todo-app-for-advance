import { TodoList, CustomForm, Header } from "./components";
import Layout from "./shared/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <CustomForm />
        <TodoList heading="Working" kind="Working" />
        <TodoList heading="Done..." kind="Done" />
      </Layout>
    </div>
  );
}

export default App;
