import React from "react";
import css from "./todoadder.css";

const TodoAdder = (props) => {
  var [listitem, Setlistitem] = React.useState({
    title: props.title,
    description: props.description,
  });

  function ValChanege(event) {
    var value = event.target.value;
    var name = event.target.name;
    Setlistitem((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  function Submit() {
    props.AddListItem({ id: Date.now().toString(), ...listitem });
    Setlistitem({
      title: "",
      description: "",
    });
    return;
  }

  return (
    <div>
      <form>
        <input
          onChange={ValChanege}
          name="title"
          placeholder="Title"
          value={listitem.title}
        />
        <textarea
          onChange={ValChanege}
          name="description"
          placeholder="Take a note..."
          rows="3"
          value={listitem.description}
        />
        <button type="button" onClick={Submit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoAdder;
