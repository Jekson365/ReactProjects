import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Addnote } from "./Addnote";

export const Note = ({ id, text, date, deletenote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <FaTrashAlt
          className="delete-icon"
          size="1.3em"
          onClick={() => deletenote(id)}
        />
      </div>
    </div>
  );
};
