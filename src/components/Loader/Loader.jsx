import { FaArrowsRotate } from "react-icons/fa6";

function Loader() {
  return (
    <div className="loader">
      <div>
        <FaArrowsRotate className="loader-icon spinning" />
      </div>
      ;
    </div>
  );
}

export default Loader;
