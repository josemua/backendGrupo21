import Layout from "./components/sidebar/Layout";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/home/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

export function App() {
  return (
    <Router>
      <Route render={(props)=>(
        <Layout {...props}>
          <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="userList" component={UserList}/>
                <Route path="/users" component={User}/>
                <Route path="/newUser" component={NewUser}/>
                <Route path="/productList" component={ProductList}/>
                <Route path="/product" component={Product}/>
                <Route path="/newProduct" component={NewProduct}/>
          </Switch>
        </Layout>  
      )}/>
    </Router>
  );
}
