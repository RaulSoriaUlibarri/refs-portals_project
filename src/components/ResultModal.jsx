const ResultModal = ({ ref, result, targetTime }) => {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>Your result: {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stop the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
