import { TodoContextProvider } from "./contexts/TodoContexts";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <TodoContextProvider>
      <TodoApp />
    </TodoContextProvider>
  );
}

export default App;
