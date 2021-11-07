import { BrowserRouter, Route, Switch} from "react-router-dom";
import './components/App.css'
import React, { useState } from 'react';

import Posts from "./pages/Posts";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { Layout } from 'antd';


function App() {
  const [user, setUser] = useState();
  const {Content} = Layout
  const [token, setToken] = useState()

  /*if(!token){
    return <Login setToken={setToken}/>
  }*/

  return (
    <div>
      <BrowserRouter>
          <Header user={user} />
          <Layout className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{  padding: 24, minHeight:"calc(100vh - 200px)" }}>
          <Content style={{ padding: '0 24px' }}>
              <Switch>
                  <Route exact path="/">
                      <Posts user={user}/>
                  </Route>
                  <Route exact path="/login"  >
                      <Login setUser={setUser} />
                  </Route>
                  <Route exact path="/register" component={Register} />
              </Switch>
          </Content>
          </div>
          </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
