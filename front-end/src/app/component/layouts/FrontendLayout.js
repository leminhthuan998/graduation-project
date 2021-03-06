import React, { Component } from 'react';
import NavBar from "../../../feature/nav/NavBar";
import FrontEndRoute from '../../../FrontEndRoute'
import Header from '../layouts/HeaderPage'
import Footer from '../layouts/Footer'
class FrontEndLayout extends Component {

    render() {
        return (
            <div style={{
                flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden',
            }}>
                <div style={{
                    flex: 1, display: 'block', background: '#fff'
                }} />
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column'
                }}>
                    <Header/>
                    <div style={{
                        flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column'
                    }}>
                        <FrontEndRoute />
                    </div>
                    <Footer />

                </div>
            </div>
        )
    }
}


export default FrontEndLayout;