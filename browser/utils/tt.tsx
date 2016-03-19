import * as React from 'react';
import * as render from "react-dom/server";
interface CommentType {
  text: string
}

interface State { }

class CommentBox extends React.Component<CommentType, State> {
  static propTypes: Object = {
    text: React.PropTypes.string.isRequired
  }
  render() {
    return (
      <h1>hoge</h1>
    )
  }
}

console.log(render.renderToString(<CommentBox text={"hoge"}/>));


export default CommentBox