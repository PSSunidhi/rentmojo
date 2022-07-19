import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Auto({ changed, ascordes, ascordeshandler, item }) {
   

  const manyItems = [...item].map((o, i) => ({
    id: i,
    name: o.title
  }));

 
  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
   
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };



  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "50vw", margin: "auto" }}>
          <ReactSearchAutocomplete
            items={manyItems}
            maxResults={15}
            onSearch={changed}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            fuseOptions={{ keys: ["name"] }} // Search in the description text as well
            styling={{ zIndex: 3 }} // To display it on top of the search box below
          />
        <button class="f6 dim ba b--green bg-lightest-blue pa2 pv2 ml2 dib" href="#0" onClick={ascordeshandler}>sort by {ascordes ? 'Ascending' : 'Descending'} order</button>

        </div>
        
        
        
      </header>
    </div>
  );
}

export default Auto;