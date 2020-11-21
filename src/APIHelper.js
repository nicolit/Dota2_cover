import axios from "axios";


const CONFIG = {
  HEROES: "https://api.opendota.com/api/heroes",
};

const ROLES = ["Support", "Carry", "Nuker", "Disabler"];
const ROLES_COUNT = {'Support': 2, 'Carry': 1, 'Nuker': 1, 'Disabler': 1};

const getHeroImageURLs = (heroes) => {
  let heroesWithImages = [];
  for (var i = 0; i < heroes.length; i++) {
    var pureName = heroes[i].name.replace('npc_dota_hero_', '');
    let imgUrl = `http://cdn.dota2.com/apps/dota2/images/heroes/${pureName}_sb.png`;
    heroesWithImages.push({imgUrl, name: pureName, roles: heroes[i].roles.filter(role => ROLES.includes(role))});
  }
  return heroesWithImages;
};

const getHeroes = async () => {
  return await axios.get(`${CONFIG.HEROES}`).then((res) => {
    const { data } = res;

    let heroes = getHeroImageURLs(data);
    return heroes;
  });
};


/**
 *  Each team should include 2 heroes with a role of Support
    Each team should include 1 hero with a role of Carry
    Each team should include 1 hero with a role of Nuker
    Each team should include 1 hero with a role of Disabler
 * @param heroes 
 */
const splitHeroes = (heroes) => {
  heroes = heroes.sort(() => 0.5 - Math.random()); // Shuffle
  let heroRolesMap = {'Support': [], 'Carry': [], 'Nuker': [], 'Disabler': []};

  for (let i = 0; i < heroes.length; i++) {
    for (let role in heroRolesMap) {
      if (heroRolesMap[role].length < ROLES_COUNT[role]*2 && heroes[i].roles.includes(role)) {
        heroRolesMap[role].push(heroes[i]);
        break;
      }
    }
  }
  let teamHeroes = [[], []];
  for (let role in heroRolesMap) {
    teamHeroes[0] = teamHeroes[0].concat( heroRolesMap[role].slice(0, ROLES_COUNT[role]));
    teamHeroes[1] = teamHeroes[1].concat( heroRolesMap[role].slice(ROLES_COUNT[role]));
  }
  return {'A': teamHeroes[0],'B': teamHeroes[1]};
};

export default { getHeroes, getHeroImageURLs, splitHeroes };
