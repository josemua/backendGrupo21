import Layout from "./components/sidebar/Layout";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/home/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Topbar from "./components/topbar/Topbar";

export function App() {
  return (
    <Router>
      <Topbar/>
      <Route render={(props)=>(
        <Layout {...props}>
          <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/users" component={UserList}/>
                <Route path="/user/:userId" component={User}/>
                <Route path="/newUser" component={NewUser}/>
                <Route path="/newProduct" component={NewProduct}/>
                <Route path="/productList" component={ProductList}/>
                <Route path="/product/:productId" component={Product}/>
              </Switch>
        </Layout>  
      )}/>
    </Router>
  );
}
