
const MAX_VALUE = 255;
const MIN_VALUE = 0;

/**
 * translate
 * You find a strange mirror that always shows a hand that is moving. The hand appears to be alive, and after a lot of questions of "yes" and "no" answer, you know that the hand is trying to teach you a program that is written in HPL (Hand Programming Language).
   This language works with a memory of an indefinite size of bytes, with all values initialized to 0. This language haves 7 instructions:
   👉 : moves the memory pointer to the next cell 
   👈 : moves the memory pointer to the previous cell
   👆 : increment the memory cell at the current position
   👇 : decreases the memory cell at the current position.
   🤜 : if the memory cell at the current position is 0, jump just after the corresponding 🤛
   🤛 : if the memory cell at the current position is not 0, jump just after the corresponding 🤜
   👊 : Display the current character represented by the ASCII code defined by the current position.
 * @param {string} input
 */
function translate(input) {
  const memory = [0];
  let output = "";

  let memoryPointer = 0;

  const inputChars = [...input];
  let currentCharIndex = 0;

  let jumps = {};
  let stack = [];

  inputChars.forEach((char, index) => {
    if (char === '🤜') {
      stack.push(index);
    }

    if (char === '🤛') {
      const frameStart = stack.pop();
      jumps[frameStart] = index;
      jumps[index] = frameStart;
    }
  });

  const actions = {
    "👉": () => {
      memoryPointer++;
      if (memoryPointer === memory.length) {
        memory.push(0);
      }
    },
    "👈": () => {
      memoryPointer--;
      if (memoryPointer < 0) {
        memory.unshift(0);
        memoryPointer = 0;
      }
    },
    "👆": () => {
      memory[memoryPointer] = (memory[memoryPointer] + 1) % (MAX_VALUE + 1);
    },
    "👇": () => {
      memory[memoryPointer] = (memory[memoryPointer] + MAX_VALUE) % (MAX_VALUE + 1);
    },
    "🤜": () => {
      if (memory[memoryPointer] === MIN_VALUE) {
        currentCharIndex = jumps[currentCharIndex];
      }
    },
    "🤛": () => {
      if (memory[memoryPointer] !== MIN_VALUE) {
        currentCharIndex = jumps[currentCharIndex];
      }
    },
    "👊": () => {
      output += String.fromCharCode(memory[memoryPointer]);
    },
  }

  while (currentCharIndex < inputChars.length) {
    const char = inputChars[currentCharIndex];
    actions[char]();
    currentCharIndex++;
  }
  
  console.log(output);

  return output;
}

module.exports = {
  translate,
};
