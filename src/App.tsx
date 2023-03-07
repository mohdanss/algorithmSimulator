import './App.css';

// set the theme
const theme = 'dark';

// set the theme class
const themeClass = theme === 'dark' ? 'dark-theme' : 'light-theme';

// set the theme class on the body
document.body.classList.add(themeClass);

const App = () => {
  return (
    <div className='App'>
      Hello World!
    </div>
  );
}

export default App;