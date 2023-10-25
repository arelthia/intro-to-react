import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './components/Feed';


function App() {
  return (
    <div className="App">
      <Header title="PhotoFeed" />
      <Feed />
      <Footer text="2023" />
    </div>
  );
}

export default App;


