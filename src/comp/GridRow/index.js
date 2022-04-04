import Tile from "../Tile";

export default function GridRow({ rowFormatting }) {
  return (
    <div className="gridrow">
      <Tile tileFormatting={rowFormatting[0]}></Tile>
      <Tile tileFormatting={rowFormatting[1]}></Tile>
      <Tile tileFormatting={rowFormatting[2]}></Tile>
      <Tile tileFormatting={rowFormatting[3]}></Tile>
      <Tile tileFormatting={rowFormatting[4]}></Tile>
    </div>
  );
}
