import React from 'react'
import { createRoutesFromElements } from 'react-router-dom'

const Table = () => {
    // const arr=["lokesh","dinesh","gowtham"]
  return (
    <div ClassName="table" >
      <table>
        <tr >
            <th >S.no</th>
            <th >CIP Title</th>
            <th>Sub Title</th>
            <th>ISBN</th>
            <th>PhoneNumber</th>
            <th style={{width:"8em", background:"yellow"}}>status</th>
            <th>Action</th>
        </tr>
        <tr>
            <td >1</td>
            <td>kkkk</td>
            <td>karthick</td>
            <td>isbn1256</td>
            <td>1234567890</td>
            <td>approved</td>
            <td >pedning</td>
           
        </tr>
        <tr>
            <td>2</td>
            <td>kkkk</td>
            <td>karthick</td>
            <td>isbn1256</td>
            <td>1234567890</td>
            <td>approved</td>
            <td>pedning</td>
        </tr>
        <tr>
            <td style={{height:"8em", background:"hotpink"}}>3</td>
            <td>kkkk</td>
            <td>karthick</td>
            <td>isbn1256</td>
            <td>1234567890</td>
            <td>approved</td>
            <td>pedning</td>
        </tr>
        <tr>
            <td>4</td>
            <td>kkkk</td>
            <td>karthick</td>
            <td>isbn1256</td>
            <td>1234567890</td>
            <td>approved</td>
            <td>pedning</td>
        </tr>
        <tr>
            <td>5</td>
            <td>kkkk</td>
            <td>karthick</td>
            <td>isbn1256</td>
            <td>1234567890</td>
            <td>approved</td>
            <td>pedning</td>
        </tr>
        <tr>
            <td>6</td>
            <td>kkkk</td>
            <td>karthick</td>
            <td>isbn1256</td>
            <td>1234567890</td>
            <td>approved</td>
            <td>pedning</td>
        </tr>
        <tr>
            <td>7</td>
            <td>kkkk</td>
            <td>karthick</td>
            <td>isbn1256</td>
            <td>1234567890</td>
            <td>approved</td>
            <td>pedning</td>
        </tr>
        <tr>
            <td>8</td>
            <td>kkkk</td>
            <td>karthick</td>
            <td>isbn1256</td>
            <td>1234567890</td>
            <td>approved</td>
            <td>pedning</td>
        </tr>
      </table>
    </div>
  )
}
// note:point:-width=column ,height=row;
export default Table

