import React from 'react';
// import HeaderComponent from './components/header';
// import SideBarComponent from './components/sidebar';
import "../../index.css";

const LayoutContainer = () => {
    return (
        <div>
            {/* <div>
                <HeaderComponent />

            </div>
            <div>
                <SideBarComponent />
            </div> */}
            <div className="app">
                <input type="checkbox" id="check" />
                <header className="header-container">
                    <label htmlFor="check" id="">
                        <i className="fas fa-bars" id="sidebar-btn"></i>
                    </label>
                    <div className="header-left">
                        <span><h3>RMWB-Cockpit</h3></span>

                    </div>
                    <div className="header-right">
                        <a className="logout-btn">logout</a>
                    </div>

                </header>

                <div className="sidebar">
                    
                        <div>Cockpit</div>
                    
                    <a href="#"><i className="fas fa-home"></i><span>Dashboard</span></a>
                    <a href="#"><i className="fas fa-address-card"></i><span>360 Feature</span></a>
                    <a href="#"><i className="fas fa-chart-line"></i><span>Customers</span></a>
                    <a href="#"><i className="fab fa-amazon-pay"></i><span>Drag</span></a>
                    <a href="#"><i className="fas fa-star"></i><span>List</span></a>
                </div>

                <div className="container">
                    Main Containersss
            
      </div>


            </div>
        </div>
    )
}

export default LayoutContainer;