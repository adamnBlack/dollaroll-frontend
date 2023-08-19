import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import AboutUs from './core/AboutUs';
import Charitable from './core/Charitable';
import Post from "./page/Blog/Post";
import CreatePost from "./page/Blog/CreatePosts";
import EditPost from "./page/Blog/EditPost";
import PostsList from "./page/Blog/PostsList";
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Shop from './core/Shop';
import Product from './core/Product';
import Cart from './core/Cart';
import Orders from './admin/Orders';
import Profile from './user/Profile';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';
import NotFound from './core/NotFound';
import Menu from './core/Menu';
import "./stylesheets/index.css";
const Routes = () => {
  return (
    <div className="container">
      <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/shop' component={Shop} exact />
        <Route path='/signin' component={Signin} exact />
        <Route path='/signup' component={Signup} exact />
        <Route path='/blog-list' component={Charitable} exact />
        <Route path="/posts" exact component={PostsList} />
        <Route path="/posts/new/" exact component={CreatePost} />
        <Route path="/posts/:id" exact component={Post} />
        <Route path="/posts/:id/edit" exact component={EditPost} />
        <Route path='/about-us' component={AboutUs} exact />
        <PrivateRoute path='/user/dashboard' component={Dashboard} exact />
        <AdminRoute path='/admin/dashboard' component={AdminDashboard} exact />
        <AdminRoute path='/create/category' component={AddCategory} exact />
        <AdminRoute path='/create/product' component={AddProduct} exact />
        <Route path='/product/:productId' component={Product} exact />
        <Route path='/cart' component={Cart} exact />
        <AdminRoute path='/admin/orders' component={Orders} exact />
        <PrivateRoute path='/profile/:userId' component={Profile} exact />
        <AdminRoute path='/admin/products' component={ManageProducts} exact />
        <AdminRoute
          path='/admin/product/update/:productId'
          component={UpdateProduct}
          exact
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    </div>
  );
};

export default Routes;
