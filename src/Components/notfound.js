import React from 'react';
import PropTypes from 'prop-types';
import '../sass/style.css';

class Notfound extends React.Component {
  constructor(){
    super();
    //this.goBack = this.goBack.bind(this);
  }
  // goBack(){
  //   window.location(window.history.back());
  // }
  componentDidMount(){
      console.log("page not found");
      this.props.history.push('QA');
}
    render() {


        return(
          <div>
                {/*<p>Page Not Found</p>
                <p>You have entered wrong URL</p>
                  <p><aside className="viewlink" onClick={this.goBack}>Go Back to Previous Page</aside></p>*/}
                  </div>
            )
    }

}

Notfound.contextTypes = {
    router: PropTypes.object
}

export default Notfound;
