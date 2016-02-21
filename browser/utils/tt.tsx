import * as React from 'react';
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


export default CommentBox