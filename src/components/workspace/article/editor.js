import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState  } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

class ControlledEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  componentDidMount(){
    const blocksFromHtml = htmlToDraft(`${this.props.data}`);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    if(this.props.data){
       return this.setState({ editorState: EditorState.createWithContent(contentState) })
    }
     this.setState({ editorState: EditorState.createEmpty() })
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });

   const rawContentState = convertToRaw(this.state.editorState.getCurrentContent());
   this.props.onChange(draftToHtml(rawContentState));
  };

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}
      />
    )
  }
}

export default ControlledEditor;
