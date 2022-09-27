import * as React from "react";

interface InventoryProps {}

interface InventoryState {}

class Inventory extends React.Component<InventoryProps, InventoryState> {
  render() {
    return (
      <div className="flex bg-yellow-600 h-screen w-3/4 fixed right-0 top-0"></div>
    );
  }
}

export default Inventory;
