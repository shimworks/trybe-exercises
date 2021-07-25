import React from 'react';
import '../Css/Home.css'


class Home extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <>
      <section >
        <div className="backgroundImage">
          <div className="text">
            <h1>Caio Takeshi Shimizo</h1>
            <p>Entusiasta na criação de jogos e programação</p>
          </div>
        </div>
        <div className="backgroundImage">
          <div className="text">
          <h1>Habilidades</h1>
          <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Node</li>
            <li>Git</li>
          </ul>
          </div>
        </div>
      </section>
      </>
    );
  };
}

export default Home;
