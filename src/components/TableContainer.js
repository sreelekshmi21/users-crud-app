import React, { useEffect, useState } from "react";



export default function TableContainer(){
  
    

  return (
    <div className="table_container">
      <table className="table_main">
        <tr className="table_row">
          <th>PARTICULARS</th>
          <th>
            <span className="main_span">
            <span className="main_span_title">Opening Balance</span>
            <span className="main_span_content">
              <span>Dr</span>
              <span>Cr</span>
            </span>
            </span>
          </th>
          <th><span className="main_span">
            <span className="main_span_title">Transactions</span>
            <span className="main_span_content">
              <span>Dr</span>
              <span>Cr</span>
            </span>
            </span></th>
          <th><span className="main_span">
            <span className="main_span_title">Closing Balance</span>
            <span className="main_span_content">
              <span>Dr</span>
              <span>Cr</span>
            </span>
            </span></th>
        </tr>
        <tr className="table_row">
          <td>Purchases</td>
          
          
        </tr>
      </table>
    </div>
  );
}

