import React from "react";
import { Link } from "react-router-dom";
import RichTextEditor from "../richTextEditor/richTextEditor";
// import TextEditor from "../textEditor/textEditor.component";
import AddProject from "./input/addProject.component";
import Cancel from "./input/cancel.component";
import { Description } from "./input/description.component";
import Subject from "./input/subject.component";
import UploadImage from "./input/uploadImage.component";

export const ProjectDescription = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-xl">
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <RichTextEditor />
          {/* <TextEditor /> */}
          <Subject />
          <Description />
          <div className="flex items-center justify-between">
            <UploadImage />
            <AddProject />
            <Cancel />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectDescription;
