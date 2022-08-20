import React from "react";

import Material from "../MyComponents/Material";

export default function Previousyear() {
  document.title = "SCRIPT - PYQs";

  return (
    <div className="mb-5">
      <Material heading="Previous Year Questions" mtype="pyq" />
    </div>
  );
}
