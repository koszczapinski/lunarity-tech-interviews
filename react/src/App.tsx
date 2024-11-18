import Posts from "./components/Posts";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Clock />
        <div className="mt-8">
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default App;
