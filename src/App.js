import GlobalStyle from './theme/globalStyle';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
