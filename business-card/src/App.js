import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Profile from './components/ProfilePicture';
import ContactButtons from './components/ContactButtons';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
      <div className='app--app'>
        <body className='app--body'>
          <Profile/>
          <Header/>
          <ContactButtons/>
          <Content/>
        </body>
          <Footer/>

      </div>
  );
}

export default App;
