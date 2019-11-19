let totalSumVar = 0;

const totalSum = () => {
  // Need to convert the textbox values into number data types
  //   make these global
  //   first questions
  let question1Val = Number(document.querySelector("#question1").value);
  let question2Val = Number(document.querySelector("#question2").value);
  let question3Val = Number(document.querySelector("#question3").value);
  let question4Val = Number(document.querySelector("#question4").value);
  let question5Val = Number(document.querySelector("#question5").value);
  let question6Val = Number(document.querySelector("#question6").value);
  let question7Val = Number(document.querySelector("#question7").value);
  let question8Val = Number(document.querySelector("#question8").value);
  let question9Val = Number(document.querySelector("#question9").value);
  //   second questions
  let question10Val = Number(document.querySelector("#question10").value);
  let question11Val = Number(document.querySelector("#question11").value);
  let question12Val = Number(document.querySelector("#question12").value);
  let question13Val = Number(document.querySelector("#question13").value);
  let question14Val = Number(document.querySelector("#question14").value);
  let question15Val = Number(document.querySelector("#question15").value);
  let question16Val = Number(document.querySelector("#question16").value);
  let question17Val = Number(document.querySelector("#question17").value);
  let question18Val = Number(document.querySelector("#question18").value);
  //   third questions
  let question19Val = Number(document.querySelector("#question19").value);
  let question20Val = Number(document.querySelector("#question20").value);
  let question21Val = Number(document.querySelector("#question21").value);
  let question22Val = Number(document.querySelector("#question22").value);
  let question23Val = Number(document.querySelector("#question23").value);
  let question24Val = Number(document.querySelector("#question24").value);
  let question25Val = Number(document.querySelector("#question25").value);
  let question26Val = Number(document.querySelector("#question26").value);
  let question27Val = Number(document.querySelector("#question27").value);

  //   Add totals up
  totalSumVar =
    question1Val +
    question2Val +
    question3Val +
    question4Val +
    question5Val +
    question6Val +
    question7Val +
    question8Val +
    question9Val +
    question10Val +
    question11Val +
    question12Val +
    question13Val +
    question14Val +
    question15Val +
    question16Val +
    question17Val +
    question18Val +
    question19Val +
    question20Val +
    question21Val +
    question22Val +
    question23Val +
    question24Val +
    question25Val +
    question26Val +
    question27Val;

  // hide parent container
  document.querySelector("#parentDiv").style.display = "none";

  // bring back div container
  let totalDivContainer = document.querySelector("#divContainer");
  totalDivContainer.style.display = "flex";
  // Place totalSumVar Value into h1 tag
  let totalTag = document.querySelector("#totalSum");
  totalTag.innerHTML = `<h1 id='totalSum'>${totalSumVar}</h1>`;

  let footer = document.querySelector("#footer");
  footer.innerHTML = `<div id="footer">
  <ul>
    <li><a href="#">IST 302</a></li>
    <li><a href="#">blue&white@consultants.com</a></li>
    <li><a href="#">Company Website</a></li>
    <li><a href="https://github.com/calcantara35">Github</a></li>
    <li>
      <p>👋</p>
    </li>
  </ul>
</div>`;

  console.log(totalSumVar);
};

// Event listener
document.querySelector("#submitBtn").addEventListener("click", totalSum);
