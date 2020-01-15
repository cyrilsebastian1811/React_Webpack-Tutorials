import React from 'react';

const Rainbow = (WrappedComponent) => {
  const colors = ['purple', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
  const colorClass = colors[Math.floor(Math.random() * (colors.length-1))] + '-text';

  return (props) => {
    return (
      <div className={colorClass}>
        <WrappedComponent {...props} />
      </div>

    )
  }
};

export default Rainbow;
