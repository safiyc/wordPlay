$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var sentence = $("input#sentenceInput").val();
    var allWords = sentence.split(' ');
    editedWords = [];
    allWords.forEach(function(word) {
      if (word.length >= 3) {
        return editedWords.push(word);
      }
    });
    reversed = editedWords.reverse().join(" ");
    $("h2#sentenceOutput").append(reversed);
    event.preventDefault();
  });
});
