import React, { Component } from "react";
import "./Toolbar.css";

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const { generateArray } = this.props;

        generateArray(87);

    }
}