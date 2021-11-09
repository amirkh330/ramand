import React from 'react';
import HeaderApp from "./Header";

function Layout(props) {
  return (
    <React.Fragment>
      <HeaderApp/>
      <div className={'content'}>
      {props.children}
      </div>
      
    </React.Fragment>
  );
}

export default Layout;