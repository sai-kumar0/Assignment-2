document
  .getElementById("giftform")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const relation = document.getElementById("relation").value;
    const age = document.getElementById("age").value;
    const occassion = document.getElementById("occassion").value;
    const interest = document.getElementById("interest").value;
    const budget = document.getElementById("budget").value;

    // Paste your own API keys here

    const serpApiKey =
      "37deeb48875457904a6541e032f6909c7268cab1118a2defa81862b4c5a2192";
    const openaiApiKey = "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";

    const query = `best gifts for ${relation} of ${age}-year-old for ${occassion} ${interest} ${budget}`;

    // In case if CORS error occurs the below link with CORS anywhere params the data can be retieved.
    // Still if you get the errors then try run the app in the development server

    const serpApiUrl = "https://api.serpapi.com/search";
    const serpApiParams = new URLSearchParams({
      q: query,
      key: serpApiKey,
    });

    fetch(`${serpApiUrl}?${serpApiParams}`)
      .then((response) => response.json())
      .then((serpApiData) => {
        const recommendationsElement =
          document.getElementById("recommendations");
        recommendationsElement.innerHTML = "Loading...";

        recommendationsElement.innerHTML =
          "Here are some gift recommendations:<br>" + recommendations;
      })

      // If any error occurs then it will be catched here and updated to website

      .catch((error) => {
        const recommendationsElement =
          document.getElementById("recommendations");
        recommendationsElement.innerHTML =
          "Sorry, We cannot find the gift for you. Try using other input parameters";
      });
  });
