let display = "";

function useAsk() {
  function isAsk(question, answer, storedData) {
    const questionHandlers = {
      S9e: () => handleS9e(answer, storedData),
    };

    if (questionHandlers[question]) {
      const result = questionHandlers[question]();
      if (result) {
        display = `Survey terminated for ${question} with answer: ${answer}`;
      }
      return result;
    }
    return false;
  }

  function handleS9e(answer, storedData) {
    console.log("hi", storedData);
    const s4aValue = storedData["S9e"] || "";
    console.log("hi", s4aValue);

    if (answer == "5" || answer == "6" || answer == "4") {
      return false;
    }
    return true;
  }
  return { isAsk, display };
}

export default useAsk;
