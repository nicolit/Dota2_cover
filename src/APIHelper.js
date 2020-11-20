import axios from "axios";


const CONFIG = {
  HEROES: "https://api.opendota.com/api/heroes",
};

const ROLES = ["Support", "Carry", "Nuker", "Disabler"];

const getHeroImageURLs = (heroes) => {
  let heroesWithImages = [];
  for (var i = 0; i < heroes.length; i++) {
    var pureName = heroes[i].name.replace('npc_dota_hero_', '');
    let imgUrl = `http://cdn.dota2.com/apps/dota2/images/heroes/${pureName}_sb.png`;
    heroesWithImages.push({imgUrl, name: heroes[i].name, roles: heroes[i].roles.filter(role => ROLES.includes(role))});
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

export default { getHeroes, getHeroImageURLs };
