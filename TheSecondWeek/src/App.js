import Data from "./Data/Data.json";
import Group from "./Component/Group/Group.js";

function App() {

  const groupLists = Object.keys(Data);

  return (
    <header>
      <h1>Kodluyoruz React Bootcamp</h1>
      {groupLists.map(group => <Group groupName={group} members={Data[group]} />)}
    </header>
  );
}

export default App;