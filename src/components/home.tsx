import * as React from "react";

interface HomeProps {}

interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <div className="flex bg-black h-screen w-3/4 fixed right-0 top-0"></div>
    );
  }
}

export default Home;
