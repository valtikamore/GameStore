import paladin from './assets/post/userPostImages/palad.jpg'
import leroy from './assets/post/userPostImages/leroy.png'
import onyx from './assets/post/userPostImages/onyx.jpg'
import cod from './assets/channels/cod.png'
import diablo from './assets/channels/diablo.png'
import fortnite from './assets/channels/fortnite.png'
import hs from './assets/channels/hs.png'
import wow from './assets/channels/wow.png'
import pubg from './assets/channels/pubg.png'
import over from './assets/channels/over.png'

import man from './assets/addNewfriend/man.png'
import fairy from './assets/addNewfriend/fairy.png'
import man2 from './assets/addNewfriend/man2.png'
import home from "./assets/HeadreIcons/supHeaderIcons/icn-home.svg";
import cube from "./assets/HeadreIcons/supHeaderIcons/cube.svg";
import games from "./assets/HeadreIcons/supHeaderIcons/inc-games.svg";
import market from "./assets/HeadreIcons/supHeaderIcons/market.svg";



const rootData = {
    posts: [
        {
            username: 'MrPaladin',
            userNick: '@mrpaladin',
            followers: 15,
            time: '3hrs ago',
            message: 'Sniper isnt overpowered.\n' +
                'Sniper has some of the lowest damage outputs in the game. 50 damage per shot is terrible, especially with the fire rate.Compared to heavy, who has 400+ DPS!.. Read Moretell me how sniper compares.',
            items: '296',
            commentsCount: 15,
            pro: false,
            userImage: paladin
        },
        {
            username: 'LeroyJenkins',
            userNick: '@leroyjenkins',
            followers: 3253,
            time: '15mins ago',
            message: 'It\'ll still be long enough that it cannot be spammed. But will increase usefulness of the watch by not.. ',
            items: null,
            commentsCount: null,
            pro: true,
            userImage: leroy
        },
        {
            username: 'ONYXSnake1223',
            userNick: '@ONYXSnake1223',
            followers: 125,
            time: '15mins ago',
            message: 'If you\'ve not yet played CS:GO, do yourself a favor and play first. Excellent game, and this one ties in heavily with the story from the last..  ',
            items: '1.2k',
            commentsCount: 156,
            pro: true,
            userImage: onyx
        }
    ],
    channels: [
        {image: wow, name: '#social Hub', usersCount: '195K'},
        {image: fortnite, name: '#Fortnite', usersCount: '240K'},
        {image: wow, name: '#World of War Craft', usersCount: '195K'},
        {image: pubg, name: '#PUBG Mobile', usersCount: '220K'},
        {image: hs, name: '#HearthStone', usersCount: '195K'},
        {image: cod, name: '#Call of DutyO', usersCount: '195K'},
        {image: over, name: '#Overwatch', usersCount: '195K'},
        {image: diablo, name: '#Diablo III', usersCount: '195K'},
    ],
    friends: [
        {image: man, name: 'XMegatronX', usersCount: '325.860 Followers'},
        {image: fairy, name: 'Rikimarue', usersCount: '285.020 Followers'},
        {image: man2, name: 'Wolfie', usersCount: '433.642 Followers'},
        {image: fairy, name: 'Rikimarue', usersCount: '312.245 Followers'},
        {image: man, name: 'MrPaladin', usersCount: '285.020 Followers'},
        {image: fairy, name: 'Supreme', usersCount: '433.642 Followers'},
        {image: man, name: 'Murmur', usersCount: '312.245 Followers'},
        {image: fairy, name: 'Loremiosum', usersCount: '312.245 Followers'},
    ],
    cards:[
        {description:'World of Warcraft: Shadowlands (Heroic Edition)',price:'€22.50',newPrice:'62% OFF'},
        {description:'Biomutant Steam Key ARABIC',price:'€54.49',newPrice:'34% OFF'},
        {description:'Watch Dogs: Legion Uplay Key',price:'€37.99',newPrice:'62% OFF'},
        {description:'Vampire: The Masquerade - Bloodlines 2 Steam Key',price:'€22.50',newPrice:'62% OFF'},
        {description:'Football Manager 2021 Steam Key',price:'€22.50',newPrice:'62% OFF'},
    ],
    menuItems:[
        {name:'Home',icon:home},
        {name:'Social',icon:cube},
        {name:'Market',icon:games},
        {name:'Tournements',icon:market},
    ]
}
export default rootData

