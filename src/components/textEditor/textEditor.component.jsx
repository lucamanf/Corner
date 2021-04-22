import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    // const hashConfig = {
    //   trigger: "#",
    //   separator: " ",
    // };
    const { editorState } = this.state;
    // const rawContentState = convertToRaw(editorState.getCurrentContent());

    // const markup = draftToHtml(rawContentState, hashConfig);
    return (
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
      />
    );
  }
}
