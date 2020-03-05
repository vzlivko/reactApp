import React, { useState } from "react";
import {
  EditorState,
  RichUtils,
  AtomicBlockUtils,
  convertFromRaw,
  convertToRaw
} from "draft-js";
import Editor from "draft-js-plugins-editor";
import { mediaBlockRenderer } from "./mediaBlockRenderer";
import "./style.css";
import { Button } from "@material-ui/core";

const axios = require("axios");

const About = () => {
  let initialEditorState = null;
  const storeRaw = localStorage.getItem("draftRaw");

  const [draftState, setDraftState] = useState(EditorState.createEmpty());
  if (storeRaw) {
    const rawContentFromStore = convertFromRaw(JSON.parse(storeRaw));
    initialEditorState = EditorState.createWithContent(rawContentFromStore);
  } else {
    initialEditorState = EditorState.createEmpty();
  }
  const [editorState, setEditorState] = useState(initialEditorState);
  const [hidden, setHidden] = useState(true);

  const handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onAddImage = e => {
    e.preventDefault();
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
      setEditorState(
        AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
      );
    }
  };

  const setTextStyle = style => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const saveData = () => {
    const contentRaw = convertToRaw(editorState.getCurrentContent());
    localStorage.setItem("draftRaw", JSON.stringify(contentRaw));
    axios
      .post("https://my-json-server.typicode.com/vzlivko/testAPI/posts", {
        title: contentRaw
      })
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };

  const getData = () => {
    axios
      .get("https://my-json-server.typicode.com/vzlivko/testAPI/posts/2")
      .then(res => {
        setDraftState(
          EditorState.createWithContent(convertFromRaw(res.data.title))
        );
        setHidden(false);
      });
  };

  return (
    <div className="content">
      <div className="styleButtons">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setTextStyle("UNDERLINE")}
        >
          <u>Underline</u>
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setTextStyle("BOLD")}
        >
          <b>Bold</b>
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setTextStyle("ITALIC")}
        >
          <em>Italic</em>
        </Button>
      </div>
      <div className="controlButtons">
        <Button variant="contained" color="primary" onClick={onAddImage}>
          Load image
        </Button>
        <Button variant="contained" onClick={saveData}>
          Send data on server
        </Button>
        <Button variant="outlined" color="primary" onClick={getData}>
          Post message
        </Button>
      </div>
      <div className="draftEditor">
        <Editor
          blockRendererFn={mediaBlockRenderer}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
          margin="20px"
        />
      </div>
      <div id="title">Your post:</div>
      <div className="postedDraft" hidden={hidden}>
        <Editor
          readOnly
          blockRendererFn={mediaBlockRenderer}
          editorState={draftState}
        />
      </div>
    </div>
  );
};

export default About;
