// Reusable lesson widgets.
// Quiz: <div class="quiz"><div class="quiz-q" data-correct="2"><p>Q</p><div class="opts"><button class="opt">..</button>...</div><p class="explain" hidden>..</p></div>...<p class="score"></p></div>
// Reveal: <button class="btn" data-reveal="id">..</button> ... <div id="id" class="reveal" hidden>..</div>
(function () {
  function initQuiz(quiz) {
    var qs = quiz.querySelectorAll(".quiz-q");
    var score = quiz.querySelector(".score");
    var answered = 0, right = 0;
    function update() {
      if (score) score.textContent = answered + " von " + qs.length + " beantwortet, " + right + " richtig";
    }
    qs.forEach(function (q) {
      var correct = parseInt(q.getAttribute("data-correct"), 10);
      var opts = q.querySelectorAll(".opt");
      opts.forEach(function (btn, i) {
        btn.type = "button";
        btn.addEventListener("click", function () {
          opts.forEach(function (b, j) {
            b.disabled = true;
            if (j === correct) b.classList.add("correct");
          });
          if (i !== correct) btn.classList.add("wrong"); else right++;
          answered++;
          var ex = q.querySelector(".explain");
          if (ex) ex.hidden = false;
          update();
        });
      });
    });
    update();
  }
  function initReveal(btn) {
    btn.addEventListener("click", function () {
      var el = document.getElementById(btn.getAttribute("data-reveal"));
      if (el) { el.hidden = false; btn.hidden = true; }
    });
  }
  function boot() {
    document.querySelectorAll(".quiz").forEach(initQuiz);
    document.querySelectorAll("[data-reveal]").forEach(initReveal);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();

// Numeric task: <div class="calc-task" data-answer="11" data-tol="0.5"><label for="t1">..</label><input id="t1" inputmode="decimal"><button class="btn">Prüfen</button><p class="verdict" aria-live="polite"></p><p class="explain" hidden>..</p></div>
(function () {
  function parse(v) { return parseFloat(String(v).replace(/['’\s]/g, "").replace(",", ".")); }
  function init(task) {
    var input = task.querySelector("input"), btn = task.querySelector("button"), verdict = task.querySelector(".verdict"), ex = task.querySelector(".explain");
    var answer = parseFloat(task.getAttribute("data-answer")), tol = parseFloat(task.getAttribute("data-tol") || "0");
    var tries = 0;
    btn.type = "button";
    btn.addEventListener("click", function () {
      var v = parse(input.value);
      if (isNaN(v)) { verdict.textContent = "Bitte eine Zahl eingeben."; verdict.className = "verdict"; return; }
      tries++;
      if (Math.abs(v - answer) <= tol) {
        verdict.textContent = "Richtig."; verdict.className = "verdict ok"; if (ex) ex.hidden = false;
      } else {
        verdict.textContent = (v > answer ? "Zu hoch." : "Zu tief.") + (tries >= 2 ? " Lösungsweg unten." : " Nochmals versuchen.");
        verdict.className = "verdict no"; if (tries >= 2 && ex) ex.hidden = false;
      }
    });
  }
  function boot() { document.querySelectorAll(".calc-task").forEach(init); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
