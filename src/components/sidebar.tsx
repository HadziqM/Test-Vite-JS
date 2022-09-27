import * as React from "react";

interface SidebarProps {
  home: any;
  inventory: any;
  calculator: any;
  history: any;
  user: any;
  setting: any;
}

interface SidebarState {}

class Sidebar extends React.Component<SidebarProps, SidebarState> {
  render() {
    return (
      <div className="flex flex-col justify-between items-center bg-blue-800 h-screen w-1/4 py-16">
        <div className="flex flex-col items-center gap-4">
          <img src="/vite.svg" className="w-16 h-16" alt="Vite logo" />
          <h1
            className="text-2xl font-bold text-blue-300 cursor-pointer"
            onClick={this.props.home()}
          >
            Home
          </h1>
          <h1
            className="text-2xl font-bold text-blue-300 cursor-pointer"
            onClick={this.props.inventory()}
          >
            Inventory
          </h1>
          <h1
            className="text-2xl font-bold text-blue-300 cursor-pointer"
            onClick={this.props.calculator()}
          >
            Calculator
          </h1>
          <h1
            className="text-2xl font-bold text-blue-300 cursor-pointer"
            onClick={this.props.history()}
          >
            History
          </h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl cursor-pointer" onClick={this.props.user()}>
            🙍‍♂️
          </h1>
          <h1
            className="text-3xl cursor-pointer"
            onClick={this.props.setting()}
          >
            ⚙️
          </h1>
        </div>
      </div>
    );
  }
}

export default Sidebar;
