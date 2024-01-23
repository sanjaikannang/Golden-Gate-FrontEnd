import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <ReactLoading type="spokes" color="#0000FF" height={100} width={100} />
    </div>
  );
};

export default Loading;
