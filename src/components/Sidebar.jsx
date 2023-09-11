import React from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Sidebar() {
    return (
        <div className="sidebar">
            <header>
                <h1>Direct</h1>
            </header>
            <div
                style={{
                    paddingLeft: "1vw",
                    paddingTop: "30px",
                    paddingBottom: "100px",
                }}
            >
                <section>
                    <h3 className="options-list-headings">Main</h3>
                    <table className="options-list">
                        <tbody>
                            <tr className="option">
                                <td>
                                    <FontAwesomeIcon icon="fa-solid fa-globe" />
                                </td>
                                <td>
                                    <a href="index.html" className="options">
                                        News History
                                    </a>
                                </td>
                            </tr>
                            <tr className="option">
                                <td>
                                    <i className="fa-solid fa-chart-line"></i>
                                </td>
                                <td>
                                    <a href="" className="options">
                                        Analytics
                                    </a>
                                </td>
                            </tr>
                            <tr className="option">
                                <td>
                                    <i className="fa-solid fa-gauge-simple-high"></i>
                                </td>
                                <td>
                                    <a href="" className="options">
                                        Performance
                                    </a>
                                </td>
                            </tr>
                            <tr className="option">
                                <td>
                                    <i className="fa-solid fa-display"></i>
                                </td>
                                <td>
                                    <a href="" className="options">
                                        Websites
                                    </a>
                                </td>
                            </tr>
                            <tr className="option">
                                <td>
                                    <i className="fa-solid fa-language"></i>
                                </td>
                                <td>
                                    <a href="" className="options">
                                        Languages
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <h3 className="options-list-headings">Data</h3>
                    <table className="options-list">
                        <tbody>
                            <tr>
                                <td>
                                    <i className="fa-solid fa-filter"></i>
                                </td>
                                <td>
                                    <a href="" className="options">
                                        Filters
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fa-solid fa-trash-can"></i>
                                </td>
                                <td>
                                    <a href="" className="options">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
            <footer>
                <i className="fa-solid fa-gear"></i>
                <h3>Settings</h3>
            </footer>
        </div>
    );
}

export default Sidebar;
