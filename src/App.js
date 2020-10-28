import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  const data = [
    {
      item: "A50.0 - A89.9",
      nested: [1,2,3,4,5,6,7,8,9,10,11]
    },
    {
      item: "B50.0 - B89.9",
      nested: [1,2,3,4,5,6,7,8,9,10,11]
    },
    {
      item: "C50.0 - C89.9",
      nested: [1,2,3,4,5,6,7,8,9,10,11]
    },
    {
      item: "D50.0 - D89.9",
      nested: [1,2,3,4,5,6,7,8,9,10,11]
    },
    {
      item: "E50.0 - E89.9",
      nested: [1,2,3,4,5,6,7,8,9,10,11]
    },
    {
      item: "F50.0 - F89.9",
      nested: [1,2,3,4,5,6,7,8,9,10,11]
    }
  ]
  return (
    <div className="App">
      <Dropdown data={data} />
    </div>
  );
}

export default App;
