const headingReact = React.createElement("h1",
{id:"heading"},
"Hello world from React!");
      const reactRoot = ReactDOM.createRoot(document.getElementById("reactRoot"));
      reactRoot.render(headingReact);

      const paragraphReact= React.createElement("h1",{},"hello paragraph from react");
      const reactParagRoot=ReactDOM.createRoot(document.getElementById("reactParagRoot"));
      reactParagRoot.render(paragraphReact);