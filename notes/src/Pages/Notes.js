import React from "react";
import Material from "../MyComponents/Material";

export default function Notes() {
  document.title = "SCRIPT - NOTES";

  return (
    <div className="mb-5">
      <Material heading="Notes" mtype="nts" />
    </div>
  );
}
