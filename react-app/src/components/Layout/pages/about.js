import React from "react";
import {
  EditorState,
  RichUtils,
  AtomicBlockUtils,
  convertFromRaw,
  convertToRaw
} from "draft-js";
import Editor from "draft-js-plugins-editor";
import { mediaBlockRenderer } from "../pages/mediaBlockRenderer";
import "../../../App.css";

class About extends React.Component {
  constructor(props) {
    super(props);

    let initialEditorState = null;
    const storeRaw = localStorage.getItem("draftRaw");

    if (storeRaw) {
      const rawContentFromStore = convertFromRaw(JSON.parse(storeRaw));
      initialEditorState = EditorState.createWithContent(rawContentFromStore);
    } else {
      initialEditorState = EditorState.createEmpty();
    }

    this.state = {
      editorState: initialEditorState
    };
  }

  onChange = editorState => {
    this.setState({
      editorState
    });
  };

  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  onURLChange = e => this.setState({ urlValue: e.target.value });

  focus = () => this.refs.editor.focus();

  onAddImage = e => {
    e.preventDefault();
    const editorState = this.state.editorState;
    const urlValue = window.prompt("Paste Image Link");
    if (urlValue) {
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity(
        "image",
        "IMMUTABLE",
        { src: urlValue }
      );
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      const newEditorState = EditorState.set(
        editorState,
        { currentContent: contentStateWithEntity },
        "create-entity"
      );
      this.setState({
        editorState: AtomicBlockUtils.insertAtomicBlock(
          newEditorState,
          entityKey,
          " "
        )
      });
    }
  };

  onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  };

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };

  onItalicClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  };

  saveData = () => {
    var contentRaw = convertToRaw(this.state.editorState.getCurrentContent());
    localStorage.setItem("draftRaw", JSON.stringify(contentRaw));
  };
  //editorContainer
  render() {
    return (
      <div className="content">
        <div className="menuButtons">
          <button onClick={this.onUnderlineClick}>
            <u>Underline</u>
          </button>
          <button onClick={this.onBoldClick}>
            <b>Bold</b>
          </button>
          <button onClick={this.onItalicClick}>
            <em>Italic</em>
          </button>
          <button onClick={this.onAddImage}>Load image</button>
          <button onClick={this.saveData}>Save data</button>
        </div>
        <div className="editors">
          <Editor
            blockRendererFn={mediaBlockRenderer}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            plugins={this.plugins}
            ref="editor"
          />
        </div>
      </div>
    );
  }
}

export default About;
