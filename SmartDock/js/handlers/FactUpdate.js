var facts = [];

function loadFacts(){
  facts.push("On Good Friday in 1930, the BBC reported, \“There is no news.\” Instead, they played piano music.");
  facts.push("Sleep literally cleans your brain. During slumber, more cerebrospinal fluid flushes through the brain to wash away harmful proteins and toxins that build up during the day.");
  facts.push("Chock Full o' Nuts coffee does not contain nuts. It's named for a chain of nut stores that the founder converted into coffee shops.");
  facts.push("The oldest customer complaint dates back to ancient Mesopotamia. In the nearly 4000-year-old cuneiform tablet, a customer claims he was sold inferior copper ingots.");
  facts.push("The first use of \"Google\" as a verb in pop culture was on Buffy the Vampire Slayer.");
  facts.push("Editor Bennett Cerf challenged Dr. Seuss to write a book using no more than 50 different words. The result? Green Eggs and Ham.");
  facts.push("At the Wife Carrying World Championships in Finland, first prize is the wife's weight in beer.");
  facts.push("Although the bobcat is rarely seen, it is the most common wildcat in North America.");
  facts.push("Nicknamed \"sea bunnies,\" Jorunna parva is actually a highly toxic species of sea slug.");
  facts.push("Maine is the U.S. state closest to Africa.");
  facts.push("A newborn giant panda is about the size of a stick of butter.");
  facts.push("Louis Braille was 12 years old when he began transforming a method of silent communication used by the French military into a language that allows blind people to read.");
  facts.push("According to a 2017 survey, \"whatever\" tops the list of words Americans find most annoying for the ninth year in a row.");
  facts.push("Ben and Jerry originally wanted to start a bagel company. The partners ended up in the ice cream business because they couldn’t afford a bagel machine.");
  facts.push("It’s a tradition for the post offices of Romeo, Michigan and Juliette, Georgia to offer a special dual postmark leading up to Valentine’s Day.");
  facts.push("It’s illegal to own only one guinea pig in Switzerland. (They get lonely.)");
  facts.push("Nintendo was founded in 1889. Before it sold video games, the Japanese company specialized in playing cards.");
  facts.push("The average cumulus cloud weighs roughly 1.1 million pounds.");
  facts.push("Spiders recycle webs by eating them.");
  facts.push("The word PEZ comes from the German word for peppermint—PfeffErminZ.");
  facts.push("The Margherita pizza was named after Margherita of Savoy, Queen consort of Italy from 1878 to 1900.");
  facts.push("Apollo 17 astronaut Harrison Schmitt was allergic to moon dust.");
  facts.push("Octopuses don’t have tentacles; they have arms. A tentacle only has suckers at its end, while a cephalopod arm has suckers for most of its length.");
  facts.push("A solar eclipse helped end a six-year war in 585 BCE. When the sky suddenly darkened during a battle between the Lydians and the Medes in modern Turkey, soldiers took it as a sign to cease fighting.");
  facts.push("Volvo gave away the 1962 patent for their revolutionary three-point seat belt for free, in order to save lives.");
  facts.push("In 19th-century Ireland, jack-o'-lanterns were carved out of turnips instead of pumpkins.");
  facts.push("Yoda was partly modeled after a photo of Albert Einstein.");
  facts.push("Theodore Roosevelt's daughter Alice had a pet snake named Emily Spinach. She liked to carry it around the White House in her purse and take it out at unexpected moments.");
  facts.push("Barbie's full name is Barbara Millicent Roberts.");
  facts.push("Redondo Beach, California adopted the Goodyear Blimp as the city's official bird in 1983.");
  facts.push("According to one study, dunking an Oreo in milk for three seconds gives you the optimal balance of sogginess and structural integrity.");
  facts.push("There's only one Blockbuster still operating in the U.S.—it's located in Bend, Oregon.");
  facts.push("Army ants that misinterpret the scent trails left by other ants will sometimes break from the crowd and march in circles. If enough ants join, they can form massive \"death spirals.\"");
  facts.push("The wood frog can hold its pee for up to eight months.");
  facts.push("Rather than store it, parade officials released a gigantic dachshund balloon into the air at the conclusion of the 1929 Macy’s Thanksgiving Day Parade.");
  facts.push("Opossums don't \"play dead.\" When frightened, they become overexcited and pass out.");
  facts.push("The verb \"unfriend\" appeared in 1659.");
  facts.push("December 5 is Krampusnacht (Krampus Night), when the half-goat, half-demon of Christmas folklore visits homes to punish naughty children, armed with a bundle of sticks and a chain to take them back to the underworld.");
  facts.push("National Donut Day originally started as a way to honor Salvation Army volunteers who served donuts to soldiers in WWI.");
  facts.push("Wyoming is home to only two escalators.");
  facts.push("In a 2004 episode of Sesame Street, Cookie Monster revealed that before he started eating cookies his name was Sid.");
  facts.push("A cough can propel saliva droplets as far as 20 feet at speeds up to 25 to 50 mph.");
  facts.push("The FBI investigated the song \“Louie Louie\” because people thought the lyrics were dirty. After three months, the FBI abandoned the investigation because it couldn’t make out the words.");
  facts.push("There are 293 ways to make change for a U.S. dollar.");
  facts.push("Wendy's founder Dave Thomas dropped out of high school but picked up his GED in 1993. His GED class voted him Most Likely to Succeed.");
  facts.push("Nintendo was founded in 1889. Before it sold video games, the Japanese company specialized in playing cards.");
  facts.push("Female bats give birth while hanging upside down, catching the baby in their wings as it drops.");
  facts.push("Jane Austen didn't publish her first novel under her real name. Instead, Sense and Sensibility was credited as being written \"By a Lady.\"");
  facts.push("During WWII, La-Z-Boy manufactured seats for tanks, torpedo boats, gun turrets, and armored cars.");
  facts.push("Geckos can turn the stickiness of their feet on and off at will.");
}

function getRandom(){
  return Math.floor(Math.random() * facts.length);
}

function getFact(){
  factWidget.title.text("Random Fact");
  factWidget.fact.animate({
    opacity: 0
  }, 300, function(){
    factWidget.fact.text(facts[getRandom()]);
  });
  factWidget.fact.animate({
    opacity: 1
  }, 300);
}
