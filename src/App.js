import { Button } from 'bootstrap';
import React, { Component } from 'react'

const App = () => {
  var a="welocme to code creator channel"
  var b=10;
  var c=20;
  return (
    <div>
      {/* point-1 use flower braces inside angulare bracess, the flower bracess which is present inside angular braces give output */}
      <p>{a}</p>
      {/* point-2 check condition inde flower braces on html written part, based on condition element want to display */}
      {
        b>10 ? <button>b is big number</button>: <button>c is big number</button>
      }
     
      {/* point-3 for assign js varibale to attributs  */}
      <button className={c>b? "loki":"murali"}>assign class name by uisng terniary operator</button>
    </div>
  )
}

export default App
// we can do any type of js action inside flower bracess 
// 1)condition checking
// 2)variable values assign 
// 3)assign class names by using jsconditions.
// 4)assign js variable values to id and attribute of html elemnt

{/* <td>{item.SubscriptionStatus == 'Active' ? <span className="badge badge-success">Active</span> : <span className="badge badge-danger">Expired</span>}</td> */}
// tag names are case sensive want to explain this point Button - compontet name ,button class name
{/* <Button>b is big number</button>: <button>c is big number</button> */}
// </br> we keep slash at starting for Component ,end fof self close tag
// if we wite to flower braces bedide we did not get some default styles like html tags
