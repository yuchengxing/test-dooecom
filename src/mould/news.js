import React from "react";
import {Link} from 'react-router-dom';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        这是news页
        <div>
          <Link to="home">新闻</Link>
          <Link to="news">新闻</Link>
          <Link to="about">联系我们</Link>
        </div>
      </div>
    );
  }
}
