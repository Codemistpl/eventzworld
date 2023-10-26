import React from "react";

const Blank = () => {
  const divStyle = {
    backgroundImage: 'url("images.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
  };

  return <div style={divStyle}></div>;
}

export default Blank;
