document.addEventListener("DOMContentLoaded", function () {
  console.log("Stage 4 script loaded");

  // Echo previous answers
  const sleep = localStorage.getItem("sleepHours");
  const trust = localStorage.getItem("trusting");
  const mirror = localStorage.getItem("mirrorSelf");
  const watched = localStorage.getItem("watchedFeeling");

  const recap = `You reported sleeping ${sleep} hours, feeling "${trust}", and that you last failed to recognize yourself: "${mirror}". Observation noted: "${watched}".`;

  document.getElementById("recap").textContent = recap;

  // Make sure form exists before attaching listener
  const form = document.getElementById("evalForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("Form submitted");

      const truth = document.getElementById("truth").value;
      const windowAnswer = document.getElementById("window").value;

      localStorage.setItem("truthStatement", truth);
      localStorage.setItem("presence", windowAnswer);

      window.location.href = "end.html";
    });
  } else {
    console.error("Form element not found.");
  }
});
