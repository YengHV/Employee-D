import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "./Container"


function Table(props) {
  const [table, setTable] = useState({
    results: [],
    search: ""
  });

  useEffect(() => {
    API.getEmployees()
      .then(res => setTable({ results: res.data.results }))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <Container>
        {table.results.map(result => (
          <div className="row" key={result.id.value}>
            <div className="col-sm thumbnail">
              <img src={result.picture.thumbnail} alt={result.name.first}></img>
            </div>
            <div className="col-sm name">
              {result.name.first}{result.name.last}
            </div>
            <div className="col-sm phone">
              {result.phone}
            </div>
            <div className="col-sm email">
              {result.email}
            </div>
            <div className="col-sm dob">
              {result.dob.date.substring(0, 10)}
            </div>
          </div>
        ))}

      </Container>
    </div>
  );
}

export default Table;