
import React, { Component } from 'react';
import $ from 'jquery';
import "kendoChart";

class Login extends Component {
    componentDidMount() {
        $("#grid").kendoChart({
            title: {
                text: "Internet Users"
            },
            legend: {
                position: "bottom"
            },
            seriesDefaults: {
                type: "line"
            },
            series: [{
                name: "World",
                data: [15.7, 16.7, 20, 23.5, 26.6]
            }, {
                name: "United States",
                data: [67.96, 68.93, 75, 74, 78]
            }],
            valueAxis: {
                labels: {
                    format: "{0}%"
                }
            },
            categoryAxis: {
                categories: [2005, 2006, 2007, 2008, 2009]
            }
        });
    }
    render() {
        return (
            <div>
                <header className="header">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">Sales</a>
                            </div>

                        </div>
                    </nav>

                </header>
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">




                    <div className="carousel-inner" role="listbox">
                        <div className="item active carousel-item " >


                            <div className="tab-holder">

                                <ul className="nav nav-tabs">
                                    <li className="active"><a data-toggle="tab" href="#home">Client Revenue</a></li>
                                    <li><a data-toggle="tab" href="#menu1">Sales Credit</a></li>
                                    <li><a data-toggle="tab" href="#menu2">Client frenchisee Value</a></li>
                                </ul>



                                <div className="tab-content">

                                    <div className="tabbtns text-right">
                                        <a className="btn btn-default">YTD</a>
                                        <a className="btn btn-default">QTD</a>
                                        <a className="btn btn-default">last 30 days</a>
                                    </div>

                                    <div id="home" className="tab-pane fade in active">
                                        <h3>Client Revenue</h3>
                                        <div id="grid"></div>
                                    </div>
                                    <div id="menu1" className="tab-pane fade">
                                        <h3>Sales Credit</h3>
                                        <p>Some content in menu 1.</p>
                                    </div>
                                    <div id="menu2" className="tab-pane fade">
                                        <h3>Menu 2</h3>
                                        <p>Client frenchisee Value</p>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className="item carousel-item " >


                            <div className="table-holder">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr className="info">
                                            <th> </th>
                                            <th>YTD</th>
                                            <th>PYTD</th>
                                            <th>% Charge</th>
                                            <th>MTD</th>
                                            <th>WTD</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> Sale credit</td>
                                            <td>#####</td>
                                            <td>###</td>
                                            <td>#####</td>
                                            <td>###</td>
                                            <td>####</td>
                                        </tr>
                                        <tr>
                                            <td> Sale credit</td>
                                            <td>#####</td>
                                            <td>###</td>
                                            <td>#####</td>
                                            <td>###</td>
                                            <td>####</td>
                                        </tr>
                                        <tr>
                                            <td> Sale credit</td>
                                            <td>#####</td>
                                            <td>###</td>
                                            <td>#####</td>
                                            <td>###</td>
                                            <td>####</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="item carousel-item " >


                            <div className="tab-holder">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a data-toggle="tab" href="#home">Client Revenue</a></li>
                                    <li><a data-toggle="tab" href="#menu1">Sales Credit</a></li>
                                    <li><a data-toggle="tab" href="#menu2">Client frenchisee Value</a></li>
                                </ul>

                                <div className="tab-content">
                                    <div id="home" className="tab-pane fade in active">
                                        <h3>HOME</h3>
                                        <p>Some content.</p>
                                    </div>
                                    <div id="menu1" className="tab-pane fade">
                                        <h3>Menu 1</h3>
                                        <p>Some content in menu 1.</p>
                                    </div>
                                    <div id="menu2" className="tab-pane fade">
                                        <h3>Menu 2</h3>
                                        <p>Some content in menu 2.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev slide-btn prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next slide-btn next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


                <footer className="footer"></footer>

            </div>
        );
    }
}

export default Login;
