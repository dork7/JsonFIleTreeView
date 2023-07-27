import './App.css';
import TreeView from './Tree';

function App() {
  let data = {
    lorem: {
      ipsum2: "dolor sit",
      amet: {
        consectetur: "adipiscing",
        elit: [
          "duis",
          "vitae",
          {
            semper: "orci"
          },
          {
            est: "sed ornare"
          },
          "etiam",
          ["laoreet", "tincidunt"],
          ["vestibulum", "ante"]
        ]
      },
      ipsum: "primis"
    }
  };
  return (
    <div className="App">
     <TreeView data={data} name='data'/>
    </div>
  );
}

export default App;
