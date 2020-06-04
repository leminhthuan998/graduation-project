import React, { Component, Suspense } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import FrontEndLayout from '../component/layouts/FrontendLayout'


export class LayoutPage extends Component {

    render() {
        return (
            <div className="layout-page">
                <Switch>
                    <Redirect from="/" to="/home" exact />
                    {/* <Route path="/admin" component={AdminLayout} /> */}
                    <Route path="/home" component={FrontEndLayout} />                    
                </Switch>
            </div>
        );

    }
}



export default LayoutPage;