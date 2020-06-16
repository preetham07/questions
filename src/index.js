import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Router, Route, Link, Switch} from 'react-router-dom';
import QA from './Components/QA';
import NoMatch from './Components/notfound';
const Root = () => {
return (
<BrowserRouter basename={"/Celegence"}>
<div>

<Switch>
<Route path="/QA"  render={(props) => (<QA {...props} />)} />
<Route component={NoMatch} />
</Switch>
</div>
</BrowserRouter>
)
}



render(<Root/>,document.querySelector("#main"))
