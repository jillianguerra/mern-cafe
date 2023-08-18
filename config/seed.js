require('dotenv').config();
require('./database');

const Type = require('../models/type');
const Pokemon = require('../models/pokemon');

(async function() {

  await Type.deleteMany({});
  const types = await Type.create([
    {name: 'normal', sortOrder: 10}, 
    {name: 'fire', sortOrder: 20},
    {name: 'water', sortOrder: 30}, 
    {name: 'grass', sortOrder: 40}, 
    {name: 'electric', sortOrder: 50},
    {name: 'ice', sortOrder: 60}, 
    {name: 'fighting', sortOrder: 70}, 
    {name: 'poison', sortOrder: 80}, 
    {name: 'ground', sortOrder: 90}, 
    {name: 'flying', sortOrder: 100}, 
    {name: 'psychic', sortOrder: 110}, 
    {name: 'bug', sortOrder: 120}, 
    {name: 'rock', sortOrder: 130}, 
    {name: 'ghost', sortOrder: 140}, 
    {name: 'dark', sortOrder: 150}, 
    {name: 'dragon', sortOrder: 160}, 
    {name: 'steel', sortOrder: 170}, 
    {name: 'fairy', sortOrder: 180}, 
  ]);

  await Pokemon.deleteMany({});
  const pokemons = await Pokemon.create([
    {name: 'Bulbasaur', img: 'https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/600px-0001Bulbasaur.png', type: types[3], type2: types[7], price: 100, dex: 'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.'},
    {name: 'Ivysaur', img: 'https://archives.bulbagarden.net/media/upload/8/81/0002Ivysaur.png', type: types[3], type2: types[7], price: 500, dex: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.'},
    {name: 'Venusaur', img: 'https://archives.bulbagarden.net/media/upload/thumb/6/6b/0003Venusaur.png/600px-0003Venusaur.png', type: types[3], type2: types[7], price: 1000, dex: 'The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.'},
    {name: 'Charmander', img: 'https://archives.bulbagarden.net/media/upload/2/27/0004Charmander.png', type: types[1], price: 100, dex: 'Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.'},
    {name: 'Charmeleon', img: 'https://archives.bulbagarden.net/media/upload/0/05/0005Charmeleon.png', type: types[1], price: 500, dex: 'When it swings its burning tail, it elevates the temperature to unbearably high levels.'},
    {name: 'Charizard', img: 'https://archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/600px-0006Charizard.png', type: types[1], type2: types[9], price: 1000, dex: '	Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.'},
    {name: 'Squirtle', img: 'https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/600px-0007Squirtle.png', type: types[2], price: 100, dex: 'After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.'},
    {name: 'Wartortle', img: 'https://archives.bulbagarden.net/media/upload/thumb/0/0f/0008Wartortle.png/600px-0008Wartortle.png', type: types[2], price: 500, dex: 'Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance.'},
    {name: 'Blastoise', img: 'https://archives.bulbagarden.net/media/upload/thumb/0/0a/0009Blastoise.png/600px-0009Blastoise.png', type: types[2], price: 1000, dex: 'A brutal Pokémon with pressurized water jets on its shell. They are used for high speed tackles.'},
    {name: 'Caterpie', img: 'https://archives.bulbagarden.net/media/upload/thumb/5/5e/0010Caterpie.png/600px-0010Caterpie.png', type: types[11], price: 20, dex: 'Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.'},
    {name: 'Metapod', img: 'https://archives.bulbagarden.net/media/upload/d/da/0011Metapod.png', type: types[11], price: 50, dex: 'This Pokémon is vulnerable to attack while its shell is soft, exposing its weak and tender body.'},
    {name: 'Butterfree', img: 'https://archives.bulbagarden.net/media/upload/thumb/5/55/0012Butterfree.png/600px-0012Butterfree.png', type: types[11], type2: types[9], price: 100, dex: 'In battle, it flaps its wings at high speed to release highly toxic dust into the air.'},
    {name: 'Weedle', img: 'https://archives.bulbagarden.net/media/upload/thumb/3/36/0013Weedle.png/600px-0013Weedle.png', type: types[11], type2: types[7], price: 20, dex: 'Often found in forests, eating leaves. It has a sharp venomous stinger on its head.'},
    {name: 'Kakuna', img: 'https://archives.bulbagarden.net/media/upload/thumb/f/f3/0014Kakuna.png/600px-0014Kakuna.png', type: types[11], type2: types[7], price: 50, dex: 'Almost incapable of moving, this Pokémon can only harden its shell to protect itself from predators.'},
    {name: 'Beedrill', img: 'https://archives.bulbagarden.net/media/upload/thumb/f/f7/0015Beedrill.png/600px-0015Beedrill.png', type: types[11], type2: types[7], price: 100, dex: 'Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.'},
    {name: 'Pidgey', img: 'https://archives.bulbagarden.net/media/upload/0/0c/0016Pidgey.png', type: types[0], type2: types[9], price: 50, dex: 'A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.'},
    {name: 'Pidgeotto', img: 'https://archives.bulbagarden.net/media/upload/thumb/8/82/0017Pidgeotto.png/600px-0017Pidgeotto.png', type: types[0], type2: types[9], price: 100, dex: 'Very protective of its sprawling territorial area, this Pokémon will fiercely peck at any intruder.'},
    {name: 'Pidgeot', img: 'https://archives.bulbagarden.net/media/upload/thumb/7/73/0018Pidgeot.png/600px-0018Pidgeot.png', type: types[0], type2: types[9], price: 200, dex: 'When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.'},
    {name: 'Rattata', img: 'https://archives.bulbagarden.net/media/upload/thumb/a/aa/0019Rattata.png/600px-0019Rattata.png', type: types[0], price: 10, dex: 'Bites anything when it attacks. Small and very quick, it is a common sight in many places.'},
    {name: 'Raticate', img: 'https://archives.bulbagarden.net/media/upload/thumb/2/2c/0020Raticate.png/600px-0020Raticate.png', type: types[0], price: 40, dex: 'It uses its whiskers to maintain its balance. It apparently slows down if they are cut off.'},
    {name: 'Spearow', img: 'https://archives.bulbagarden.net/media/upload/thumb/2/2d/0021Spearow.png/600px-0021Spearow.png', type: types[0], type2: types[9], price: 20, dex: 'Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne.'},
    {name: 'Fearow', img: 'https://archives.bulbagarden.net/media/upload/thumb/9/92/0022Fearow.png/600px-0022Fearow.png', type: types[0], type2: types[9], price: 100, dex: 'With its huge and magnificent wings, it can keep aloft without ever having to land for rest.'},
    {name: 'Ekans', img: 'https://archives.bulbagarden.net/media/upload/thumb/d/d2/0023Ekans.png/600px-0023Ekans.png', type: types[7], price: 80, dex: 'Moves silently and stealthily. Eats the eggs of birds, such as Pidgey and Spearow, whole.'},
    {name: 'Arbok', img: 'https://archives.bulbagarden.net/media/upload/thumb/5/51/0024Arbok.png/600px-0024Arbok.png', type: types[7], price: 160, dex: 'It is rumored that the ferocious warning markings on its belly differ from area to area.'},
    {name: 'Pikachu', img: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/600px-0025Pikachu.png', type: types[4], price: 5000, dex: 'When several of these Pokémon gather, their electricity could build and cause lightning storms.'},
    {name: 'Raichu', img: 'https://archives.bulbagarden.net/media/upload/thumb/b/b0/0026Raichu.png/600px-0026Raichu.png', type: types[4], price: 6000, dex: 'Its long tail serves as a ground to protect itself from its own high voltage power.'},
    {name: 'Sandshrew', img: 'https://archives.bulbagarden.net/media/upload/thumb/e/e9/0027Sandshrew.png/600px-0027Sandshrew.png', type: types[8], price: 70, dex: 'Burrows deep underground in arid locations far from water. It only emerges to hunt for food.'},
    {name: 'Sandslash', img: 'https://archives.bulbagarden.net/media/upload/thumb/a/a4/0028Sandslash.png/600px-0028Sandslash.png', type: types[8], price: 140, dex: 'Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.'},
    {name: 'Nidoran-♀', img: 'https://archives.bulbagarden.net/media/upload/thumb/b/b2/0029Nidoran.png/600px-0029Nidoran.png', type: types[7], price: 2000, dex: 'Although small, its venomous barbs render this Pokémon dangerous. The female has smaller horns.'},
    {name: 'Nidorina', img: 'https://archives.bulbagarden.net/media/upload/e/ea/0030Nidorina.png', type: types[7], price: 3500, dex: `The female's horn develops slowly. Prefers physical attacks such as clawing and biting.`},
    {name: 'Nidoqueen', img: 'https://archives.bulbagarden.net/media/upload/thumb/9/9d/0031Nidoqueen.png/600px-0031Nidoqueen.png', type: types[7], type2: types[8], price: 6000, dex: `Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.`},
    {name: 'Nidoran-♂', img: 'https://archives.bulbagarden.net/media/upload/thumb/8/8c/0032Nidoran.png/600px-0032Nidoran.png', type: types[7], price: 2000, dex: 'Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.'},
    {name: 'Nidorino', img: 'https://archives.bulbagarden.net/media/upload/thumb/1/1e/0033Nidorino.png/600px-0033Nidorino.png', type: types[7], price: 3500, dex: 'An aggressive Pokémon that is quick to attack. The horn on its head secretes a powerful venom.'},
    {name: 'Nidoking', img: 'https://archives.bulbagarden.net/media/upload/thumb/2/21/0034Nidoking.png/600px-0034Nidoking.png', type: types[7], type2: types[8], price: 6000, dex: `It uses its powerful tail in battle to smash, constrict, then break the prey's bones.`},
    {name: 'Clefairy', img: 'https://archives.bulbagarden.net/media/upload/thumb/b/b7/0035Clefairy.png/600px-0035Clefairy.png', type: types[17], price: 5000, dex: `Its magical and cute appeal has many admirers. It is rare and found only in certain areas.`},
    {name: 'Clefable', img: 'https://archives.bulbagarden.net/media/upload/thumb/a/a4/0036Clefable.png/600px-0036Clefable.png', type: types[17], price: 7500, dex: `A timid fairy Pokémon that is rarely seen. It will run and hide the moment it senses people.`},
    {name: 'Vulpix', img: 'https://archives.bulbagarden.net/media/upload/thumb/0/06/0037Vulpix.png/600px-0037Vulpix.png', type: types[1], price: 5000, dex: `At the time of birth, it has just one tail. The tail splits from its tip as it grows older.`},
    {name: 'Ninetales', img: 'https://archives.bulbagarden.net/media/upload/thumb/3/3e/0038Ninetales.png/600px-0038Ninetales.png', type: types[1], price: 7500, dex: `Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.`},
    {name: 'Jigglypuff', img: 'https://archives.bulbagarden.net/media/upload/thumb/3/3a/0039Jigglypuff.png/600px-0039Jigglypuff.png', type: types[0], type2: types[17], price: 2000, dex: `When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.`},
    {name: 'Wigglytuff', img: 'https://archives.bulbagarden.net/media/upload/thumb/e/e2/0040Wigglytuff.png/600px-0040Wigglytuff.png', type: types[0], type2: types[17], price: 3000, dex: `The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.`},
    {name: 'Zubat', img: 'https://archives.bulbagarden.net/media/upload/thumb/4/4c/0041Zubat.png/600px-0041Zubat.png', type: types[9], type2: types[7], price: 80, dex: `Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.`},
    {name: 'Golbat', img: 'https://archives.bulbagarden.net/media/upload/thumb/7/76/0042Golbat.png/600px-0042Golbat.png', type: types[9], type2: types[7], price: 160, dex: `Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.`},
    {name: 'Oddish', img: 'https://archives.bulbagarden.net/media/upload/thumb/1/16/0043Oddish.png/600px-0043Oddish.png', type: types[3], type2: types[7], price: 30, dex: `During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.`},
    {name: 'Gloom', img: 'https://archives.bulbagarden.net/media/upload/thumb/e/e0/0044Gloom.png/600px-0044Gloom.png', type: types[3], type2: types[7], price: 15, dex: `The fluid that oozes from its mouth isn't drool. It is a nectar that is used to attract prey.`},
    {name: 'Vileplume', img: 'https://archives.bulbagarden.net/media/upload/thumb/8/89/0045Vileplume.png/600px-0045Vileplume.png', type: types[3], type2: types[7], price: 100, dex: `The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.`},
    {name: 'Paras', img: 'https://archives.bulbagarden.net/media/upload/8/8a/0046Paras.png', type: types[11], type2: types[3], price: 10, dex: `Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host.`},
    {name: 'Parasect', img: 'https://archives.bulbagarden.net/media/upload/7/7b/0047Parasect.png', type: types[11], type2: types[3], price: 20, dex: `A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.`},
    {name: 'Venonat', img: 'https://archives.bulbagarden.net/media/upload/thumb/2/2c/0048Venonat.png/600px-0048Venonat.png', type: types[11], type2: types[7], price: 30, dex: `Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.`},
    {name: 'Venomoth', img: 'https://archives.bulbagarden.net/media/upload/thumb/0/0e/0049Venomoth.png/600px-0049Venomoth.png', type: types[11], type2: types[7], price: 50, dex: `The dust-like scales covering its wings are color coded to indicate the kinds of poison it has.`},
    {name: 'Diglett', img: 'https://archives.bulbagarden.net/media/upload/thumb/a/a6/0050Diglett.png/600px-0050Diglett.png', type: types[8], price: 100, dex: `Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground.`},
    {name: 'Dugtrio', img: 'https://archives.bulbagarden.net/media/upload/thumb/8/88/0051Dugtrio.png/600px-0051Dugtrio.png', type: types[8], price: 300, dex: `A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.`},
    {name: 'Meowth', img: 'https://archives.bulbagarden.net/media/upload/thumb/d/d6/0052Meowth.png/600px-0052Meowth.png', type: types[0], price: 300, dex: `Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.`},
    {name: 'Persian', img: 'https://archives.bulbagarden.net/media/upload/thumb/b/b0/0053Persian.png/600px-0053Persian.png', type: types[0], price: 500, dex: `Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.`},
    {name: 'Psyduck', img: 'https://archives.bulbagarden.net/media/upload/thumb/3/3f/0054Psyduck.png/600px-0054Psyduck.png', type: types[2], price: 100, dex: `While lulling its enemies with its vacant look, this wily Pokémon will use psychokinetic powers.`},
    {name: 'Golduck', img: 'https://archives.bulbagarden.net/media/upload/thumb/e/ed/0055Golduck.png/600px-0055Golduck.png', type: types[2], price: 200, dex: `Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.`},
    {name: 'Mankey', img: 'https://archives.bulbagarden.net/media/upload/thumb/f/fa/0056Mankey.png/600px-0056Mankey.png', type: types[6], price: 2000, dex: `Extremely quick to anger. It could be docile one moment then thrashing away the next instant.`},
    {name: 'Primeape', img: 'https://archives.bulbagarden.net/media/upload/thumb/2/2c/0057Primeape.png/600px-0057Primeape.png', type: types[6], price: 3000, dex: `Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught.`},
    {name: 'Growlithe', img: 'https://archives.bulbagarden.net/media/upload/thumb/6/6a/0058Growlithe.png/600px-0058Growlithe.png', type: types[1], price: 2000, dex: `Very protective of its territory. It will bark and bite to repel intruders from its space.`},
    {name: 'Arcanine', img: 'https://archives.bulbagarden.net/media/upload/thumb/4/42/0059Arcanine.png/600px-0059Arcanine.png', type: types[1], price: 3000, dex: `A Pokémon that has been admired since the past for its beauty. It runs agilely as if on wings.`},
    {name: 'Poliwag', img: 'https://archives.bulbagarden.net/media/upload/thumb/e/e4/0060Poliwag.png/600px-0060Poliwag.png', type: types[2], price: 10, dex: `Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.`},
    {name: 'Poliwhirl', img: 'https://archives.bulbagarden.net/media/upload/f/fd/0061Poliwhirl.png', type: types[2], price: 30, dex: `Capable of living in or out of water. When out of water, it sweats to keep its body slimy.`},
    {name: 'Poliwrath', img: 'https://archives.bulbagarden.net/media/upload/8/80/0062Poliwrath.png', type: types[2], type2: types[6], price: 80, dex: `An adept swimmer at both the front crawl and breast stroke. Easily overtakes the best human swimmers.`},
    {name: 'Abra', img: 'https://archives.bulbagarden.net/media/upload/b/bd/0063Abra.png', type: types[10], price: 5000, dex: `Using its ability to read minds, it will identify impending danger and Teleport to safety.`},
    {name: 'Kadabra', img: 'https://archives.bulbagarden.net/media/upload/a/af/0064Kadabra.png', type: types[10], price: 7500, dex: `It emits special alpha waves from its body that induce headaches just by being close by.`},
    {name: 'Alakazam', img: 'https://archives.bulbagarden.net/media/upload/b/bb/0065Alakazam.png', type: types[10], price: 9000, dex: `Its brain can outperform a super-computer. Its intelligence quotient is said to be 5,000.`},
    {name: 'Machop', img: 'https://archives.bulbagarden.net/media/upload/0/02/0066Machop.png', type: types[6], price: 2000, dex: `Loves to build its muscles. It trains in all styles of martial arts to become even stronger.`},
    {name: 'Machoke', img: 'https://archives.bulbagarden.net/media/upload/2/22/0067Machoke.png', type: types[6], price: 3000, dex: `Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions.`},
    {name: 'Machamp', img: 'https://archives.bulbagarden.net/media/upload/8/82/0068Machamp.png', type: types[6], price: 4000, dex: `Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon.`},
    {name: 'Bellsprout', img: 'https://archives.bulbagarden.net/media/upload/thumb/6/66/0069Bellsprout.png/600px-0069Bellsprout.png', type: types[3], type2: types[7], price: 20, dex: `A carnivorous Pokémon that traps and eats bugs. It uses its root feet to soak up needed moisture.`},
    {name: 'Weepinbell', img: 'https://archives.bulbagarden.net/media/upload/thumb/c/c1/0070Weepinbell.png/600px-0070Weepinbell.png', type: types[3], type2: types[7], price: 40, dex: `It spits out PoisonPowder to immobilize the enemy and then finishes it with a spray of Acid.`},
    {name: 'Victreebel', img: 'https://archives.bulbagarden.net/media/upload/thumb/e/e9/0071Victreebel.png/600px-0071Victreebel.png', type: types[3], type2: types[7], price: 80, dex: `Said to live in huge colonies deep in jungles, although no one has ever returned from there.`},
    {name: 'Tentacool', img: 'https://archives.bulbagarden.net/media/upload/6/6e/0072Tentacool.png', type: types[2], type2: types[7], price: 50, dex: `Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.`},
    {name: 'Tentacruel', img: 'https://archives.bulbagarden.net/media/upload/c/cb/0073Tentacruel.png', type: types[2], type2: types[7], price: 100, dex: `The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.`},
    {name: 'Geodude', img: 'https://archives.bulbagarden.net/media/upload/9/97/0074Geodude.png', type: types[12], type2: types[8], price: 50, dex: `Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.`},
    {name: 'Graveler', img: 'https://archives.bulbagarden.net/media/upload/d/d4/0075Graveler.png', type: types[12], type2: types[8], price: 250, dex: `Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.`},
    {name: 'Golem', img: 'https://archives.bulbagarden.net/media/upload/3/38/0076Golem.png', type: types[12], type2: types[8], price: 500, dex: `	Its boulder-like body is extremely hard. It can easily withstand dynamite blasts without damage.`},
    {name: 'Ponyta', img: 'https://archives.bulbagarden.net/media/upload/c/c0/0077Ponyta.png', type: types[1], price: 5000, dex: `Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time.`},
    {name: 'Rapidash', img: 'https://archives.bulbagarden.net/media/upload/a/a9/0078Rapidash.png', type: types[1], price: 9000, dex: `Very competitive, this Pokémon will chase anything that moves fast in the hopes of racing it.`},
    {name: 'Slowpoke', img: 'https://archives.bulbagarden.net/media/upload/1/19/0079Slowpoke.png', type: types[2], type2: types[10], price: 2000, dex: `	Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack.`},
    {name: 'Slowbro', img: 'https://archives.bulbagarden.net/media/upload/a/a3/0080Slowbro.png', type: types[2], type2: types[10], price: 4000, dex: `The Shellder that is latched onto Slowpoke's tail is said to feed on the host's left over scraps.`},
    {name: 'Magnemite', img: 'https://archives.bulbagarden.net/media/upload/a/a2/0081Magnemite.png', type: types[4], type2: types[16], price: 20, dex: `Uses anti-gravity to stay suspended. Appears without warning and uses Thunder Wave and similar moves.`},
    {name: 'Magneton', img: 'https://archives.bulbagarden.net/media/upload/d/d9/0082Magneton.png', type: types[4], type2: types[16], price: 60, dex: `Formed by several Magnemites linked together. They frequently appear when sunspots flare up.`},
    {name: `Farfetch'd`, img: 'https://archives.bulbagarden.net/media/upload/9/99/0083Farfetch%27d.png', type: types[0], type2: types[9], price: 150, dex: `The sprig of green onions it holds is its weapon. It is used much like a metal sword.`},
    {name: 'Doduo', img: 'https://archives.bulbagarden.net/media/upload/b/b9/0084Doduo.png', type: types[0], type2: types[9], price: 1000, dex: `A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints.`},
    {name: 'Dodrio', img: 'https://archives.bulbagarden.net/media/upload/9/97/0085Dodrio.png', type: types[0], type2: types[9], price: 2000, dex: `Uses its three brains to execute complex plans. While two heads sleep, one head stays awake.`},
    {name: 'Seel', img: 'https://archives.bulbagarden.net/media/upload/2/22/0086Seel.png', type: types[2], price: 4000, dex: `The protruding horn on its head is very hard. It is used for bashing through thick ice.`},
    {name: 'Dewgong', img: 'https://archives.bulbagarden.net/media/upload/2/2b/0087Dewgong.png', type: types[2], type2: types[5], price: 8000, dex: `Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.`},
    {name: 'Grimer', img: 'https://archives.bulbagarden.net/media/upload/e/eb/0088Grimer.png', type: types[7], price: 5, dex: `Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.`},
    {name: 'Muk', img: 'https://archives.bulbagarden.net/media/upload/4/41/0089Muk.png', type: types[7], price: 10, dex: `Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.`},
    {name: 'Shellder', img: 'https://archives.bulbagarden.net/media/upload/thumb/3/3e/0090Shellder.png/600px-0090Shellder.png', type: types[2], price: 50, dex: `Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.`},
    {name: 'Cloyster', img: 'https://archives.bulbagarden.net/media/upload/thumb/9/90/0091Cloyster.png/600px-0091Cloyster.png', type: types[2], type2: types[5], price: 100, dex: `When attacked, it launches its horns in quick volleys. Its innards have never been seen.`},
    {name: 'Gastly', img: 'https://archives.bulbagarden.net/media/upload/thumb/c/c2/0092Gastly.png/600px-0092Gastly.png', type: types[13], type2: types[7], price: 10, dex: `Almost invisible, this gaseous Pokémon cloaks the target and puts it to sleep without notice.`},
    {name: 'Haunter', img: 'https://archives.bulbagarden.net/media/upload/thumb/d/d1/0093Haunter.png/600px-0093Haunter.png', type: types[13], type2: types[7], price: 20, dex: `Because of its ability to slip through block walls, it is said to be from another dimension.`},
    {name: 'Gengar', img: 'https://archives.bulbagarden.net/media/upload/thumb/4/47/0094Gengar.png/600px-0094Gengar.png', type: types[13], type2: types[7], price: 50, dex: `Under a full moon, this Pokémon likes to mimic the shadows of people and laugh at their fright.`},
    {name: 'Onix', img: 'https://archives.bulbagarden.net/media/upload/thumb/b/b7/0095Onix.png/600px-0095Onix.png', type: types[12], type2: types[8], price: 7000, dex: `As it grows, the stone portions of its body harden to become similar to a diamond, but colored black.`},
    {name: 'Drowzee', img: 'https://archives.bulbagarden.net/media/upload/thumb/e/e4/0096Drowzee.png/600px-0096Drowzee.png', type: types[10], price: 500, dex: `Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams.`},
    {name: 'Hypno', img: 'https://archives.bulbagarden.net/media/upload/thumb/4/4c/0097Hypno.png/600px-0097Hypno.png', type: types[10], price: 1000, dex: `When it locks eyes with an enemy, it will use a mix of PSI moves such as Hypnosis and Confusion.`},
    {name: 'Krabby', img: 'https://archives.bulbagarden.net/media/upload/thumb/e/ed/0098Krabby.png/600px-0098Krabby.png', type: types[2], price: 20, dex: `Its pincers are not only powerful weapons, they are used for balance when walking sideways.`},
    {name: 'Kingler', img: 'https://archives.bulbagarden.net/media/upload/thumb/a/ae/0099Kingler.png/600px-0099Kingler.png', type: types[2], price: 50, dex: `The large pincer has 10000 hp of crushing power. However, its huge size makes it unwieldy to use.`},
    {name: 'Voltorb', img: 'https://archives.bulbagarden.net/media/upload/thumb/5/55/0100Voltorb.png/600px-0100Voltorb.png', type: types[4], price: 100, dex: `Usually found in power plants. Easily mistaken for a Poké Ball, they have zapped many people.`},
    {name: 'Electrode', img: 'https://archives.bulbagarden.net/media/upload/d/db/0101Electrode.png', type: types[4], price: 200, dex: `It stores electric energy under very high pressure. It often explodes with little or no provocation.`},
    {name: 'Exeggcute', img: 'https://archives.bulbagarden.net/media/upload/6/60/0102Exeggcute.png', type: types[4], type2: types[10], price: 10, dex: `Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.`},
    {name: 'Exeggutor', img: 'https://archives.bulbagarden.net/media/upload/a/ae/0103Exeggutor.png', type: types[4], type2: types[10], price: 50, dex: `Legend has it that on rare occasions, one of its heads will drop off and continue on as an Exeggcute.`},
    {name: 'Cubone', img: 'https://archives.bulbagarden.net/media/upload/1/19/0104Cubone.png', type: types[8], price: 500, dex: `Because it never removes its skull helmet, no one has ever seen this Pokémon's real face.`},
    {name: 'Marowak', img: 'https://archives.bulbagarden.net/media/upload/a/a1/0105Marowak.png', type: types[8], price: 850, dex: `The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.`},
    {name: 'Hitmonlee', img: 'https://archives.bulbagarden.net/media/upload/0/00/0106Hitmonlee.png', type: types[6], price: 5000, dex: `When in a hurry, its legs lengthen progressively. It runs smoothly with extra long, loping strides.`},
    {name: 'Hitmonchan', img: 'https://archives.bulbagarden.net/media/upload/c/c0/0107Hitmonchan.png', type: types[6], price: 5000, dex: `While apparently doing nothing, it fires punches in lightning fast volleys that are impossible to see.`},
    {name: 'Lickitung', img: 'https://archives.bulbagarden.net/media/upload/f/f2/0108Lickitung.png', type: types[0], price: 300, dex: `Its tongue can be extended like a chameleon's. It leaves a tingling sensation when it licks enemies.`},
    {name: 'Koffing', img: 'https://archives.bulbagarden.net/media/upload/1/16/0109Koffing.png', type: types[7], price: 5, dex: `Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.`},
    {name: 'Weezing', img: 'https://archives.bulbagarden.net/media/upload/7/72/0110Weezing.png', type: types[7], price: 10, dex: `Where two kinds of poison gases meet, 2 Koffings can fuse into a Weezing over many years.`},
    {name: 'Rhyhorn', img: 'https://archives.bulbagarden.net/media/upload/7/7f/0111Rhyhorn.png', type: types[8], type2: types[12], dex: `Its massive bones are 1000 times harder than human bones. It can easily knock a trailer flying.`},
    {name: 'Rhydon', img: 'https://archives.bulbagarden.net/media/upload/7/79/0112Rhydon.png', type: types[8], type2: types[12], dex: `Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees.`},
    {name: 'Chansey', img: 'https://archives.bulbagarden.net/media/upload/c/c0/0113Chansey.png', type: types[0], price: 150, dex: `A rare and elusive Pokémon that is said to bring happiness to those who manage to get it.`},
    {name: 'Tangela', img: 'https://archives.bulbagarden.net/media/upload/2/22/0114Tangela.png', type: types[3], price: 30, dex: `The whole body is swathed with wide vines that are similar to seaweed. Its vines shake as it walks.`},
    {name: 'Kangaskhan', img: 'https://archives.bulbagarden.net/media/upload/e/e5/0115Kangaskhan.png', type: types[0], price: 2250, dex: `The infant rarely ventures out of its mother's protective pouch until it is 3 years old.`},
    {name: 'Horsea', img: 'https://archives.bulbagarden.net/media/upload/1/14/0116Horsea.png', type: types[2], price: 40, dex: `Known to shoot down flying bugs with precision blasts of ink from the surface of the water.`},
    {name: 'Seadra', img: 'https://archives.bulbagarden.net/media/upload/2/22/0117Seadra.png', type: types[2], price: 80, dex: `Capable of swimming backwards by rapidly flapping its wing-like pectoral fins and stout tail.`},
    {name: 'Goldeen', img: 'https://archives.bulbagarden.net/media/upload/b/b6/0118Goldeen.png', type: types[2], price: 20, dex: `Its tail fin billows like an elegant ballroom dress, giving it the nickname of the Water Queen.`},
    {name: 'Seaking', img: 'https://archives.bulbagarden.net/media/upload/7/76/0119Seaking.png', type: types[2], price: 40, dex: `In the autumn spawning season, they can be seen swimming powerfully up rivers and creeks.`},
    {name: 'Staryu', img: 'https://archives.bulbagarden.net/media/upload/3/38/0120Staryu.png', type: types[2], price: 30, dex: `An enigmatic Pokémon that can effortlessly regenerate any appendage it loses in battle.`},
    {name: 'Starmie', img: 'https://archives.bulbagarden.net/media/upload/a/aa/0121Starmie.png', type: types[2], type2: types[10], price: 60, dex: `Its central core glows with the seven colors of the rainbow. Some people value the core as a gem.`},
    {name: 'Mr. Mime', img: 'https://archives.bulbagarden.net/media/upload/f/fb/0122Mr._Mime.png', type: types[17], type2: types[10], price: 850, dex: `If interrupted while it is miming, it will slap around the offender with its broad hands.`},
    {name: 'Scyther', img: 'https://archives.bulbagarden.net/media/upload/8/81/0123Scyther.png', type: types[11], type2: types[9], price: 500, dex: `With ninja-like agility and speed, it can create the illusion that there is more than one.`},
    {name: 'Jynx', img: 'https://archives.bulbagarden.net/media/upload/0/07/0124Jynx.png', type: types[5], type2: types[10], price: 850, dex: `It seductively wiggles its hips as it walks. It can cause people to dance in unison with it.`},
    {name: 'Electabuzz', img: 'https://archives.bulbagarden.net/media/upload/5/5c/0125Electabuzz.png', type: types[4], price: 500, dex: `Normally found near power plants, they can wander away and cause major blackouts in cities.`},
    {name: 'Magmar', img: 'https://archives.bulbagarden.net/media/upload/7/72/0126Magmar.png', type: types[1], price: 500, dex: `Its body always burns with an orange glow that enables it to hide perfectly among flames.`},
    {name: 'Pinsir', img: 'https://archives.bulbagarden.net/media/upload/a/a9/0127Pinsir.png', type: types[11], price: 10, dex: `If it fails to crush the victim in its pincers, it will swing it around and toss it hard.`},
    {name: 'Tauros', img: 'https://archives.bulbagarden.net/media/upload/a/ad/0128Tauros.png', type: types[0], price: 1500, dex: `When it targets an enemy, it charges furiously while whipping its body with its long tails.`},
    {name: 'Magikarp', img: 'https://archives.bulbagarden.net/media/upload/d/d1/0129Magikarp.png', type: types[2], price: 5, dex: `In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.`},
    {name: 'Gyarados', img: 'https://archives.bulbagarden.net/media/upload/b/bc/0130Gyarados.png', type: types[2], type2: types[9], price: 5000, dex: `Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.`},
    {name: 'Lapras', img: 'https://archives.bulbagarden.net/media/upload/9/99/0131Lapras.png', type: types[2], type2: types[5], price: 5000, dex: `	A Pokémon that has been overhunted almost to extinction. It can ferry people across the water.`},
    {name: 'Ditto', img: 'https://archives.bulbagarden.net/media/upload/2/25/0132Ditto.png', type: types[0], price: 50, dex: `Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy.`},
    {name: 'Eevee', img: 'https://archives.bulbagarden.net/media/upload/4/4c/0133Eevee.png', type: types[0], price: 2000, dex: `Its genetic code is irregular. It may mutate if it is exposed to radiation from Evolution stones.`},
    {name: 'Vaporeon', img: 'https://archives.bulbagarden.net/media/upload/6/6d/0134Vaporeon.png', type: types[2], price: 5000, dex: `Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid's.`},
    {name: 'Jolteon', img: 'https://archives.bulbagarden.net/media/upload/e/e3/0135Jolteon.png', type: types[4], price: 5000, dex: `It accumulates negative ions in the atmosphere to blast out 10000-volt lightning bolts.`},
    {name: 'Flareon', img: 'https://archives.bulbagarden.net/media/upload/f/f1/0136Flareon.png', type: types[1], price: 5000, dex: `When storing thermal energy in its body, its temperature could soar to over 1600 degrees.`},
    {name: 'Porygon', img: 'https://archives.bulbagarden.net/media/upload/8/8e/0137Porygon.png', type: types[0], price: 400, dex: `A Pokémon that consists entirely of programming code. Capable of moving freely in cyberspace.`},
    {name: 'Omanyte', img: 'https://archives.bulbagarden.net/media/upload/e/e6/0138Omanyte.png', type: types[2], type2: types[12], price: 500, dex: `Although long extinct, in rare cases, it can be genetically resurrected from fossils.`},
    {name: 'Omastar', img: 'https://archives.bulbagarden.net/media/upload/6/66/0139Omastar.png', type: types[2], type2: types[12], price: 1000, dex: `A prehistoric Pokémon that died out when its heavy shell made it impossible to catch prey.`},
    {name: 'Kabuto', img: 'https://archives.bulbagarden.net/media/upload/d/d2/0140Kabuto.png', type: types[2], type2: types[12], price: 500, dex: `A Pokémon that was resurrected from a fossil found in what was once the ocean floor eons ago.`},
    {name: 'Kabutops', img: 'https://archives.bulbagarden.net/media/upload/4/41/0141Kabutops.png', type: types[2], type2: types[12], price: 1000, dex: `Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids.`},
    {name: 'Aerodactyl', img: 'https://archives.bulbagarden.net/media/upload/2/2c/0142Aerodactyl.png', type: types[12], type2: types[9], price: 1000, dex: `A ferocious, prehistoric Pokémon that goes for the enemy's throat with its serrated saw-like fangs.`},
    {name: 'Snorlax', img: 'https://archives.bulbagarden.net/media/upload/thumb/3/3f/0143Snorlax.png/250px-0143Snorlax.png', type: types[0], price: 3000, dex: "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful."},
    {name: 'Dratini', img: 'https://archives.bulbagarden.net/media/upload/thumb/a/ae/0147Dratini.png/250px-0147Dratini.png', type: types[15], price: 7000, dex: "Long considered a mythical Pokémon until recently when a small colony was found living underwater."},
    {name: 'Dragonair', img: 'https://archives.bulbagarden.net/media/upload/thumb/0/0d/0148Dragonair.png/250px-0148Dragonair.png', type: types[15], price: 9000, dex: "A mystical Pokémon that exudes a gentle aura. Has the ability to change climate conditions."},
    {name: 'Dragonite', img: 'https://archives.bulbagarden.net/media/upload/thumb/1/1c/0149Dragonite.png/250px-0149Dragonite.png', type: types[15], type2: types[9], price: 9000, dex: "An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans."}
  ]);
  console.log(pokemons)
  process.exit();

})();