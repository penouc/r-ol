import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import { Home } from "./layouts/home";
import { Admin } from "./layouts/admin";
import "./App.css";
import "antd/dist/antd.css";

const { Sider } = Layout;

class App extends Component {
  state = {
    collapsed: true
  };
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              zIndex: 1
            }}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="ligth" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="user" />
                  <span className="home">HOME</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/admin">
                  <Icon type="video-camera" />
                  <span className="admin">ADMIN</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 64 }}>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
