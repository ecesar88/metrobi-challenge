import "./App.css";

function App() {
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
