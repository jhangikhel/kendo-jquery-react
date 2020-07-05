
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
    showAreaChart() {
        $("#grid").kendoChart({
            title: {
                text: "Gross domestic product growth \n /GDP annual %/"
            },
            legend: {
                position: "bottom"
            },
            seriesDefaults: {
                type: "area",
                area: {
                    line: {
                        style: "smooth"
                    }
                }
            },
            series: [{
                name: "India",
                data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
            }, {
                name: "World",
                data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
            }, {
                name: "Haiti",
                data: [-0.253, 0.362, -3.519, 1.799, 2.252, 3.343, 0.843, 2.877, -5.416, 5.590]
            }],
            valueAxis: {
                labels: {
                    format: "{0}%"
                },
                line: {
                    visible: false
                },
                axisCrossingValue: -10
            },
            categoryAxis: {
                categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
                majorGridLines: {
                    visible: false
                },
                labels: {
                    rotation: "auto"
                }
            },
            tooltip: {
                visible: true,
                format: "{0}%",
                template: "#= series.name #: #= value #"
            }
        });
    }
    showBarChart() {
        $("#grid").kendoChart({
            title: {
                text: "Kendo Chart Example"
            },
            series: [{
                type: "bar",
                name: "Example Series",
                data: [200, 450, 300, 125]
            }],
            categoryAxis: {
                categories: [2000, 2001, 2002, 2003]
            }
        });
    }
    showBubbleChart() {
        var salesData = [{
            numberOfSales: 10,
            volume: 12000,
            marketShare: 0.1
        }, {
            numberOfSales: 24,
            volume: 62000,
            marketShare: 0.25
        }];

        $("#grid").kendoChart({
            dataSource: {
                data: salesData
            },
            series: [{
                name: "Sales",
                type: "bubble",
                xField: "numberOfSales",
                yField: "volume",
                sizeField: "marketShare"
            }]
        });
    }
    showDifferentThemeChart() {
        $("#grid").kendoChart({
            title: {
                text: "Internet Users"
            },
            legend: {
                position: "bottom"
            },
            panes: [
                { name: "top-pane", background: "black" },
            ],
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
                            <div className="col-md-6 col-xs-12">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="#">Sales</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 text-right">
                                <a className="btn btn-default">Send</a>
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
                                        <a className="btn btn-default" onClick={this.showAreaChart}>YTD</a>
                                        <a className="btn btn-default" onClick={this.showDifferentThemeChart}>WTD</a>
                                        <a className="btn btn-default" onClick={this.showBarChart}>QTD</a>
                                        <a className="btn btn-default" onClick={this.showBubbleChart}>last 30 days</a>
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
