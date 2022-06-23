import "./App.css";

function App() {
  return (
    <div id="rootContainer">
      <div id="container">
        <div className="flexItem" id="header">
          Header
        </div>

        <div id="contentBody">
          <div className="flexRow h100">
            <div className="flexItem" id="hero">
              Hero
            </div>

            <div className="flexItem" id="mainContent">
              Main Content
            </div>
          </div>

          <div className="flexRow h100">
            <div className="flexItem" id="sidebar">
              Sidebar
            </div>

            <div className="flexItem" id="extraContent">
              Extra Content
            </div>
          </div>

          <div className="flexRow h100">
            <div className="flexItem" id="relatedImages">
              Related Images
            </div>

            <div className="flexItem" id="relatedPosts">
              Related Posts
            </div>
          </div>
        </div>

        <div className="flexItem" id="footer">
          Footer
        </div>
      </div>
    </div>
  );
}

export default App;
