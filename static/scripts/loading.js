let dotCount = 0;
    
function changeText() {
  const span = document.getElementById('dots');
  dotCount = (dotCount + 1) % 4; // Reset after 3 dots

  if (dotCount === 0) {
    span.textContent = '';
  } else {
    span.textContent = '.'.repeat(dotCount); // Set text to 1, 2, or 3 dots
  }
}

setInterval(changeText, 1000); // Change text every second


function getRandomQuote() {
    const quotes = [
      "The only way to do great work is to love what you do. <br>– Steve Jobs",
      "In three words I can sum up everything I've learned about life: it goes on. <br>– Robert Frost",
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. <br>– Ralph Waldo Emerson",
      "Life is what happens when you're busy making other plans. <br>– John Lennon",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. <br>– Winston Churchill",
      "The best way to predict the future is to create it. <br>– Abraham Lincoln",
      "It does not matter how slowly you go as long as you do not stop. <br>– Confucius",
      "You must be the change you wish to see in the world. <br>– Mahatma Gandhi",
      "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. <br>– Ralph Waldo Emerson",
      "The only impossible journey is the one you never begin. <br>– Tony Robbins",
      "To be great is to be misunderstood. <br>– Ralph Waldo Emerson",
      "Do what you can, with what you have, where you are. <br>– Theodore Roosevelt",
      "You miss 100% of the shots you don’t take. <br>– Wayne Gretzky",
      "The unexamined life is not worth living. <br>– Socrates",
      "I think, therefore I am. <br>– René Descartes",
      "That which does not kill us makes us stronger. <br>– Friedrich Nietzsche",
      "Do not go where the path may lead, go instead where there is no path and leave a trail. <br>– Ralph Waldo Emerson",
      "You only live once, but if you do it right, once is enough. <br>– Mae West",
      "Life isn't about waiting for the storm to pass, it's about learning how to dance in the rain. <br>– Vivian Greene",
      "If you want to go fast, go alone. If you want to go far, go together. <br>– African Proverb",
      "Happiness depends upon ourselves. <br>– Aristotle",
      "It always seems impossible until it's done. <br>– Nelson Mandela",
      "The journey of a thousand miles begins with one step. <br>– Lao Tzu",
      "Success is not the key to happiness. Happiness is the key to success. <br>– Albert Schweitzer",
      "The only limit to our realization of tomorrow is our doubts of today. <br>– Franklin D. Roosevelt",
      "The future belongs to those who believe in the beauty of their dreams. <br>– Eleanor Roosevelt",
      "You can't use up creativity. The more you use, the more you have. <br>– Maya Angelou",
      "There are no shortcuts to any place worth going. <br>– Beverly Sills",
      "Believe you can and you're halfway there. <br>– Theodore Roosevelt",
      "What lies behind us and what lies before us are tiny matters compared to what lies within us. <br>– Ralph Waldo Emerson",
      "The best revenge is massive success. <br>– Frank Sinatra",
      "Life is either a daring adventure or nothing at all. <br>– Helen Keller",
      "Difficulties in life are intended to make us better, not bitter. <br>– Dan Reeves",
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. <br>– Buddha",
      "Act as if what you do makes a difference. <br>– William James",
      "If you cannot do great things, do small things in a great way. <br>– Napoleon Hill",
      "We do not remember days; we remember moments. <br>– Cesare Pavese",
      "Everything you can imagine is real. <br>– Pablo Picasso",
      "An unexamined life is not worth living. <br>– Socrates",
      "Imagination is more important than knowledge. <br>– Albert Einstein",
      "Don't cry because it's over, smile because it happened. <br>– Dr. Seuss",
      "The mind is everything. What you think you become. <br>– Buddha",
      "You are never too old to set another goal or to dream a new dream. <br>– C.S. Lewis",
      "What we achieve inwardly will change outer reality. <br>– Plutarch",
      "You must not only aim aright, but draw the bow with all your might. <br>– Henry David Thoreau",
      "The harder I work, the luckier I get. <br>– Samuel Goldwyn",
      "The only thing we have to fear is fear itself. <br>– Franklin D. Roosevelt",
      "To live is the rarest thing in the world. Most people exist, that is all. <br>– Oscar Wilde",
      "The best way out is always through. <br>– Robert Frost",
      "Success is not how high you have climbed, but how you make a positive difference to the world. <br>– Roy T. Bennett",
      "A person who never made a mistake never tried anything new. <br>– Albert Einstein",
      "It is never too late to be what you might have been. <br>– George Eliot",
      "There is no greater agony than bearing an untold story inside you. <br>– Maya Angelou",
      "To succeed in life, you need two things: ignorance and confidence. <br>– Mark Twain",
      "Don’t count the days, make the days count. <br>– Muhammad Ali",
      "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. <br>– Ralph Waldo Emerson",
      "We are all in the gutter, but some of us are looking at the stars. <br>– Oscar Wilde",
      "All our dreams can come true, if we have the courage to pursue them. <br>– Walt Disney",
      "Success usually comes to those who are too busy to be looking for it. <br>– Henry David Thoreau",
      "You must be the change you wish to see in the world. <br>– Mahatma Gandhi",
      "The only way to do great work is to love what you do. <br>– Steve Jobs",
      "Everything you’ve ever wanted is on the other side of fear. <br>– George Addair",
      "Don't watch the clock; do what it does. Keep going. <br>– Sam Levenson",
      "The best way to predict the future is to create it. <br>– Peter Drucker",
      "Life is either a daring adventure or nothing at all. <br>– Helen Keller",
      "The only thing standing between you and your goal is the story you keep telling yourself as to why you can’t achieve it. <br>– Jordan Belfort",
      "Success is not the key to happiness. Happiness is the key to success. <br>– Albert Schweitzer",
      "Hardships often prepare ordinary people for an extraordinary destiny. <br>– C.S. Lewis",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. <br>– Winston Churchill",
      "Keep your face always toward the sunshine—and shadows will fall behind you. <br>– Walt Whitman",
      "The only impossible journey is the one you never begin. <br>– Tony Robbins",
      "The future belongs to those who believe in the beauty of their dreams. <br>– Eleanor Roosevelt",
      "Life isn't about waiting for the storm to pass, it's about learning how to dance in the rain. <br>– Vivian Greene",
      "You have to be odd to be number one. <br>– Dr. Seuss",
      "The only way to do great work is to love what you do. <br>– Steve Jobs",
      "Life is 10% what happens to us and 90% how we react to it. <br>– Charles R. Swindoll",
      "If you don’t build your dream, someone else will hire you to help them build theirs. <br>– Dhirubhai Ambani",
      "The best time to plant a tree was 20 years ago. The second best time is now. <br>– Chinese Proverb",
      "If you can dream it, you can do it. <br>– Walt Disney",
      "The greatest glory in living lies not in never falling, but in rising every time we fall. <br>– Nelson Mandela",
      "In the end, we will remember not the words of our enemies, but the silence of our friends. <br>– Martin Luther King Jr.",
      "To love and be loved is to feel the sun from both sides. <br>– David Viscott",
      "Your time is limited, so don’t waste it living someone else’s life. <br>– Steve Jobs",
      "The only way to do great work is to love what you do. <br>– Steve Jobs"
    ];
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function getRandomYes() {
      const yesWords = [
          "yes", "yeah", "yep", "yup", "sure", "absolutely", "affirmative", "definitely", "indeed", "of course",
          "right", "certainly", "exactly", "you bet", "ok", "okay", "totally", "surely", "why not", "for sure",
          "yessir", "yessiree", "aye", "yeah sure", "roger", "yah", "uh-huh", "yup yup", "without a doubt", "okay then",
          "sounds good", "go ahead", "no problem", "will do", "got it", "understood", "fine", "you got it", "10-4", "right on",
          "alright", "righto", "for sure", "no doubt", "absolutely right", "that's correct", "gotcha", "I'm in", "I'm down",
          "on board", "okie dokie", "yeah boy", "alrighty", "affirmative sir", "totally yes", "as you wish", "indeed so", "no worries",
          "you betcha", "sure thing", "oh yeah", "sure enough", "for real", "I do", "yeah man", "absolutely so", "by all means",
          "indeed yes", "definitely so", "certainly yes", "without a question", "yeah, absolutely", "totally agree", "yes indeed",
          "right you are", "perfect", "on it", "yea", "yass", "sounds like a plan", "yepper", "surely so", "okie", "surely yes",
          "yess", "correct", "that’s affirmative", "you have it", "that’s right", "unquestionably", "positively", "totally sure",
          "right away", "totally cool", "great idea", "let's do it", "okay dokie", "seems good", "yes, definitely", "go for it",
          "bring it on", "count me in", "absolutely correct", "on point", "sure as can be", "sure enough so", "yeah, sure thing",
          "of course yes", "yeah buddy", "confirmative", "just right", "yes indeed so", "very sure", "I'm game", "certainly so"
      ];
  
      const randomIndex = Math.floor(Math.random() * yesWords.length);
      return yesWords[randomIndex];
  }
  
  function getRandomNo() {
      const noWords = [
          "no", "nope", "nah", "negative", "absolutely not", "not at all", "not really", "no way", "certainly not", "never",
          "nope nope", "not in a million years", "definitely not", "not a chance", "ain't happening", "no sir", "no way jose", "no thanks",
          "no can do", "don't think so", "nah nah", "nope, not at all", "I don't think so", "nope, not today", "not happening", "nope, nope",
          "nah, no", "can't do it", "not likely", "no, thank you", "no sirree", "not really, no", "I refuse", "not a chance in hell",
          "nah, not at all", "absolutely not", "can't agree", "nah mate", "not in the least", "negatory", "I decline", "not on your life",
          "nope, no way", "nope, not now", "not even close", "not on your nelly", "not interested", "no way, no how", "never ever",
          "not in a heartbeat", "not a snowball's chance", "don't count on it", "sorry, but no", "that's a no-go", "that's a negative",
          "I can't", "no dice", "I'm afraid not", "I don't think so, no", "not today", "sorry, that's a no", "no chance", "not possible",
          "not at all, no", "no way in hell", "no can do", "no sir, not at all", "nope, no thanks", "absolutely not, no", "not in the cards",
          "nope, not going to happen", "not for me", "can't make it", "nah, not happening", "no thanks, not interested", "not today, thanks",
          "not for anything", "nah, that's not going to work", "no, I pass", "not right now", "nope, I refuse", "that's a no from me", 
          "no, I don't think so", "can't agree to that", "nope, not going to do that", "not in the slightest", "no, I'm good", "not in the least",
          "I don't think so at all", "not in the slightest bit", "no, not at this time", "not at all likely", "not even a little bit", "sorry, no",
          "nah, not now", "I wouldn't say so", "not a possibility", "nope, not even", "no, not at the moment", "not going to work", "not this time",
          "not at all, thanks", "nah, I'm good", "not an option", "not my thing", "no, that's not going to work", "no thanks, not for me",
          "not what I had in mind", "can't do that", "no, I’m afraid", "not gonna happen", "don't think so", "nope, that’s not it", "not interested, sorry",
          "no, no, no", "not in the plans", "nah, can't do", "not today, sorry", "not what I want", "nope, no way jose"
      ];
  
      const randomIndex = Math.floor(Math.random() * noWords.length);
      return noWords[randomIndex];
  }
  
  function getRandomFactPhrase() {
      const factPhrases = [
          "Did you know?", "Fun fact!", "Here's a fun fact!", "Did you realize?", "Did you ever wonder?", "Guess what?", "Bet you didn't know!", 
          "Here's an interesting fact!", "Did you ever hear?", "Just so you know!", "Ever heard of this?", "Here's something cool!", 
          "Here's a little-known fact!", "You might not know this!", "By the way...", "Fun little tidbit!", "Here’s something to ponder!", 
          "Wanna hear something cool?", "Did you ever think about this?", "Here’s an intriguing fact!", "Here’s something you didn’t know!", 
          "You won’t believe this!", "Ever thought about this?", "Let me tell you something!", "Here’s a quirky fact!", "I bet you didn’t know!", 
          "This might surprise you!", "Can you believe this?", "Here's something you might find interesting!", "You should know this!", 
          "Here's an amazing fact!", "Check this out!", "Here’s something to share!", "Did you know that...?", "You might find this interesting!",
          "Listen to this!", "Want to know something cool?", "I found this interesting!", "Here’s a fun tidbit!", "Here’s a cool nugget of info!",
          "Guess what I learned?", "Here’s something you didn’t expect!", "Wanna hear something weird?", "This one’s a good one!", 
          "Here’s a surprising fact!", "Want to hear an interesting fact?", "Here’s an unexpected fact!", "Ever come across this?", 
          "This might just blow your mind!", "Check this out, it’s awesome!", "Here’s something you might not have known!", "Ever come across that?",
          "You’ll be shocked by this!", "Something you never knew!", "This one’s a fun one!", "Here’s an interesting tidbit for you!", 
          "Have you ever wondered about this?", "Here’s an odd fact!", "This is pretty wild, huh?", "Ever wondered why...?", "You might not know this yet!",
          "Did you ever notice?", "Here’s a cool piece of trivia!", "Ever thought about it this way?", "Did you know this one?", "Fun fact for today!",
          "Have you heard about this?", "Something to think about!", "Here’s something fun to know!", "Ever seen this before?", "You won’t guess this!",
          "Check out this cool fact!", "Here’s an unbelievable fact!", "Did you ever think about that?", "Here’s an epic fact!", "You might find this funny!",
          "Here’s an unexpected tidbit!", "Have you ever stumbled upon this?", "Here’s something wild for you!", "This is pretty interesting!",
          "Listen up, here's a fact!", "Did you realize this?", "I bet this is new to you!", "You probably didn’t know!", "Here’s a jaw-dropping fact!",
          "Can you believe this?", "Here’s a fun nugget of info!", "Ever wonder about this?", "I’ve got a fun fact!", "Here’s a tidbit for you!", 
          "Did you ever learn this?", "Check this mind-blowing fact!", "Here’s something you didn’t know about!", "Ever think about this before?", 
          "Here’s an unbelievable tidbit!", "Here’s something that will surprise you!", "Something you might not have known!", "This one’s a keeper!",
          "Wanna know something unexpected?", "Here's something that'll wow you!", "Want to learn something new?", "Here’s an interesting fact for you!"
      ];
  
      const randomIndex = Math.floor(Math.random() * factPhrases.length);
      return factPhrases[randomIndex];
  }
  
  
  
  
  console.log(getRandomQuote());
  
      
  // Function to generate a random position within the viewport
  function getRandomPosition() {
      const maxX = window.innerWidth - 250; // Width of the window element
      const maxY = window.innerHeight - 150; // Height of the window element
      const x = Math.floor(Math.random() * maxX);
      const y = Math.floor(Math.random() * maxY);
      return { x, y };
  }
  
  function close() {
    console.log("hey")
    alert("HEY")
  }
  
  // Function to generate and add a new window
  function createRandomWindow() {
      const windowElement = document.createElement('div');
      windowElement.classList.add('window');
      windowElement.style.width = '250px';
      
      const { x, y } = getRandomPosition();
      windowElement.style.left = `${x}px`;
      windowElement.style.top = `${y}px`;
  
      windowElement.innerHTML = `
          <div class="title-bar">
              <div class="title-bar-text">
                  `+getRandomFactPhrase()+`
              </div>
              <div class="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close" onclick="this.parentElement.parentElement.parentElement.remove()"></button>
              </div>
          </div>
          <div class="window-body">
              <p>`+getRandomQuote()+`</p>
              <section class="field-row" style="justify-content: flex-end">
                  <button onclick="this.parentElement.parentElement.parentElement.remove()">`+getRandomNo()+`</button>
                  <button onclick="this.parentElement.parentElement.parentElement.remove()">`+getRandomYes()+`</button>
              </section>
          </div>
      `;
      
      document.body.appendChild(windowElement);
  }
  
  // Continuously add new windows every 2 seconds
  setInterval(createRandomWindow, 1000);  