import * as React from "react";
import Sidebar from "./sidebar";
import Home from "./home";
import Inventory from "./inventory";
interface FullpagesProps {}

interface FullpagesState {}

class Fullpages extends React.Component<FullpagesProps, FullpagesState> {
  state = {
    pages: <Home />,
  };
  render() {
    return (
      <div>
        <Sidebar
          home={this.home}
          inventory={this.inventory}
          calculator={this.calculator}
          history={this.history}
          user={this.user}
          setting={this.setting}
        />
        {this.state.pages}
      </div>
    );
  }
  home = () => {
    console.log(this);
    this.setState({ pages: <Home /> });
  };
  inventory = () => {
    this.setState({ pages: <Inventory /> });
  };
  calculator = () => {};
  history = () => {};
  user = () => {};
  setting = () => {};
}

export default Fullpages;
