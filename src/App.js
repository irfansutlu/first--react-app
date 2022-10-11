import Content from "./content";
import data from "./data";

function App() {
  return (
    <div>
      <h1>Albums</h1>
      <div className='container'>
        {data.map((item) => {
          return (
              <Content
                key={item.photographer}
                photographer={item.photographer}
                src={item.src}
              />
          );
        })}
      </div>
    </div>
  );
}

export default App;
