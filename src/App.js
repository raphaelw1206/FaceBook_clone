/* eslint-disable react/jsx-no-undef */
import './App.css';
import './Header';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Story from './Story'; 
function App() {
  return (
    //Bem naming convention
    <div className="app">
      <Header />

      <div className="app-body">
        {/* App Body */}
        <Sidebar />
        <Feed />
        {/* wiget */}
        
      </div>
    </div>
  );
}

export default App;
