import React from "react";
import { useParams } from "react-router-dom";

const Vlog = () => {
  let { id, resourceId } = useParams();
  return (
    <div>
      <h1>Vlog</h1>
      <p>Tópico {id}</p>
      <p>Recurso {resourceId}</p>
    </div>
  );
};
export default Vlog;
