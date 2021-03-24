import React from "react";

function withActiveRoute(OriginalComponent) {
  return function EnhancedComponent() {
    const [value, setValue] = React.useState(0);
    const [selectedMenuIndex, setSelectedMenuIndex] = React.useState(0);

    return (
      <OriginalComponent
        value={value}
        setValue={setValue}
        selectedMenuIndex={selectedMenuIndex}
        setSelectedMenuIndex={setSelectedMenuIndex}
      />
    );
  };
}

export default withActiveRoute;
