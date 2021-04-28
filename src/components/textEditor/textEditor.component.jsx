import React, { Component, Fragment } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import AddProject from "../project-description/input/addProject.component";

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      content: [],
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const hashConfig = {
      trigger: "#",
      separator: " ",
    };
    const { editorState, content } = this.state
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState, hashConfig);
    console.log("MARKUP", markup);
    console.log("ARRAY DI BLOCCHIs", rawContentState);

    this.state.content = markup;
    console.log("Contenuto---", content);
    localStorage.setItem("content", content);
    console.log("Content in Local Storage", localStorage.getItem("content"));
    console.log("TOKEN", localStorage.getItem("token"));
    // <AddProject contents={content}/>
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
