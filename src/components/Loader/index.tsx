import React from "react";

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <div>
      {loading && (
        <div>
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Loader;
