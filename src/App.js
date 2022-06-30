import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import HighScores from "./pages/HighScores";
import GameOver from "./pages/GameOver";
import NavBar from "./components/NavBar";
import { Container } from "./styled-components/Container";
import GlobalStyle from "./styled-components/Global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
    
      <NavBar />
      
      <Container>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/highScores" element={<HighScores />} />
        <Route path="/gameOver" element={<GameOver />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </Container>
    
    </BrowserRouter>
  );
}

export default App;
