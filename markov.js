/** Textual markov chain generator */
egg = require('./eggs.txt')

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    var dict = new Object()
    // TODO
    for(let i = 0; i < this.words.length; i += 1){
      let word = this.words[i]
      let next = this.words[i+1] || null;
      if(!dict[word]){
        dict[word] = [next]
      }else{
        dict[word].push(next)
      }
    }
    this.dict = dict
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}


const argv = process.argv;

for (let i = 0; i < argv.length; i += 1) {
  console.log(i, argv[i]);
}

new MarkovMachine(process.argv[2])
