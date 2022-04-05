import React from "react";
import GridRow from "../GridRow";

export default function Grid({ gridFormatting }) {
  return (
    <div className="grid">
      <GridRow rowFormatting={gridFormatting[0]} ></GridRow>
      <GridRow rowFormatting={gridFormatting[1]} ></GridRow>
      <GridRow rowFormatting={gridFormatting[2]} ></GridRow>
      <GridRow rowFormatting={gridFormatting[3]} ></GridRow>
      <GridRow rowFormatting={gridFormatting[4]} ></GridRow>
      <GridRow rowFormatting={gridFormatting[5]} ></GridRow>
    </div>
  );
}
