window.onload = () =>
 {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"];
  {
    document.querySelector("#excuse1").innerHTML = who
    [Math.floor(Math.random()*who.length)];
    document.querySelector("#excuse2").innerHTML = what
    [Math.floor(Math.random()*what.length)];
    document.querySelector("#excuse3").innerHTML = when
    [Math.floor(Math.random()*when.length)];
  }
}
