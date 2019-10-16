import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function LoadCircularProgress(props) {
  const { className, size } = props;

  return (
    <div>
      <CircularProgress className={className} size={size} />
    </div>
  );
}
