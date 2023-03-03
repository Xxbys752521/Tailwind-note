import Channelbar from "./components/noteDirectory/noteDirectory";
import ContentContainer from "./components/ContentContainer/contentContainer";
import SideBar from "./components/SideBar/sideBar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Channelbar />
      <ContentContainer />
    </div>
  );
}

export default App;
