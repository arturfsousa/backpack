import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16.382a1 1 0 0 1-1.447.894l-5.659-2.829a2 2 0 0 0-1.788 0l-5.659 2.83A1 1 0 0 1 4 21.381V5zm13.237 3.676a1 1 0 0 0-1.474-1.352l-4.794 5.23-2.262-2.261a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.444-.031l5.5-6z" /></svg>);