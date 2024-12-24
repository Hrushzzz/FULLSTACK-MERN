import './App.css'
import Counter from './Components/Counter'
import CounterFn from './Components/CounterFn'
import TodoList from './Components/TodoList'
import TodoListFn from './Components/TodoListFn'
import WithLoading from './Components/WithLoading';
import DataComp from './Components/DataComp'

function App() {

  const EnhancedDataComp = WithLoading(DataComp);  // binding of Higher Order Component
  // Here "WithLoading" is a Higher Order Component

  return (
    <>
      {/* <Counter></Counter> */}
      {/* <CounterFn></CounterFn> */}
      {/* <TodoList></TodoList> */}
      {/* <TodoListFn></TodoListFn> */}
      <EnhancedDataComp data="Here is some data"></EnhancedDataComp>
    </>
  )
}

export default App
