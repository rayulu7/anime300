import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from '../Header'
import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails'
import EventItem from '../EventItem'

import './index.css'

const eventsList = [
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/featured-one-piece-when-does-egghead-arc-start-in-anime-luffy-vegapunk.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'One Piece',
    creator: 'Eiichiro Oda',
    registrationStatus: 'ONE_PIECE',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/image-7-1.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Naruto',
    creator: 'Masashi Kishimoto',
    registrationStatus: 'NARUTO',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/Bleach-Thousand-Year-Blood-War-Feature.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Bleach',
    creator: 'Tite Kubo',
    registrationStatus: 'BLEACH',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/ultra-instinct-goku-and-gohan-beast-from-dragon-ball-super.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Dragon Ball',
    creator: 'Akira Toriyama',
    registrationStatus: 'DRAGON',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/attack-on-titan-character-deaths-that-rocked-anime-s-foundation-eren-erwin-petra-sasha-featured.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Attack on Titan',
    creator: 'Hajime Isayama',
    registrationStatus: 'TITAN',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/12/spade-kingdom.jpg',
    name: 'Black Clover',
    creator: 'Yuki Tabata',
    registrationStatus: 'CLOVER',
  },

  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/hunter-x-hunter-why-fans-should-keep-an-eye-on-january-6.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Hunter x Hunter',
    creator: 'Yoshihiro Togashi',
    registrationStatus: 'HUNTER',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/jujutsu-kaisen-best-finishing-moves-rika-gojo-geto-sukuna-featured.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Jujutsu Kaisen',
    creator: 'Gege Akutami',
    registrationStatus: 'KAISEN',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/11/demon-slayer-kimetsu-no-yaiba-2.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Demon Slayer',
    creator: 'Koyoharu Gotouge',
    registrationStatus: 'DEMON',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/03/one-punch-man-a-hero-nobody-knows-review.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'One Punch Man',
    creator: 'Yusuke Murata',
    registrationStatus: 'ONE',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/07/death-note-episode-featured.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Death Note',
    creator: 'Takeshi Obata',
    registrationStatus: 'NOTE',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/10/mha.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'My Hero Academia',
    creator: 'Kohei Horikoshi',
    registrationStatus: 'HERO',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/solo-leveling-2.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Solo Leveling',
    creator: 'Chugong',
    registrationStatus: 'SOLO',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/01/mob-psycho.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Mob Psycho 100',
    creator: 'Yusuke Murata',
    registrationStatus: 'MOB',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/ninja-kamui-toonami-new-trailer-featured.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Ninja Kamui',
    creator: 'Sunghoo Park / Shigeru Murakoshi',
    registrationStatus: 'NINJA',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/04/why-chainsaw-mans-anime-cant-live-up-to-the-manga-feature-image.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Chainsaw Man',
    creator: 'Tatsuki Fujimoto',
    registrationStatus: 'MAN',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/04/Feature-Image-10.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Code Geass',
    creator: 'Goro Taniguchi',
    registrationStatus: 'CODE',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/12/Okabe-Mayuri-and-Kurisu-in-the-Steins-Gate-anime.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Steins Gate',
    creator: ' Hiroshi Hamasaki and Takuya Sato / Jukki Hanada',
    registrationStatus: 'GATE',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/best-pokemon-anime-seasons-ranked.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Pokemon',
    creator: 'Kunihiko Yuyama / Satoshi Tajiri',
    registrationStatus: 'POKI',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/delicious_in_dungeon_anime_visual.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Delicious in Dungeon',
    creator: 'Ryoko Kui',
    registrationStatus: 'DUNGEON',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/01/tokyo-revengers.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Tokyo Revengers',
    creator: 'Ken Wakui',
    registrationStatus: 'TOKYO',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/fullmetal-alchemist-best-fights-king-bradley-wrath-edward-elric-roy-mustang-featured-1.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    name: 'Fullmetal Alchemist',
    creator: 'Hiromu Arakawa',
    registrationStatus: 'FULL',
  },
]
// Write your code here
class Events extends Component {
  state = {
    activeEventId: '',
  }

  getActiveEventRegistrationStatus = () => {
    const {activeEventId} = this.state
    const activeEventDetails = eventsList.find(
      event => event.id === activeEventId,
    )
    if (activeEventDetails) {
      return activeEventDetails.registrationStatus
    }
    return ''
  }

  setActiveEventId = id => {
    this.setState({activeEventId: id})
  }

  renderEventsList = () => {
    const {activeEventId} = this.state
    return (
      <ul className="events-list">
        {eventsList.map(eachEvent => (
          <EventItem
            key={eachEvent.id}
            eventDetails={eachEvent}
            setActiveEventId={this.setActiveEventId}
            isActive={eachEvent.id === activeEventId}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <Header />
        <div className="events-container">
          <div className="events-content">
            <h1 className="heading">Anime</h1>
            {this.renderEventsList()}
          </div>
          <ActiveEventRegistrationDetails
            activeEventRegistrationStatus={this.getActiveEventRegistrationStatus()}
          />
        </div>
      </div>
    )
  }
}

export default Events
