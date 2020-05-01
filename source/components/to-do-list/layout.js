import React from 'react';

export function Layout(props){
  return(
    <div className="to-do-list-container">
      {props.children}
    </div>
  )
}