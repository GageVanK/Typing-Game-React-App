import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import HighScores from "./pages/HighScores";
import GameOver from "./pages/GameOver";
import NavBar from "./components/NavBar";
import { Container } from "./styled-components/Container";
import Global from "./styled-components/Global";
import { Main } from "./styled-components/Main";

function App() {
  return (
    <BrowserRouter>
    
      <Global />
      <Main>
      <Container>

        <NavBar />
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/highScores" element={<HighScores />} />
          <Route path="/gameOver" element={<GameOver />} />
          <Route path="/" element={<Home />} />
        </Routes>
      
      </Container>
      </Main>

    </BrowserRouter>
  );
}

export default App;
