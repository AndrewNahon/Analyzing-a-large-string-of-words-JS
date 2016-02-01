var paragraph = "In the midway of this our mortal life,\
 I found me in a gloomy wood, astray\
 Gone from the path direct: and e'en to tell\
 It were no easy task, how savage wild\
 That forest, how robust and rough its growth,\
 Which to remember only, my dismay\
 Renews, in bitterness not far from death.\
 Yet to discourse of what there good befell,\
 All else will I relate discover'd there.\
 How first I enter'd it I scarce can say,\
 Such sleepy dullness in that instant weigh'd\
 My senses down, when the true path I left,\
 But when a mountain's foot I reach'd, where clos'd\
 The valley, that had pierc'd my heart with dread,\
 I look'd aloft, and saw his shoulders broad\
 Already vested with that planet's beam,\
 Who leads all wanderers safe through every way."

$(function() {
  var word_counts = {};

  paragraph = paragraph.replace(/[.,:]/g, ' ');
  paragraph = paragraph.replace(/\s+/g, " ");
  words = paragraph.split(" ");
  
  words.forEach(function(word) {
    if (word_counts[word]) {
      word_counts[word]++;
    } else {
    word_counts[word] = 1;
    };
  });
  for (var word in word_counts) {
    var most;
    if (!most) {
      most = word;
    };
    if (word_counts[word] > word_counts[most]) {
      most = word;
    }
  }
    console.log(most);
    console.log(words.length);
    console.log(word_counts[most]);
});