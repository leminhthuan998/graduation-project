import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomeRoutes } from './routes';
import Loading from './app/component/page/Loading'

class FrontEndRoute extends Component {
    getRoute = () => {
        return HomeRoutes.map((route, index) => {
            console.log('route', route)
            const { id, component: BaseComponent, exact, fullScreen } = route;
            return (
                <Route
                    key={index}
                    exact={exact}
                    path={id}
                    render={(props) => {
                        return (
                            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }} className="container">
                                <BaseComponent />
                            </div>
                        )
                    }}
                />
            );
        });
    }

    render() {
        console.log(HomeRoutes)
        const routes = this.getRoute();
        return (
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Redirect  from="/home" to="/home/dashboard" exact />
                    {routes}
                </Switch>
            </Suspense >
        );
    }
}

export default FrontEndRoute;