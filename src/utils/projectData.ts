import Post from '../interfaces/Post';
import Posts from '../interfaces/Posts';

const RPGMaker = ['_himeworks', '8-BitNovels', 'alexe_277', 'Algebra_Child', 'AngelStarStudios', 'Animenerd24', 'arocta27', 'Basoosh', 'beakxlegosi', 'bebder_game', 'BenderWaffles', 'BlackysBro', 'BoysDontCry38', 'CactusOhno', 'CaptainMarcia', 'CarfDarko', 'Chaos17', 'CoopNinjask', 'damianfox', 'danielis3', 'Dayasha', 'DekitaRPG', 'Deviate_Dv8', 'DevOUrBLadEX', 'DuncanGallagher', 'DvLyon', 'Etarxer', 'EUOS_the_cat', 'evanvivevanviveiros', 'Ew_girls', 'explt', 'flying_horker', 'FourtKnight', 'FromFleshToDust', 'Good_Good_Games', 'henrythemoonrabbit', 'henzosb', 'Hobotheft', 'Hudell', 'Hyptosis', 'i4Ni_Leon', 'invadable_harmony', 'Iron-Unhappy', 'jihanger', 'KauzzRes', 'MakoBatt', 'MegaEpicMax', 'meteraider', 'MiyokoPSO', 'Nemery_williams', 'NoboDYNo0b', 'OffTheGridGaming', 'ParrotPies', 'paxtonia', 'pdonavon1', 'peelman1978', 'pixeloid00', 'Plixel94', 'PsychicPersona', 'racistkomaeda', 'RaijouK', 'ravenpotter3', 'Raziel103', 'Robotpirategary', 'RoyalZombieStudios', 'Ruma_K', 'SigmaSuccour', 'simpsimpnotasimp', 'Sir_Legna', 'Ska_For_Brains', 'SomaCK2', 'Soulblade32', 'ssunlimited', 'Standardgamer55', 'subengari', 'Synrec', 'Tera_Tyrant_Shadic', 'thepomegranate', 'Throwaway-BookerGuy', 'TPetrichor', 'TsunSilver', 'Umropi', 'USAdude2020', 'WawaSC', 'Yasu_Takagi', 'zankypoo', 'Zoro_Messatsu'];
const devblogs = ['Pulse_games', 'UnityDude5', 'BunnyLord2008', 'DistroGamer', 'Neat-Games', 'YuriDDeveloper', 'mortoray', 'arthurrt', 'Cm64_', 'The_Joker98', 'bdmg114', 'someonemandev', 'AC-Daniel', 'brainwipe', 'DevBoundless', 'GamesInHouse', 'Huw2k8', 'Ducktus', 'HyveStudio', 'Shezo_Games', 'CarefullyDetuned', 'Quantum_Martin', 'The-F4LK3N', 'forgottenmachine', 'AccShockStudios', 'Krevzz', 'madbookstudios', 's0lly', 'udvaritibor95', 'GameDevRepublic', 'nycram99', 'Schmidt-', 'timkrief', 'ACallForAdventure', 'Dev-Mug', 'ZeroTris', 'SnaiperoG', 'nickavv', 'enigma2728', 'morgondag', 'nexxM'];
const gamedesign = ['deshara128', 'misomiso82', 'Crul_', 'SaaSGrowth', 'SquallySubset43', 'TurkusGyrational', 'nawab1234321', 'SuperRisto', 'chrismuriel', 'Neburay', 'el_drosophilosopher', 'friendofgorillas', 'ferret_king10', 'Sdueq', 'MrRempton', 'tyrannosauru', 'voxel_crutons', 'AbbreviationsHappy45', 'ned_poreyra', 'Intelligent-Big-7482', 'haloguy397', 'sockmonst3r', 'ia97lies', 'SigglesMagnus', 'ItsJm8', 'VentKazemaru', 'dMTable', 'MyCarIsFake'];
const gamedev = ['Dinari3D', 'thetalker101', 'ShrineWarsDev', 'SquallySubset43', 'Tyler_Potts_', 'Sexual_Lettuce', 'Raknarg', 'cheerfulboy', 'genarTheDev', 'SingularSchemes', 'oldguywithakeyboard', 'ChrisTharpArt', 'Papkin24', 'captin_Zenux', 'SquamousForest', 'Joyjan1234567', 'sScriptiee', 'MED_MAD', 'jayanam', 'ChristmasChan', 'CeleritasGames', 'Flashdx', 'omgsoftcats', 'sonicworkflow', 'Illumii', 'RogueWorlds', 'nawab1234321', 'Mjeno', 'MrCookiePot', 'ThatWasAJokeLads', 'FadrikAlexander', 'LegionMm', 'alaslipknot', 'UnityDude5', 'RichardEast', 'AnonTopat', 'DOOMRebooted', 'Dependent_Bird', 'SayAllenthing', 'ash4640', 'EternalStud3nt', 'Squarehusky', 'sjolledawg', 'Alstrainfinite', 'cedrick9998', 'J_Winn', 'GameDevTazdik', 'jettelly_games', 'E3Fell', 'proboardslolv5', 'Code_Monster', 'Dyuozor', 'ShyGuyhahaha132', 'Vitaro99', 'NoobDev7', 'natemi10', 'Khanx078', 'lukaspiderman1', 'SunnyValleyStudio', 'HarleeDavis246', 'woahtherefriend', 'TransportationNo8275', 'qugartgames', 'We_Visionaries', 'Glissile', 'itsPeetah', 'Biim_Games', '0xcfe', 's0lly', 'adarkenergy', 'besemop', 'tristanstoutenburg', 'LtRandolphGames', 'Hoorayaru', 'UnstableMainframe', 'AHAKuo', '_neenaw', 'MysteriousPlantain', 'luxysaugat', 'Slight_Crazy', 'PulseQ8', 'The_Scholastics', 'epiphanyatnight', 'PoloxDisc098', 'IAmTrying-Ok', 'BigRookGames', 'blu_duc', 'jodieeelu', 'sishaar', '0ranGeAneApplE_1442', 'AgemoIramF2P-MC17', 'PirateJC', 'Probably_Sam', 'Sersch', 'megarunner12'];
const gamedevscreens = ['bladesofheroes', 'safeena_games', 'MrPr1993', 'Nukefist', 'HustlaMasi', 'Hannah_the_Game', 'ravendawngame', 'nunisi', 'timkrief', 'AbyssLabDev', 'IAmASmallLad', 'JezzaPrime', 'infrared34', 'abezuska', 'NesiAwesomeness', 'GideonGriebenow', 'hipinds', 'akheelos', 'ACallForAdventure', 'trieckaga', 'Herogrinder', 'Bigbearmeal', 'EspirartGames', 'SweetySetsu', 'Janivexa', 'TheSeahorseHS', 'All_in_Games_Crew', 'SimplyGuy', 'DoerAndTheThinker', 'NeutralPheede', 'The_Joker98', 'Rythmical7', 'BigSquirmy', 'SweepingAvalanche', 'LifeforNazgul', 'ScoutsHonorGame', 'TinyMontana', 'diegolrs', 'publicidadeba', 'chinykian', 'eremite_games', 'nananame', 'akomomssim', 'IamAmeta', 'no5ifty6ix', 'CraftshopArts', 'bryqu', 'IndependentCrab1', 'AnastasyaZelenova', 'nightowldigital', 'TheLostWorld-Dev', 'Chikanut', 'FracturedVeil', 'Priory_Dev', 'mori92', 'LushkinR', 'taucetistudios', 'Edalbung', 'julcreutz', 'AspiringUnicornGames', 'Gamedust_Studio', 'seb_the_cat', 'Dave_SigurStudio', 'biblik', 'dronecloud', 'growbotgame', 'thefrenchdev', '_Abnormalia', 'tonywulum', 'Cm64_', 'RankWarmaster', 'joshjourneygame', 'Over9000Zombies', 'M_Nenad', 'MalboMX', 'pozzisoft', 'mvmvgames', 'DrDezmund', 'GamesInHouse', 'jettelly_games', 'rpssoftware', 'GuildOfDragons', 'phoenixsteelgames', 'anna2FOR2', 'Terrajedi77', 'Tony_Vilgotsky', 'MusicBeatReddit', 'OpenWorldInteractive', 'TheWoolyArtist', '-sl0b', 'zizhen96', 'PiesliceProductions', 'arthurrt', 'bengel2004', 'sweetdesignman', 'RetroReactor', 'blue_bubble_bee', 'xenoscapeGame', 'HyveStudio', 'TheShatteredLight', 'FatCatEntertainment', 'CrowbarSka', 'Beosar', 'Cockon', 'protokollstudio', 'TheSGP009', 'JarlSagan1278', 'Kalicola', 'centaurianmudpig', 'udvaritibor95', 'TinTinV', 'RootlessStudio', 'enigma2728', 'SergeyMakesAGame', 'Krevzz', 'alienantworld1hype', 'Rasie1', 'unleash_the_giraffe', 'jorgedesouzajr', 'SimpleLogistics', 'Kondor0', 'ComradeTaty', 'WaskilyWabit', 'SAVVU_Games', 'ArmedChalko', 'Dastashka', 'PSUDewwa', 'Ratstail91', 'zinkdeveloper', 'MountnRickRose', 'BrazenJesterStudios', 'DarkRingStudio', 'hook_games', 'Tommy1244', 'Spirit9541', 'supple_hands', 'VikongGames', 'SlickSpec', 'RiseoftheJaguar', 'ShieldbearerStudios', 'cnblack', 'Vatsal1991', 'Z-NexusStudios', 'Arcadepth', 'jonah_srg', 'InfiniteLet4', 'HastilyAssembled', 'lexferreiragames'];

const subreddits = [
  { name: 'RPGMaker', array: RPGMaker },
  { name: 'devblogs', array: devblogs },
  { name: 'gamedesign', array: gamedesign },
  { name: 'gamedev', array: gamedev },
  { name: 'gamedevscreens', array: gamedevscreens },
];

const formatProjectData = (subredditName: string, array: string[]): Posts => {
  const posts: Posts = [subredditName] as unknown as Posts;
  array.forEach((item) => {
    const obj: Post = {
      author: item,
      comments: [],
    };
    posts.push(obj as unknown as Post[]);
  });
  return posts;
};

export const generateAllData = (): Posts[] => {
  const allData: Posts[] = [] as unknown as Posts[];
  subreddits.forEach((item) => {
    const result = formatProjectData(item.name, item.array);
    allData.push(result);
  });
  return allData;
};

export default generateAllData;
