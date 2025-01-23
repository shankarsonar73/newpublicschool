import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const QuoteIcon = () => {
  return (
    <div className="flex justify-center items-center">
      <FontAwesomeIcon
        icon={faQuoteLeft}
        className="text-4xl text-gray-600 rounded-full p-2"
        aria-hidden="true"
      />
    </div>
  );
};

export default QuoteIcon;
