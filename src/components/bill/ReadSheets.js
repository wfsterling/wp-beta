import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import GigCard from './GigCard';


const divStyle = {
  padding: '1.2em',
}
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
    // <div key={row.id}>{row.business_name} {row.hourly_rate} {row.category} {row.description} {row.details} {row.rating}</div>

      <GigCard
        key={row.business_name}
        business={row.business_name}
        rate={row.hourly_rate}
        category={row.category}
        description={row.description}
      />
    );
  }

  render() {
    return (
      <Grid container spacing={3} style={divStyle}>
        {this.renderData()}
        
      </Grid>
    );
  }
}

export default ReadSheets
