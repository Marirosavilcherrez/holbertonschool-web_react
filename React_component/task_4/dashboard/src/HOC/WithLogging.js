  import React, { Component } from 'react';

  const WithLogging = (WrappedComponent) => {
    class WithLoggingComponent extends Component {
    // Log every time a component has been mounted
    componentDidMount = () => {
        console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`)
    }

    // Log every time a component has been unmounted
    componentWillUnmount = () => {
        console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
    }

    render(){
        return <WrappedComponent {...this.props}/>
    }
  }
  //Modify the displayName of the HOC
  WithLoggingComponent.DisplayName = `WithLogging(${getDisplayName(WrappedComponent)})`;
  return WithLoggingComponent;
  };

  // Helper function to get the display name of a component or class
    const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default WithLogging;
