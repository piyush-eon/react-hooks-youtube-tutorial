import useFetchAPI from "./AllHooks/useFetchAPI";
import "./App.css";

function App() {
  const { data, loading, error } = useFetchAPI(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log(data);

  if (error) return <p>Error!</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      {/* <HookUseState /> */}
      {/* <HookUseEffect /> */}
      {/* <HookUseMemo /> */}
      {/* <HookUseCallback /> */}
      {/* <HookUseRef /> */}
      {/* <HookUseContext /> */}
      {/* <HookUseReducer /> */}
      {/* <HookUseImperativeHandle /> */}
      {/* <HookUseLayoutEffect /> */}

      <ul>
        {data?.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
