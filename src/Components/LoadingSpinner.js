import React from 'react';
class LoadingSpinnner extends React.Component {

/*<div className="loadingText">{this.props.loadingText}</div>*/
    render(){
        return(<div className={"pageLoader "+this.props.showSpinner}>
               	<div className="loader"></div>

               </div>
        )
    }
}

export default LoadingSpinnner;
