export interface QuizCardData {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Difficult';
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  iconName: string;
  description: string;
  benefits: string[];
  keyModules: string[];
  accentColor: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  clientName: string;
  clientType: 'School' | 'Corporate' | 'College' | 'Community';
  title: string;
  summary: string;
  impactMetrics: { label: string; value: string }[];
  quote: { text: string; author: string; role: string };
  tags: string[];
}

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  category: 'Book' | 'Game' | 'Learning Kit' | 'Merchandise';
  price: string;
  rating: number;
  description: string;
  imageColor: string;
  isPopular?: boolean;
}

export const QUESTION_BANK: QuizCardData[] = [
  // --- DIFFICULT (17 Questions) ---
  {
    id: 'd1',
    category: 'Nature & Science',
    question: 'Why do octopus hearts stop beating when they swim?',
    options: [
      'To save metabolic energy',
      'Systemic heart pauses during swimming propulsion',
      'They only breathe when resting',
      'Their tentacles restrict blood flow'
    ],
    correctAnswer: 1,
    explanation: 'When an octopus swims, the systemic heart delivering blood to its body stops beating, which quickly exhausts them—hence they prefer crawling!',
    difficulty: 'Difficult'
  },
  {
    id: 'd2',
    category: 'Space & Astronomy',
    question: 'Why does Venus rotate in the opposite direction (retrograde) compared to most planets?',
    options: [
      'Tidal locking with Mercury',
      'Ancient collision with a massive planetesimal',
      'Intense solar radiation pressure',
      'Magnetic field reversal'
    ],
    correctAnswer: 1,
    explanation: 'Astronomers hypothesize that a massive collision in early solar system history flipped Venus upside down or reversed its spin!',
    difficulty: 'Difficult'
  },
  {
    id: 'd3',
    category: 'Brain & Neuroscience',
    question: 'What phenomenon causes the "Doorway Effect" where you forget why you entered a room?',
    options: [
      'Sudden light adaptation',
      'Event Boundary creation in working memory',
      'Temporary blood pressure drop',
      'Rapid sensory overload'
    ],
    correctAnswer: 1,
    explanation: 'Psychologists found walking through doorways creates "Event Boundaries" in the brain, compartmentalizing memories and clearing short-term cache!',
    difficulty: 'Difficult'
  },
  {
    id: 'd4',
    category: 'Quantum Physics',
    question: 'Why does glass appear transparent to visible light?',
    options: [
      'Glass atoms are spaced too far apart',
      'Visible light photons lack energy to jump electron band gaps',
      'Silicon dioxide absorbs only infrared light',
      'Total internal reflection'
    ],
    correctAnswer: 1,
    explanation: 'Visible light photons do not have enough energy to excite electrons in glass to higher energy levels, so they pass right through without being absorbed!',
    difficulty: 'Difficult'
  },
  {
    id: 'd5',
    category: 'Deep Ocean & Biology',
    question: 'How do deep-sea anglerfish males survive after finding a mate?',
    options: [
      'They build coral nests together',
      'They fuse permanently into the female as a parasitic appendage',
      'They store bioluminescent bacteria in gills',
      'They hibernate until spawning season'
    ],
    correctAnswer: 1,
    explanation: 'Male anglerfish physically fuse into the female\'s body, dissolving their own digestive organs and sharing her bloodstream forever!',
    difficulty: 'Difficult'
  },
  {
    id: 'd6',
    category: 'Language & Logic',
    question: 'What linguistic property makes sentences like "The horse raced past the barn fell" confusing?',
    options: [
      'Garden-path syntactic structure',
      'Tautological recursion',
      'Semantic satiation',
      'Metonymic displacement'
    ],
    correctAnswer: 0,
    explanation: 'Garden-path sentences lead the reader into a grammatical interpretation that turns out to be wrong, forcing the brain to re-parse the sentence!',
    difficulty: 'Difficult'
  },
  {
    id: 'd7',
    category: 'Earth & Geology',
    question: 'Why is the Earth\'s inner core solid despite being hotter than the surface of the Sun?',
    options: [
      'Lack of radioactive decay in the core',
      'Immense gravitational pressure prevents melting',
      'Composition of pure unyielding diamond',
      'Absence of oxygen prevents liquid state'
    ],
    correctAnswer: 1,
    explanation: 'The extreme pressure of 3.6 million atmospheres forces iron atoms into a crystal lattice, preventing them from liquefying despite 5,700°C temperatures!',
    difficulty: 'Difficult'
  },
  {
    id: 'd8',
    category: 'Computer Science',
    question: 'Why was the Millennium Bug (Y2K) technically created by early programmers?',
    options: [
      'Punch cards only stored 2-digit years to save precious memory',
      'Early transistors couldn\'t calculate beyond number 1999',
      'Binary math resets every 100 years',
      'Operating systems used 8-bit registers only'
    ],
    correctAnswer: 0,
    explanation: 'In the 1960s-70s, memory was extremely expensive, so saving 2 bytes per date record by storing "99" instead of "1999" saved millions of dollars!',
    difficulty: 'Difficult'
  },
  {
    id: 'd9',
    category: 'Animal Intelligence',
    question: 'What enables crows to remember human faces for several years and teach their offspring?',
    options: [
      'Pheromone scent marking',
      'High neuronal density in the avian nidopallium',
      'Echolocation resonance mapping',
      'Inherited genetic memory'
    ],
    correctAnswer: 1,
    explanation: 'Corvids have a hyper-dense forebrain region called the nidopallium that processes facial features, toolmaking, and social lore across generations!',
    difficulty: 'Difficult'
  },
  {
    id: 'd10',
    category: 'Human Biology',
    question: 'Why do humans get "brain freeze" (sphenopalatine ganglioneuralgia) when eating ice cream quickly?',
    options: [
      'Brain tissue drops below critical temperature',
      'Rapid dilation of anterior cerebral arteries to warm the roof of mouth',
      'Spasm of the optic nerve',
      'Sudden constriction of the trachea'
    ],
    correctAnswer: 1,
    explanation: 'When extreme cold touches the palate, the brain rushes blood through the anterior cerebral artery to warm up, triggering referred nerve pain in the forehead!',
    difficulty: 'Difficult'
  },
  {
    id: 'd11',
    category: 'Mathematics & Paradoxes',
    question: 'In the Monty Hall problem, why does switching doors double your probability of winning from 1/3 to 2/3?',
    options: [
      'The host adds a new prize behind the remaining door',
      'Host\'s knowledge filters out a losing door, concentrating original 2/3 probability into the single unopened door',
      'It is a 50/50 illusion with no mathematical difference',
      'Bayes theorem fails in 3-choice scenarios'
    ],
    correctAnswer: 1,
    explanation: 'Your initial choice has a 1/3 chance of being right. The other two doors combined have a 2/3 chance. Since the host reveals a goat, that full 2/3 transfers to the remaining door!',
    difficulty: 'Difficult'
  },
  {
    id: 'd12',
    category: 'Thermodynamics',
    question: 'What is the Mpemba effect in physics?',
    options: [
      'Cold water expands when cooled',
      'Hot water can freeze faster than cold water under certain conditions',
      'Water boils faster at high altitudes',
      'Ice sublimes directly into vapor in dry air'
    ],
    correctAnswer: 1,
    explanation: 'Under specific container and convection setups, hot water can freeze faster than colder water due to rapid evaporation, dissolved gases, and convection currents!',
    difficulty: 'Difficult'
  },
  {
    id: 'd13',
    category: 'Evolutionary Biology',
    question: 'Why do human beings still have goosebumps when cold or frightened?',
    options: [
      'To stimulate capillary blood flow',
      'Vestigial pilomotor reflex meant to fluff up thick fur and look larger',
      'To squeeze sweat glands shut',
      'To generate friction heat on skin'
    ],
    correctAnswer: 1,
    explanation: 'Goosebumps are caused by tiny arrector pili muscles pulling hair upright—a reflex inherited from hairy ancestors to trap air for insulation or intimidate predators!',
    difficulty: 'Difficult'
  },
  {
    id: 'd14',
    category: 'World History & Cryptography',
    question: 'How was the Enigma machine cipher cracked by Alan Turing and Bletchley Park team?',
    options: [
      'Capturing a spy who leaked rotor keys',
      'Exploiting the flaw that no letter could ever encrypt as itself',
      'Using early quantum computing algorithms',
      'Intercepting Morse code frequency modulation'
    ],
    correctAnswer: 1,
    explanation: 'The Enigma\'s fatal design flaw was that a letter could never be enciphered as itself. Turing used this weakness to eliminate millions of rotor combinations using Bombe machines!',
    difficulty: 'Difficult'
  },
  {
    id: 'd15',
    category: 'Aviation & Aerodynamics',
    question: 'Why are airplane windows rounded instead of square?',
    options: [
      'To reduce cabin air resistance',
      'Square corners concentrate stress causing catastrophic metal fatigue',
      'To give passengers a wider panoramic view',
      'Easier manufacturing process'
    ],
    correctAnswer: 1,
    explanation: 'After two de Havilland Comet airliners broke apart in 1954, engineers discovered square windows concentrated pressure stress at sharp corners, leading to metal fatigue!',
    difficulty: 'Difficult'
  },
  {
    id: 'd16',
    category: 'Oceanography',
    question: 'What causes the "Blowing of the Wells" (Tidal resonance) in the Bay of Fundy?',
    options: [
      'Underwater volcanic activity',
      'Natural resonance frequency of the basin matches the ocean\'s 12.4-hour tidal cycle',
      'Earth\'s rotational Coriolis force alone',
      'Melting glacier runoff'
    ],
    correctAnswer: 1,
    explanation: 'The Bay of Fundy has 50-foot tides because the natural sloshing period of the basin matches the lunar tide period, creating massive constructive resonance!',
    difficulty: 'Difficult'
  },
  {
    id: 'd17',
    category: 'Astronomy & Light',
    question: 'Why does the Sun appear squashed or flattened on the horizon at sunset?',
    options: [
      'Solar thermal expansion in cooler evening air',
      'Atmospheric refraction bends the lower edge of the Sun more than the upper edge',
      'Optical distortion by oceanic moisture',
      'Gravitational lensing by the Moon'
    ],
    correctAnswer: 1,
    explanation: 'Because atmospheric density increases toward the ground, light from the bottom of the solar disk is refracted upward more than light from the top, compressing its vertical shape!',
    difficulty: 'Difficult'
  },

  // --- MEDIUM (17 Questions) ---
  {
    id: 'm1',
    category: 'Everyday Physics',
    question: 'Why do wet clothes look darker than dry clothes?',
    options: [
      'Water absorbs light spectrums',
      'Water changes fabric chemistry',
      'Water allows more light to pass into fibers instead of reflecting back',
      'Optical illusion from cooling'
    ],
    correctAnswer: 2,
    explanation: 'Water has a refractive index closer to fabric fibers than air does, causing light to penetrate deeper and scatter internally rather than reflecting to your eyes!',
    difficulty: 'Medium'
  },
  {
    id: 'm2',
    category: 'Sound & Acoustics',
    question: 'Why is it so quiet and peaceful after a heavy snowfall?',
    options: [
      'Cold air prevents sound waves from traveling',
      'Porous spaces between snow crystals trap and absorb sound waves',
      'Animals stop making noise completely',
      'Atmospheric pressure dampens eardrum sensitivity'
    ],
    correctAnswer: 1,
    explanation: 'Fresh snow is composed of 90% air and billions of tiny open crystalline pockets, acting as a natural acoustic foam that absorbs sound vibrations!',
    difficulty: 'Medium'
  },
  {
    id: 'm3',
    category: 'Food Science',
    question: 'Why does cutting onions make your eyes water?',
    options: [
      'Spicy capsaicin aerosolizes in air',
      'Enzymes release syn-propanethial-S-oxide which turns to mild sulfuric acid on tears',
      'Microscopic seeds irritate the cornea',
      'Volatile citric acid vapors'
    ],
    correctAnswer: 1,
    explanation: 'Chopping breaks onion cells, mixing alliinase enzymes to form a sulfur gas that reacts with eye moisture to produce trace sulfuric acid, triggering tear glands!',
    difficulty: 'Medium'
  },
  {
    id: 'm4',
    category: 'Animal Wonders',
    question: 'Why do flamingos stand on one leg?',
    options: [
      'To rest one half of their brain',
      'Passive biomechanical locking mechanism that conserves body heat and muscle energy',
      'To blend in with reeds to avoid predators',
      'To dry out their webbed feet'
    ],
    correctAnswer: 1,
    explanation: 'A flamingo\'s knee joints lock passively into place without any active muscle effort, reducing heat loss through their bare legs in chilly water!',
    difficulty: 'Medium'
  },
  {
    id: 'm5',
    category: 'Everyday Chemistry',
    question: 'Why does sliced apple turn brown when left exposed to air?',
    options: [
      'Bacterial mold growth',
      'Polyphenol oxidase enzyme reacting with atmospheric oxygen',
      'Sugar caramelization at room temperature',
      'Loss of moisture drying out the fruit'
    ],
    correctAnswer: 1,
    explanation: 'Enzymatic browning occurs when polyphenol oxidase in the apple flesh oxidizes polyphenols into dark melanin-like pigments to defend against rot!',
    difficulty: 'Medium'
  },
  {
    id: 'm6',
    category: 'Everyday Tech',
    question: 'How do touchscreens on smartphones detect your finger tap?',
    options: [
      'Pressure sensors measure physical weight',
      'Your conductive skin alters the screen\'s electrostatic field',
      'Infrared heat sensors detect body warmth',
      'Sound vibrations from the tap'
    ],
    correctAnswer: 1,
    explanation: 'Capacitive touchscreens maintain an electrostatic grid. Your finger conductively draws a tiny electric charge, letting the chip triangulate coordinates instantly!',
    difficulty: 'Medium'
  },
  {
    id: 'm7',
    category: 'Nature & Botany',
    question: 'Why do sunflowers face east when they mature into adulthood?',
    options: [
      'To avoid afternoon thunderstorms',
      'Morning warmth attracts 5x more pollinating bees',
      'Their heavy flower heads break stems if they turn west',
      'To protect seeds from night frost'
    ],
    correctAnswer: 1,
    explanation: 'While young sunflowers track the sun (heliotropism), mature flowers settle facing east because early morning solar warming attracts five times more bees and pollinators!',
    difficulty: 'Medium'
  },
  {
    id: 'm8',
    category: 'Space & Planets',
    question: 'Why is a day on Venus longer than a year on Venus?',
    options: [
      'Venus has an extremely wide elliptical orbit',
      'Venus rotates on its axis extremely slowly (243 Earth days) while orbiting Sun in 225 days',
      'Solar tides have stopped its core from spinning',
      'Relativistic time dilation from proximity to the Sun'
    ],
    correctAnswer: 1,
    explanation: 'Venus takes 243 Earth days to complete one rotation on its axis, but only 225 Earth days to complete an entire orbit around the Sun!',
    difficulty: 'Medium'
  },
  {
    id: 'm9',
    category: 'Weather & Meteorology',
    question: 'What gives rain its signature earthy scent called "Petrichor"?',
    options: [
      'Ozone dissolving in puddles',
      'Geosmin chemical produced by soil actinobacteria released by raindrops',
      'Pine tree sap aerosolized by wind',
      'Nitrogen gas in lightning strikes'
    ],
    correctAnswer: 1,
    explanation: 'When raindrops hit dry soil, they trap air bubbles that burst upward, launching aerosols of "geosmin"—an organic compound made by soil-dwelling bacteria!',
    difficulty: 'Medium'
  },
  {
    id: 'm10',
    category: 'Human Body',
    question: 'Why do fingers and toes wrinkle like prunes when soaked in water?',
    options: [
      'Skin cells absorb water and swell up',
      'Active nervous system response to improve underwater grip',
      'Natural oils dissolving from the epidermis',
      'Temporary dehydration of dead skin'
    ],
    correctAnswer: 1,
    explanation: 'Wrinkling is not osmosis—it is an evolutionary nervous system reflex that constricts blood vessels to create drainage channels for better grip on wet surfaces!',
    difficulty: 'Medium'
  },
  {
    id: 'm11',
    category: 'Nature & Geology',
    question: 'Why do deserts get extremely cold at night after scorching hot days?',
    options: [
      'Sand releases cold underground steam',
      'Lack of humidity and clouds allows stored heat to radiate directly into space',
      'Sudden change in atmospheric pressure',
      'High elevation winds cool the sand'
    ],
    correctAnswer: 1,
    explanation: 'Water vapor is the primary greenhouse gas on Earth. In bone-dry desert air, there is no moisture blanket to trap ground heat, allowing it to radiate straight into space!',
    difficulty: 'Medium'
  },
  {
    id: 'm12',
    category: 'Inventions & History',
    question: 'Why were blue jeans originally dyed with indigo pigment?',
    options: [
      'Indigo was the cheapest synthetic dye in 1870',
      'Indigo molecules bind only to the outside of cotton threads, allowing fabric to soften without weakening fibers',
      'Miners believed blue color repelled venomous snakes',
      'Navy surplus regulations'
    ],
    correctAnswer: 1,
    explanation: 'Unlike chemical dyes that penetrate fibers, indigo coats only the exterior of cotton yarn. With wear and washing, color fades gently while keeping the fabric robust!',
    difficulty: 'Medium'
  },
  {
    id: 'm13',
    category: 'Animal Kingdom',
    question: 'Why can geckos walk effortlessly across glass ceilings without glue or suction?',
    options: [
      'Microscopic electrostatic sparks',
      'Van der Waals molecular forces between millions of microscopic spatula hairs (setae)',
      'Sticky secreted mucus glands',
      'Atmospheric vacuum chambers on toe pads'
    ],
    correctAnswer: 1,
    explanation: 'Each gecko toe has hundreds of thousands of microscopic hairs that split into spatulae, creating atomic-level Van der Waals attractions with the surface!',
    difficulty: 'Medium'
  },
  {
    id: 'm14',
    category: 'Everyday Physics',
    question: 'Why does hot food smell stronger than cold food?',
    options: [
      'Heat changes the chemical structure of spices',
      'Thermal energy increases molecular kinetic energy, causing more volatile aroma compounds to vaporize',
      'Cold air numbs nasal olfactory receptors',
      'Steam contains artificial flavor enhancers'
    ],
    correctAnswer: 1,
    explanation: 'Higher temperature provides kinetic energy to volatile odor molecules, enabling them to evaporate into the air and travel into your nasal olfactory receptors!',
    difficulty: 'Medium'
  },
  {
    id: 'm15',
    category: 'Architecture & Physics',
    question: 'Why do suspension bridge cables hang in a characteristic U-curve called a catenary / parabola?',
    options: [
      'Wind aerodynamics deflection',
      'Evenly distributed deck weight creates a parabolic curve of pure tension',
      'Thermal expansion allowance',
      'Architectural aesthetic standards'
    ],
    correctAnswer: 1,
    explanation: 'When supporting a uniform horizontal load (the road deck), hanging cables naturally form a mathematical parabola that eliminates bending stress, carrying all load in pure tension!',
    difficulty: 'Medium'
  },
  {
    id: 'm16',
    category: 'Optics & Color',
    question: 'Why does the ocean appear deep blue even on clear days?',
    options: [
      'It simply reflects the blue sky above',
      'Water molecules absorb red, orange, and yellow light wavelengths, scattering blue light back',
      'High concentrations of copper minerals in saltwater',
      'Microscopic bioluminescent plankton'
    ],
    correctAnswer: 1,
    explanation: 'While surface reflection plays a small role, water itself naturally absorbs long red and yellow wavelengths of light, leaving short blue wavelengths to scatter back to your eyes!',
    difficulty: 'Medium'
  },
  {
    id: 'm17',
    category: 'Everyday Tech',
    question: 'Why does microwave oven heat food from the inside out or unevenly?',
    options: [
      'Radiation only hits center atoms',
      '2.45 GHz microwaves penetrate a few centimeters and excite water molecules through dielectric heating',
      'Metal walls create magnetic hotspots',
      'Plate rotation reverses polarity'
    ],
    correctAnswer: 1,
    explanation: 'Microwaves penetrate several centimeters into food and rapidly flip polar water and fat molecules billions of times a second, generating frictional heat throughout!',
    difficulty: 'Medium'
  },

  // --- EASY (16 Questions) ---
  {
    id: 'e1',
    category: 'Money & Life Skills',
    question: 'What is the "Rule of 72" used for in finance?',
    options: [
      'Calculating credit card interest rates',
      'Estimating years needed to double an investment',
      'Filing standard tax deduction forms',
      'Setting an emergency savings percentage'
    ],
    correctAnswer: 1,
    explanation: 'Divide 72 by your annual interest rate to instantly calculate the approximate number of years it will take for your investment to double!',
    difficulty: 'Easy'
  },
  {
    id: 'e2',
    category: 'Food & Archaeology',
    question: 'Why does pure natural honey never spoil even after thousands of years?',
    options: [
      'Natural chemical preservatives added by bees',
      'Extremely low moisture content and natural high acidity create a hostile environment for bacteria',
      'High freezing point preserves sugars',
      'Beeswax airtight sealing'
    ],
    correctAnswer: 1,
    explanation: 'Honey contains less than 18% water and has a pH around 3.5. Bacteria and fungi cannot survive in such osmotic, low-moisture conditions!',
    difficulty: 'Easy'
  },
  {
    id: 'e3',
    category: 'Nature & Animals',
    question: 'Why do wombats produce distinctive cube-shaped poop?',
    options: [
      'Square-shaped intestinal bones',
      'Intestinal wall contractions with varying elasticity stop poop from rolling off rocks',
      'Diet of mineral clay',
      'To build rectangular shelter walls'
    ],
    correctAnswer: 1,
    explanation: 'Wombats have unique intestinal elasticity that dries and molds feces into cubes so they can mark territory on rocks without it rolling away!',
    difficulty: 'Easy'
  },
  {
    id: 'e4',
    category: 'Space & Astronomy',
    question: 'Why does the Moon have so many visible craters while the Earth has very few?',
    options: [
      'The Moon acts as a shield taking all hits',
      'Earth has atmosphere that burns meteors, plus plate tectonics and erosion that erase craters',
      'Moon\'s gravity is 6 times stronger',
      'Earth was formed millions of years later'
    ],
    correctAnswer: 1,
    explanation: 'Earth\'s atmosphere burns up small meteoroids, while active weather, water erosion, and continental drift recycle and erase ancient impact scars!',
    difficulty: 'Easy'
  },
  {
    id: 'e5',
    category: 'Nature & Botany',
    question: 'Why are bananas curved instead of growing straight?',
    options: [
      'Heavy fruit weight bends the branches',
      'They grow against gravity towards sunlight in a process called negative geotropism',
      'Wind currents in tropical rainforests',
      'Water distribution inside the peel'
    ],
    correctAnswer: 1,
    explanation: 'Bananas undergo "negative geotropism"—they start growing down toward the ground, but then turn upwards toward the sun, giving them their iconic curve!',
    difficulty: 'Easy'
  },
  {
    id: 'e6',
    category: 'Animal Kingdom',
    question: 'How do chameleons primarily change their skin color?',
    options: [
      'Injecting colored venom under scales',
      'Rearranging microscopic photonic nanocrystals in their iridophore skin cells',
      'Absorbing pigment from leaves they touch',
      'Flushing blood to skin surface'
    ],
    correctAnswer: 1,
    explanation: 'Chameleons don\'t just move pigments—they shift the spacing between microscopic guanine nanocrystals in their skin, changing which light wavelengths reflect!',
    difficulty: 'Easy'
  },
  {
    id: 'e7',
    category: 'General Knowledge',
    question: 'Which is the only continent on Earth with no active native volcanoes?',
    options: [
      'Antarctica',
      'Australia',
      'Europe',
      'South America'
    ],
    correctAnswer: 1,
    explanation: 'Australia sits right in the middle of a massive tectonic plate with no active plate boundaries, meaning it has no active volcanoes on its mainland!',
    difficulty: 'Easy'
  },
  {
    id: 'e8',
    category: 'Human Body',
    question: 'Why do human eyes blink around 15 to 20 times every minute?',
    options: [
      'To exercise eyelid muscles',
      'To spread tear film evenly, wash away dust, and supply oxygen to the cornea',
      'To reset the visual cortex in the brain',
      'To adjust pupil aperture size'
    ],
    correctAnswer: 1,
    explanation: 'The cornea has no blood vessels for clear vision, so blinking spreads tear fluid that supplies essential oxygen and nutrients while keeping the eye lubricated!',
    difficulty: 'Easy'
  },
  {
    id: 'e9',
    category: 'Geography & Nature',
    question: 'Why is the Dead Sea so buoyant that people can float without swimming?',
    options: [
      'Upward geothermal thermal currents',
      'Extreme 34% salinity creates high water density supporting human body weight',
      'Submerged coral reefs close to surface',
      'High atmospheric pressure'
    ],
    correctAnswer: 1,
    explanation: 'With a salt concentration 10 times higher than the ocean, the water\'s density is 1.24 kg/L, which easily supports human body mass above the surface!',
    difficulty: 'Easy'
  },
  {
    id: 'e10',
    category: 'Ocean & Biology',
    question: 'What color is an octopus\'s blood and why?',
    options: [
      'Red from hemoglobin iron',
      'Blue due to copper-based hemocyanin protein',
      'Green from chlorophyll diet',
      'Clear transparent plasma'
    ],
    correctAnswer: 1,
    explanation: 'Instead of iron-based hemoglobin (red), octopuses use copper-based hemocyanin to transport oxygen in cold, low-oxygen deep water, turning their blood blue!',
    difficulty: 'Easy'
  },
  {
    id: 'e11',
    category: 'Science & Nature',
    question: 'Why can birds sit safely on high-voltage electrical wires without getting shocked?',
    options: [
      'Their feet are coated in thick insulating rubbery fat',
      'They do not complete an electrical circuit to the ground or another wire',
      'Power lines have 100% thick outer insulation',
      'Birds have zero electrical conductivity'
    ],
    correctAnswer: 1,
    explanation: 'Electricity requires a closed circuit and potential difference to flow. Since both bird feet touch the exact same wire, no electricity diverts through its body!',
    difficulty: 'Easy'
  },
  {
    id: 'e12',
    category: 'Human Biology',
    question: 'Why do our muscles feel sore a day or two after an intense workout (DOMS)?',
    options: [
      'Lactic acid crystal build-up in joints',
      'Microscopic muscle fiber tears and subsequent inflammation repair',
      'Dehydration of bone marrow',
      'Calcium deficiency in tendons'
    ],
    correctAnswer: 1,
    explanation: 'Delayed Onset Muscle Soreness (DOMS) is caused by micro-tears in muscle fibers and the body\'s natural repair inflammation, not by lactic acid (which clears within an hour)!',
    difficulty: 'Easy'
  },
  {
    id: 'e13',
    category: 'Inventions & History',
    question: 'Why was the keyboard layout "QWERTY" designed in 1873?',
    options: [
      'To maximize typing speed for stenographers',
      'To separate commonly paired letters and prevent mechanical typewriter arms from jamming',
      'Based on the Latin alphabet frequency',
      'To fit the standard 10-finger hand anatomy'
    ],
    correctAnswer: 1,
    explanation: 'Christopher Sholes placed frequently co-occurring letters (like S and T, or T and H) apart so mechanical type-bars would not collide and jam when typing quickly!',
    difficulty: 'Easy'
  },
  {
    id: 'e14',
    category: 'Animal Kingdom',
    question: 'Can sloths hold their breath longer underwater than dolphins can?',
    options: [
      'No, sloths drown instantly in water',
      'Yes, sloths can slow their heart rate to hold breath up to 40 minutes (dolphins surface around 10-15 mins)',
      'They breathe through their fur underwater',
      'Dolphins can hold their breath for 2 hours'
    ],
    correctAnswer: 1,
    explanation: 'By dropping their heart rate to a third of its normal pace, sloths can hold their breath underwater for up to 40 minutes—surpassing dolphins!',
    difficulty: 'Easy'
  },
  {
    id: 'e15',
    category: 'Space & Stars',
    question: 'Are there more trees on Earth than stars in the Milky Way galaxy?',
    options: [
      'No, stars outnumber trees by billions',
      'Yes, Earth has ~3 trillion trees while the Milky Way has ~100-400 billion stars',
      'They are exactly equal in count',
      'Stars cannot be counted accurately'
    ],
    correctAnswer: 1,
    explanation: 'Astronomers estimate the Milky Way has 100 to 400 billion stars, while satellite forestry scans count over 3.04 trillion trees on Earth!',
    difficulty: 'Easy'
  },
  {
    id: 'e16',
    category: 'Everyday Physics',
    question: 'Why does ice float on top of liquid water instead of sinking?',
    options: [
      'Ice traps air bubbles during freezing',
      'Hydrogen bonds form a hexagonal crystalline structure that makes ice 9% less dense than water',
      'Surface tension pushes ice to top',
      'Salt precipitates to the bottom'
    ],
    correctAnswer: 1,
    explanation: 'Water is one of the rare substances that expands as it freezes. Hydrogen bonds lock molecules into an open hexagonal lattice, reducing density!',
    difficulty: 'Easy'
  }
];

export const FEATURED_QUIZZES: QuizCardData[] = [
  QUESTION_BANK.find(q => q.difficulty === 'Difficult') || QUESTION_BANK[0],
  QUESTION_BANK.find(q => q.difficulty === 'Medium') || QUESTION_BANK[17],
  QUESTION_BANK.find(q => q.difficulty === 'Easy') || QUESTION_BANK[34]
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'cs1',
    slug: 'dps-bangalore-quriosity-league',
    clientName: 'Delhi Public School',
    clientType: 'School',
    title: 'How DPS Transformed General Knowledge into an Active Weekly Sport for 4,000+ Students',
    summary: 'Replacing static encyclopedic learning with QShala interactive storytelling and weekly quriosity modules increased student participation by 340%.',
    impactMetrics: [
      { label: 'Students Engaged', value: '4,200+' },
      { label: 'Retention Score', value: '+88%' },
      { label: 'Parent Satisfaction', value: '98.4%' }
    ],
    quote: {
      text: 'QShala turned standard GK into the most anticipated hour of the school week. Children ask "Why?" with real passion now.',
      author: 'Sunita Sharma',
      role: 'Principal, DPS Bangalore East'
    },
    tags: ['K-12', 'Curriculum', 'Socratic Pedagogy']
  },
  {
    id: 'cs2',
    slug: 'flipkart-corporate-trivia-league',
    clientName: 'Flipkart',
    clientType: 'Corporate',
    title: 'Driving Hybrid Team Connection Across 12 Cities with Custom QShala Live Trivia',
    summary: 'A 6-week gamified cross-functional championship that boosted inter-departmental engagement during company-wide hybrid work initiatives.',
    impactMetrics: [
      { label: 'Employees Joined', value: '1,800+' },
      { label: 'Live Engagement Rate', value: '94%' },
      { label: 'NPS Score', value: '92/100' }
    ],
    quote: {
      text: 'The energy QT and the QShala team brought to our townhalls was phenomenal. It bonded engineering and marketing seamlessly.',
      author: 'Rajesh Nair',
      role: 'Head of Employee Experience, Flipkart'
    },
    tags: ['Corporate', 'Teambuilding', 'Hybrid Work']
  },
  {
    id: 'cs3',
    slug: 'wipro-onboarding-gamification',
    clientName: 'Wipro',
    clientType: 'Corporate',
    title: 'Gamifying Onboarding & Corporate Culture for 5,000+ Global New Hires',
    summary: 'Replaced traditional slide presentations with interactive brand quests and company history trivia tournaments.',
    impactMetrics: [
      { label: 'New Hires Onboarded', value: '5,000+' },
      { label: 'Completion Rate', value: '96%' },
      { label: 'Early Attrition Drop', value: '-12%' }
    ],
    quote: {
      text: 'We\'ve been working with QShala for over two months now and we can\'t get enough of them! It makes culture stick.',
      author: 'Manish Jain',
      role: 'Global L&D Director, Wipro'
    },
    tags: ['Onboarding', 'Gamification', 'L&D']
  },
  {
    id: 'cs4',
    slug: 'nps-socratic-science-storytelling',
    clientName: 'National Public School',
    clientType: 'School',
    title: 'Pioneering Socratic Science & Civics Storytelling for Middle Schoolers',
    summary: 'Integrated weekly real-world discovery modules to connect textbook science with current affairs and everyday phenomena.',
    impactMetrics: [
      { label: 'Students Active', value: '2,100+' },
      { label: 'Science Interest', value: '+92%' },
      { label: 'Teacher Endorsement', value: '99%' }
    ],
    quote: {
      text: 'Our middle schoolers are engaged like never before. They don\'t just memorize science—they question it.',
      author: 'Dr. Revathi Srinivasan',
      role: 'Academic Director, NPS'
    },
    tags: ['K-12', 'Science', 'Critical Thinking']
  },
  {
    id: 'cs5',
    slug: 'inventure-academy-critical-thinking',
    clientName: 'Inventure Academy',
    clientType: 'School',
    title: 'Building 21st-Century Critical Thinking & Public Debate Leagues',
    summary: 'A multi-tier quriosity league where students analyze global news stories, logical fallacies, and ethical dilemmas.',
    impactMetrics: [
      { label: 'Learners Joined', value: '1,500+' },
      { label: 'Participation Boost', value: '3.4x' },
      { label: 'Student Rating', value: '4.9/5' }
    ],
    quote: {
      text: 'QShala fits perfectly into our learner-centric philosophy. It builds confident, curious global citizens.',
      author: 'Nooraine Fazal',
      role: 'Co-Founder & Managing Trustee, Inventure Academy'
    },
    tags: ['Debate', '21st Century Skills', 'Media Literacy']
  },
  {
    id: 'cs6',
    slug: 'tcs-cross-hub-workplace-engagement',
    clientName: 'TCS',
    clientType: 'Corporate',
    title: 'Cross-Functional Workplace Engagement Across 8 Regional Tech Hubs',
    summary: 'Quarterly inter-hub quiz championships with live digital buzzers and real-time leaderboards.',
    impactMetrics: [
      { label: 'Participants Joined', value: '3,500+' },
      { label: 'Engagement Rate', value: '91%' },
      { label: 'NPS Rating', value: '94/100' }
    ],
    quote: {
      text: 'QShala for more than two months now and we can’t get enough of them! The excitement in our hubs is palpable.',
      author: 'Rahul Singh',
      role: 'VP Employee Engagement, TCS'
    },
    tags: ['Corporate', 'Multi-Hub', 'Employee Retention']
  },
  {
    id: 'cs7',
    slug: 'iit-bombay-techfest-championship',
    clientName: 'IIT Bombay',
    clientType: 'College',
    title: 'Hosting India\'s Largest Inter-Collegiate Quriosity Quiz Championship',
    summary: 'Packed auditoriums with 6,000+ delegates competing in high-stakes science, tech, and general awareness rounds.',
    impactMetrics: [
      { label: 'College Delegates', value: '6,000+' },
      { label: 'Colleges Represented', value: '50+' },
      { label: 'Fest Rating', value: '98%' }
    ],
    quote: {
      text: 'The QShala quiz masters held an audience of 6,000 students spellbound for 3 straight hours.',
      author: 'Aakash Verma',
      role: 'Overall Coordinator, IIT Bombay Techfest'
    },
    tags: ['College', 'Fest Championship', 'Tech Quiz']
  },
  {
    id: 'cs8',
    slug: 'iim-bangalore-business-simulations',
    clientName: 'IIM Bangalore',
    clientType: 'College',
    title: 'Real-World Business Case Study Simulations & Strategy Quests for MBAs',
    summary: 'Interactive business trivia and market analysis strategy quests designed for future corporate leaders.',
    impactMetrics: [
      { label: 'MBA Candidates', value: '1,200+' },
      { label: 'Industry Relevance', value: '100%' },
      { label: 'Satisfaction Score', value: '4.9/5' }
    ],
    quote: {
      text: 'QShala brings an incredible blend of sharp business acumen and high-octane gamification.',
      author: 'Prof. Sourav Mukherji',
      role: 'Dean of Programs, IIM Bangalore'
    },
    tags: ['Higher Ed', 'MBA', 'Business Strategy']
  },
  {
    id: 'cs9',
    slug: 'sobha-city-family-game-nights',
    clientName: 'Sobha City Community',
    clientType: 'Community',
    title: 'Screen-Free Weekend Family Game Nights & Neighborhood Pub Quizzes',
    summary: 'Bringing parents, kids, and neighbors together for weekend offline trivia tournaments in residential complexes.',
    impactMetrics: [
      { label: 'Families Joined', value: '450+' },
      { label: 'Screen-Free Fun', value: '100%' },
      { label: 'Community Rating', value: '4.9/5' }
    ],
    quote: {
      text: 'It brought our entire apartment complex together! Kids and grandparents were on the same team laughing and learning.',
      author: 'Priya Sundaram',
      role: 'President, Sobha Resident Association'
    },
    tags: ['Community', 'Family', 'Screen-Free']
  },
  {
    id: 'cs10',
    slug: 'wework-community-networking-nights',
    clientName: 'WeWork India',
    clientType: 'Corporate',
    title: 'Monthly Community Pub Quizzes & Startup Founder Networking Nights',
    summary: 'Gamified pub quizzes hosted across WeWork spaces to spark casual networking among founders and freelancers.',
    impactMetrics: [
      { label: 'Members Engaged', value: '2,400+' },
      { label: 'Networking Boost', value: '+91%' },
      { label: 'Satisfaction', value: '96/100' }
    ],
    quote: {
      text: 'We\'ve been working with QShala for more than two months now and we can’t get enough of them! Essential member experience.',
      author: 'Bhavya Tripathi',
      role: 'Community Lead, WeWork'
    },
    tags: ['Coworking', 'Networking', 'Pub Quiz']
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'p1',
    slug: 'quriosity-deck-100',
    title: 'The Great Quriosity Deck (100 Cards)',
    category: 'Game',
    price: '₹799',
    rating: 4.9,
    description: '100 illustrated flash cards with surprising facts, riddle questions, and QT mascot tips.',
    imageColor: 'bg-[#30B2E7]',
    isPopular: true
  },
  {
    id: 'p2',
    slug: 'why-book-365-questions',
    title: 'Why? The Book of 365 Daily Questions',
    category: 'Book',
    price: '₹599',
    rating: 5.0,
    description: 'Hardcover book exploring science, history, nature, and space for curious young minds.',
    imageColor: 'bg-[#FDB913]',
    isPopular: true
  },
  {
    id: 'p3',
    slug: 'junior-money-mastermind',
    title: 'Junior Money Mastermind Board Game',
    category: 'Learning Kit',
    price: '₹1,299',
    rating: 4.8,
    description: 'Includes play currency, budgeting board game, savings tracker, and interactive challenge cards.',
    imageColor: 'bg-[#75B543]'
  },
  {
    id: 'p4',
    slug: 'qt-mascot-plushie',
    title: 'QT The Curious Cat Plushie Toy',
    category: 'Merchandise',
    price: '₹899',
    rating: 4.9,
    description: 'Super-soft huggable QT plushie toy with interchangeable enamel quriosity badges.',
    imageColor: 'bg-[#FDB913]'
  }
];
