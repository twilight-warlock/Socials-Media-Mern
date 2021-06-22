import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/layout/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Provider } from "react-redux";
import store from "./store"

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Route exact path="/" component={LandingPage} />
					<section className="container">
						<Switch>
							<Route exact path="/login" component={Login} />
							<Route exact path="/register" component={Register} />
						</Switch>
					</section>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
