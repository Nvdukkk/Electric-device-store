import React from "react";

function Image(props) {
  return (
    <div className={`ratio ${props.ratio || "ratio-sm-1x2 ratio-md-4x3 ratio-21x9"}`}>
      <div>
        <img
          width={props.width || 100}
          height={props.height || 100}
          alt={props.alt}
          {...props}
          loading="lazy"
          className="w-100 h-100 cover"
        />
      </div>
    </div>
  );
}

export default Image;
