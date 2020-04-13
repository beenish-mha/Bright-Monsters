import React from "react";
function Tasks(props) {
  const child = props.location.aboutProps;

  return (
    <div>
      <h1>assign tasks here</h1>
      <h4>
        {child.name} {child.age}
      </h4>
    </div>
  );
}

export default Tasks;
