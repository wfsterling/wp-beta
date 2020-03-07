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
    // fetch first sheet of google sheet:
    fetch("https://sheetsu.com/apis/v1.0/2415778b5813")
    // fetch specific sheet of google sheet:
    // fetch("https://sheetsu.com/apis/v1.0/2415778b5813/sheets/Comments")
      .then( (response) => {
        return response.json()
      }).then( (json) => {
        this.setState({data: json});
      });
  }

  renderData() {
    return this.state.data.map((row) =>
    // Get Comments from Google Sheet
      // <div key={row.id}>{row.address} {row.date} {row.comment} {row.rating}</div>
    // Get Gigs from Google Sheet
     <div key={row.id}>{row.business_name} {row.hourly_rate} {row.category} {row.description} {row.details} {row.rating}</div>
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
