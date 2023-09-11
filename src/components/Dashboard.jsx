import React from "react";
import "./Dashboard.css";
const Dashboard = () => {
    return (
        <div>
            <div class="mainpart">
                <div class="mainpart-header">
                    <div>
                        <h1>DashBoard</h1>
                    </div>
                    <div class="mainpart-header-components">
                        <div class="mainpart-header-component">
                            <i class="material-icons">forum</i>
                        </div>
                        <div class="mainpart-header-component">
                            <i class="material-icons">notifications_drive</i>
                        </div>
                        <div class="mainpart-header-component">
                            <i class="material-icons">account_circle</i>
                        </div>
                        <div class="mainpart-header-component">
                            <i class="material-icons">logout</i>
                        </div>
                    </div>
                </div>
                <div class="mainpart-cards">
                    <div class="mainpart-card">
                        <div class="mainpart-card-number">1210+</div>
                        <div class="mainpart-card-label">News Articles</div>
                    </div>
                    <div class="mainpart-card">
                        <div class="mainpart-card-number">200+</div>
                        <div class="mainpart-card-label">Websites</div>
                    </div>
                    <div class="mainpart-card">
                        <div class="mainpart-card-number">120+</div>
                        <div class="mainpart-card-label">Videos</div>
                    </div>
                </div>
                <div class="mainpart-space"></div>
            </div>
        </div>
    );
};

export default Dashboard;
