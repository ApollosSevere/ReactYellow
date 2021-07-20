import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import logo from './logo.svg';
import Home from './components/Home/Home';
import Header from './components/utils/Header/Header';
import ProductDetail from './components/productDetail/ProductDetail';

import './App.css';
// import '../../assets/main.css'

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <div className="stuff">
          <Switch>

            {/* <Route path="/">
              <Home />
            </Route> */}

            {/* <Route exact path="/produtDetail">
              <ProductDetail />
            </Route> */}

            <Route path="/" exact component={Home}/>
            <Route path="/productDetail" component={ProductDetail}/>

          </Switch>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
