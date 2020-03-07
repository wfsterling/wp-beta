import React, { Component } from 'react';

// Read whole spreadsheet
class ReadSheets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://sheetsu.com/apis/v1.0/2415778b5813")
      .then( (response) => {
        return response.json()
      }).then( (json) => {
        this.setState({data: json});
      });
  }

  renderData() {
    return this.state.data.map((row) =>
     <div key={row.Address}>{row.Date} {row.Comment} {row.Rating}</div>
    );
  }

  render() {
    return (
      <div>
        {this.renderData()}
      </div>
    );
  }
}

export default ReadSheets
