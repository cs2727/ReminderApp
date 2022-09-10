import React from 'react';
import PageHeaderComponent from './PageHeaderComponent';
import './PageStructure.css';

function PageStructure(props) {
  return (
    <div className="pageParentContainer">
      <PageHeaderComponent />
      <div className="pageContentContainer">{props.children}</div>
    </div>
  );
}

export default PageStructure;
