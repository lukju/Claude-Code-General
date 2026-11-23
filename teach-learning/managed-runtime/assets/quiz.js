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
