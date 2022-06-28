import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Spinner() {
  return (
    <div className="flex flex-1 justify-center" data-testid="Spinner:container">
      <FontAwesomeIcon icon={faSpinner} size="2x" spin />
    </div>
  );
}

export default Spinner;
