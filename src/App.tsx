import "./App.css";
import {
  asyncTimer,
  eggFloorFinder,
  findDuplicateItems,
  lexicalBracketParser,
} from "../questions";

function App() {
  let letters = ["a", "b", "c", "d", "e"];
  console.log(`Async Timer > ${letters}`);
  asyncTimer(letters);

  const floors = Array.from({ length: 100 }, (_, idx) => idx + 1);
  console.log(`Egg Floor Finder > ${floors}`);
  eggFloorFinder(floors);

  let numbers = Array.from({ length: 1000000 }, (_, idx) => idx + 1);
  const randomIndex = 1982;
  numbers[randomIndex] = numbers[randomIndex - 1];
  console.log(`Find duplicate items`);
  findDuplicateItems(numbers);

  const string = "{([])}";
  console.log(`Lexical Bracket Parser > ${string}`);
  lexicalBracketParser(string);

  return (
    <div id="rootContainer">
      <div id="container">
        <div className="beautify" id="header">
          Header
        </div>

        <div id="contentBody">
          <div className="row">
            <div className="column">
              <div className="flexItem beautify" id="hero">
                Hero
              </div>

              <div className="flexItem beautify" id="sidebar">
                Sidebar
              </div>
            </div>

            <div className="column">
              <div className="flexItem beautify" id="mainContent">
                Main Content
              </div>

              <div className="flexItem beautify" id="extraContent">
                Extra Content
              </div>
            </div>
          </div>

          <div id="lowerContainer" className="row">
            <div className="flexItem beautify" id="relatedImages">
              Related Images
            </div>

            <div className="flexItem beautify" id="relatedPosts">
              Related Posts
            </div>
          </div>
        </div>

        <div className="beautify" id="footer">
          Footer
        </div>
      </div>
    </div>
  );
}

export default App;
