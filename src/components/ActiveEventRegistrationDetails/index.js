// Write your code here
import './index.css'

const registrationStatus = {
  onePiece: 'ONE_PIECE',
  naruto: 'NARUTO',
  bleach: 'BLEACH',
  dragon: 'DRAGON',
  titan: 'TITAN',
  clover: 'CLOVER',
  hunter: 'HUNTER',
  kaisen: 'KAISEN',
  demon: 'DEMON',
  one: 'ONE',
  note: 'NOTE',
  hero: 'HERO',
  solo: 'SOLO',
  mob: 'MOB',
  ninja: 'NINJA',
  man: 'MAN',
  code: 'CODE',
  gate: 'GATE',
  poki: 'POKI',
  dungeon: 'DUNGEON',
  tokyo: 'TOKYO',
  full: 'FULL',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-event-description">
      Click on Anime, to view its Synopsis & Info ...
    </p>
  )

  const onePiece = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/07/one-piece-15-strongest-characters-in-the-series-1.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">ONE_PIECE</h1>
      <p className="registrations-closed-description">
        Monkey D. Luffy, a boy who dreams of becoming the Pirate King, sets sail
        on a grand adventure to find the legendary treasure One-Piece after
        accidentally eating a Devil Fruit that grants him rubber-like powers.
      </p>
      <div className="space">
        <a href="https://www.netflix.com/in/title/80107103?source=35">
          <button type="button" className="netflix">
            Netflix
          </button>
        </a>
        <a href="https://www.primevideo.com/dp/amzn1.dv.gti.8b69205b-da82-48d8-bb06-b1217c8b1030?autoplay=0&ref_=atv_cf_strg_wb">
          <button type="button" className="prime">
            Prime
          </button>
        </a>
      </div>
    </div>
  )

  const naruto = () => (
    <div className="view-container">
      <img
        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/01/kakashio-and-team-7-pic-day.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">NARUTO</h1>
      <p className="registrations-closed-description">
        Naruto Uzumaki, a mischievous ninja ostracized for possessing a sealed
        demon within him, strives to gain recognition and become the leader of
        his village, forging lifelong bonds with his comrades along the way.
      </p>
      <div className="space">
        <a href="https://www.netflix.com/in/title/70205012">
          <button type="button" className="netflix">
            Netflix
          </button>
        </a>
        <a href="https://www.primevideo.com/dp/amzn1.dv.gti.4187a3bb-f054-4f16-be28-98dd2d6db8c3?autoplay=0&ref_=atv_cf_strg_wb">
          <button type="button" className="prime">
            Prime
          </button>
        </a>
      </div>
    </div>
  )

  const bleach = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/bleach-8-best-arcs-in-the-anime.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">BLEACH</h1>
      <p className="registrations-closed-description">
        Ordinary teenager Ichigo Kurosaki gains the powers of a Soul Reaper
        after a chance encounter with a Soul Reaper, Rukia Kuchiki. Now, he must
        protect humans from evil spirits and guide deceased souls to the
        afterlife, facing immense challenges along the way.
      </p>

      <a href="https://www.netflix.com/in/title/70204957?source=35">
        <button type="button" className="netflix">
          Netflix
        </button>
      </a>
    </div>
  )

  const dragon = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/best-dragon-ball-rivalries-goku-vegeta-frieza-gohan-piccolo-cell-featured.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">DRAGON_BALL</h1>
      <p className="registrations-closed-description">
        Son Goku, a powerful alien boy with a tail, embarks on a martial arts
        adventure to become the strongest fighter. He trains under a master,
        makes lifelong friends, and battles villains threatening Earth, all
        while searching for mystical orbs called Dragon Balls that grant wishes.
      </p>

      <a href="https://www.crunchyroll.com/series/G9VHN9PPW/dragon-ball-z#:~:text=If%20you're%20looking%20to,Japanese%20and%20English%20audio%20available.">
        <button type="button" className="crunchyroll">
          Crunchyroll
        </button>
      </a>
    </div>
  )

  const titan = () => (
    <div className="view-container">
      <img
        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/attack-on-titan-eren-yeager-header.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">ATTACK_ON_TITAN</h1>
      <p className="registrations-closed-description">
        In a world ravaged by monstrous humanoids called Titans, humanity
        huddles behind massive walls. Eren Yeager, fueled by a childhood trauma,
        vows to eradicate the Titans and reclaim freedom for humanity.
      </p>

      <a href="https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan">
        <button type="button" className="crunchyroll">
          Crunchyroll
        </button>
      </a>
    </div>
  )

  const clover = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/blackclover-astainfirstdemonform.jpg"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">BLACK_CLOVER</h1>
      <p className="registrations-closed-description">
        In a world where magic is everything, Asta, a magicless boy with
        unwavering determination, joins the Black Bulls, a squad of outcasts. He
        and his rival, Yuno, a prodigy blessed with immense magic power, strive
        together to become the next Wizard King.
      </p>

      <div className="space">
        <a href="https://www.netflix.com/in/title/80238012?source=35">
          <button type="button" className="netflix">
            Netflix
          </button>
        </a>
        <a href="https://www.primevideo.com/dp/amzn1.dv.gti.1138e419-7389-44ce-9f89-3298f5e6d571?autoplay=0&ref_=atv_cf_strg_wb">
          <button type="button" className="prime">
            Prime
          </button>
        </a>
      </div>
    </div>
  )

  const hunter = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/gon.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">HUNTER_X_HUNTER</h1>
      <p className="registrations-closed-description">
        Gon Freecss, determined to find his missing hunter father, embarks on a
        journey to become a Hunter himself. Along the way, he befriends other
        aspiring Hunters like Killua, forming bonds and facing challenging tests
        to unlock their true potential.
      </p>

      <div className="space">
        <a href="https://www.netflix.com/in/title/70300472?source=35">
          <button type="button" className="netflix">
            Netflix
          </button>
        </a>
        <a href="https://www.primevideo.com/dp/amzn1.dv.gti.ba9f3539-0743-450a-b590-e8b3e6b262b9?autoplay=0&ref_=atv_cf_strg_wb">
          <button type="button" className="prime">
            Prime
          </button>
        </a>
      </div>
    </div>
  )

  const kaisen = () => (
    <div className="view-container">
      <img
        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/jujutsu-kaisen-s-main-cast.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">JUJUTSU_KAISEN</h1>
      <p className="registrations-closed-description">
        In a world where cursed spirits plague humanity, Itadori Yuji, a high
        schooler who swallows a powerful cursed object, becomes a vessel for the
        King of Curses. Now, he must join a team of Jujutsu Sorcerers to
        exorcise curses and prevent the King of Curses full revival.
      </p>

      <div className="space">
        <a href="https://www.netflix.com/in/title/81278456?source=35">
          <button type="button" className="netflix">
            Netflix
          </button>
        </a>
        <a href="https://www.primevideo.com/dp/amzn1.dv.gti.c1b75101-30af-418a-91e0-c672242731ca?autoplay=0&ref_=atv_cf_strg_wb">
          <button type="button" className="prime">
            Prime
          </button>
        </a>
      </div>
    </div>
  )

  const demon = () => (
    <div className="view-container">
      <img
        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/demon-slayer-to-the-hashira-training.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">DEMON_SLAYER</h1>
      <p className="registrations-closed-description">
        Tanjiro Kamado, a kind-hearted boy, finds his entire family slaughtered
        by demons. Vowing revenge and seeking a cure for his demonized sister
        Nezuko, Tanjiro embarks on a perilous journey to become a Demon Slayer.
      </p>

      <div className="space">
        <a href="https://www.netflix.com/in/title/81091393?source=35">
          <button type="button" className="netflix">
            Netflix
          </button>
        </a>
        <a href="https://www.primevideo.com/dp/amzn1.dv.gti.76a1b23d-265d-4b36-bbec-916dddadccc1?autoplay=0&ref_=atv_cf_strg_wb">
          <button type="button" className="prime">
            Prime
          </button>
        </a>
      </div>
    </div>
  )

  const one = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/10/14-Most-Iconic-Anime-Guilds-Ranked-Hero-Association-(One-Punch-Man).jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">ONE_PUNCH_MAN</h1>
      <p className="registrations-closed-description">
        Saitama, a bored hero who can defeat any opponent with a single punch,
        searches for a worthy challenge. Despite his immense power, he struggles
        for recognition and grapples with the monotony of unmatched strength.
      </p>

      <div className="space">
        <a href="https://www.netflix.com/in/title/80117291?source=35">
          <button type="button" className="netflix">
            Netflix
          </button>
        </a>
        <a href="https://www.primevideo.com/dp/amzn1.dv.gti.7d13cd48-06ab-4e79-b727-cfe9fe6f5b1c?autoplay=0&ref_=atv_cf_strg_wb">
          <button type="button" className="prime">
            Prime
          </button>
        </a>
      </div>
    </div>
  )

  const note = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/04/AAAABUm3a5AE5Jkr0ayVJcsqj7DcTkGZ-eOJ1iNtpNO-iImNodQM3uJMlTZaGaqvIjdRhE96teXoqmQFvVQldfzRSp7mJwbA-Cropped.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">DEATH_NOTE</h1>
      <p className="registrations-closed-description">
        Light Yagami, a brilliant student, discovers a notebook with the power
        to kill anyone whose name is written within. He embarks on a crusade to
        rid the world of criminals, sparking a deadly game of cat and mouse with
        a mysterious detective known as L.
      </p>
      <a href="https://www.netflix.com/in/title/70204970?source=35">
        <button type="button" className="netflix">
          Netflix
        </button>
      </a>
    </div>
  )

  const hero = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/06/my-hero-academia-world-heroes-mission.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">MY_HERO_ACADEMIA</h1>
      <p className="registrations-closed-description">
        In a world where superpowers (Quirks) are commonplace, quirklessIzuku
        Midoriya dreams of becoming a hero. He inherits the powerful One For All
        quirk and joins U.A. High, a prestigious academy for aspiring heroes,
        training relentlessly to prove his worth despite his underdog status.
      </p>

      <div className="space">
        <a href="https://www.netflix.com/in/title/80135674?source=35">
          <button type="button" className="netflix">
            Netflix
          </button>
        </a>
        <a href="https://www.primevideo.com/dp/amzn1.dv.gti.a0c4add9-ba11-4774-a76d-2c6d3eb748c0?autoplay=0&ref_=atv_cf_strg_wb">
          <button type="button" className="prime">
            Prime
          </button>
        </a>
      </div>
    </div>
  )

  const solo = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/07/Collage-Maker-04-Jul-2022-1129-AM.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">SOLO_LEVELING</h1>
      <p className="registrations-closed-description">
        Sung Jin-Woo, deemed the weakest hunter, awakens with the ability to
        level up in the real world after a near-fatal encounter. By raiding
        hidden dungeons and facing fearsome monsters, he becomes an unstoppable
        solo hunter, uncovering the truth behind his power and the gateways to
        these enigmatic dungeons.
      </p>

      <a href="https://www.primevideo.com/dp/amzn1.dv.gti.e1d0f41c-c34c-463e-9777-73b12c33626e?autoplay=0&ref_=atv_cf_strg_wb">
        <button type="button" className="prime">
          Prime
        </button>
      </a>
    </div>
  )

  const mob = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/12/mob-s-clueless-expression.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">MOB_PSYCHO_100</h1>
      <p className="registrations-closed-description">
        Mob, a seemingly ordinary boy, hides a secret: he is a powerful psychic!
        To control his abilities and live a normal life, he works under a bogus
        psychic mentor. But when his emotions overwhelm him, his powers erupt,
        creating both comedic and potentially destructive situations.
      </p>

      <div className="space">
        <a href="https://www.netflix.com/in/title/80179798?source=35">
          <button type="button" className="netflix">
            Netflix
          </button>
        </a>
        <a href="https://www.primevideo.com/dp/amzn1.dv.gti.34125716-d283-4fa1-b7b7-ad45f774689f?autoplay=0&ref_=atv_cf_strg_wb">
          <button type="button" className="prime">
            Prime
          </button>
        </a>
      </div>
    </div>
  )

  const ninja = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/ninja-kamui-6-kamui-suit.jpg?q=50&fit=contain&w=750&h=415&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">NINJA_KAMUI</h1>
      <p className="registrations-closed-description">
        Kamui, a young ninja haunted by his past, embarks on a quest to uncover
        the truth behind his clan demise, facing treacherous rivals and
        unraveling a conspiracy that threatens the entire ninja world.
      </p>
      <a href="https://www.amazon.com/Ninja-Kamui-Season-1/dp/B0CV3XH1NS#:~:text=Watch%20Ninja%20Kamui%3A%20Season%201%20%7C%20Prime%20Video">
        <button type="button" className="prime">
          Prime
        </button>
      </a>
    </div>
  )

  const man = () => (
    <div className="view-container">
      <img
        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/10/Chainsaw-Man-Season-1-Poster.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">CHAINSAW_MAN</h1>
      <p className="registrations-closed-description">
        Denji, a poverty-stricken teenager burdened by debt, fuses with a
        chainsaw devil named Pochita to become Chainsaw Man, a hybrid fighting
        demons for the Yakuza. Fueled by a desire for a normal life, he
        navigates a world of violence and darkness while clinging to the simple
        pleasures.
      </p>

      <div className="space">
        <a href="https://www.netflix.com/in/title/81215627?source=35">
          <button type="button" className="netflix">
            Netflix
          </button>
        </a>
        <a href="https://www.primevideo.com/dp/amzn1.dv.gti.bb47491f-edff-436c-bca1-ab9d11c9a4b0?autoplay=0&ref_=atv_cf_strg_wb">
          <button type="button" className="prime">
            Prime
          </button>
        </a>
      </div>
    </div>
  )

  const code = () => (
    <div className="view-container">
      <img
        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2016/11/Code2.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">CODE_GEASS</h1>
      <p className="registrations-closed-description">
        Exiled prince Lelouch vi Britannia, gifted with the power to control
        others with a single command, leads a rebellion against his tyrannical
        empire. Fueled by a desire for revenge and a vision of a just world, he
        wields his Geass as the masked vigilante Zero.
      </p>

      <a href="https://www.primevideo.com/dp/amzn1.dv.gti.29f52b2f-de61-4061-97e4-ad3d6ee9a191?autoplay=0&ref_=atv_cf_strg_wb">
        <button type="button" className="prime">
          Prime
        </button>
      </a>
    </div>
  )

  const gate = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/12/Okabe-talking-to-the-viewer-in-the-Steins-Gate-anime.jpg?q=50&fit=crop&w=1500&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">STEINS_GATE</h1>
      <p className="registrations-closed-description">
        A microwave-turned-time machine throws tech-savvy Okabe and his lab
        members into a frantic race against time. They must navigate the
        delicate balance of the past, present, and future to prevent a world war
        and the loss of a dear friend.
      </p>

      <a href="https://www.netflix.com/jp-en/title/80005874#:~:text=Watch%20STEINS%3BGATE%20%7C%20Netflix">
        <button type="button" className="netflix">
          Netflix
        </button>
      </a>
    </div>
  )

  const poki = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/06/indigo-league-cropped.jpg"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">POKEMON</h1>
      <p className="registrations-closed-description">
        Aspiring Pokemon trainer Ash Ketchum embarks on a journey to catch,
        train, and battle Pokemon with his partner Pikachu. Together, they
        travel across various regions, making lifelong friends and facing off
        against rivals, all in pursuit of becoming a Pokemon Master.
      </p>

      <a href="https://www.primevideo.com/detail/Pokemon/0JTEQ5ZRPIBB9HRGTELVLCVB8O">
        <button type="button" className="prime">
          Prime
        </button>
      </a>
    </div>
  )

  const dungeon = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/delicious-in-dungeon-e01-first-monster-meal.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">DELICIOUS_IN_DUNGEON</h1>
      <p className="registrations-closed-description">
        Bell Cranel, a timid adventurer yearning to be a hero, embarks on a
        journey in the mysterious Dungeon beneath his city alongside the
        powerful goddess Hestia.
      </p>

      <a href="https://www.netflix.com/in/title/81564899?source=35">
        <button type="button" className="netflix">
          Netflix
        </button>
      </a>
    </div>
  )

  const tokyo = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Tokyo-Revengers-Manjiro-Sano-(Mikey).jpg"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">TOKYO_REVENGERS</h1>
      <p className="registrations-closed-description">
        Takemichi, a disillusioned young man, gets sent back in time after
        witnessing his childhood friends murder. Now with a chance to rewrite
        fate, he joins the Tokyo Manji Gang, a dangerous delinquent group
      </p>

      <div className="space">
        <a href="https://www.netflix.com/in/title/81442520?source=35">
          <button type="button" className="netflix">
            Netflix
          </button>
        </a>
        <a href="https://www.primevideo.com/dp/amzn1.dv.gti.85826a97-08a3-4dfc-a25e-d8bfadd2e7da?autoplay=0&ref_=atv_cf_strg_wb">
          <button type="button" className="prime">
            Prime
          </button>
        </a>
      </div>
    </div>
  )

  const full = () => (
    <div className="view-container">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/fullmetal-alchemist-brotherhood-feature.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">FULLMETAL_ALCHEMIST</h1>
      <p className="registrations-closed-description">
        Edward and Alphonse Elric, brilliant alchemists, pay a heavy price for
        attempting human transmutation. Edward loses limbs, Alphonse becomes a
        soul trapped in armor.
      </p>

      <a href="https://www.netflix.com/in/title/80223731#:~:text=Watch%20FullMetal%20Alchemist%20%7C%20Netflix%20Official%20Site">
        <button type="button" className="netflix">
          Netflix
        </button>
      </a>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.onePiece:
        return onePiece()
      case registrationStatus.naruto:
        return naruto()
      case registrationStatus.bleach:
        return bleach()
      case registrationStatus.dragon:
        return dragon()
      case registrationStatus.titan:
        return titan()
      case registrationStatus.clover:
        return clover()
      case registrationStatus.hunter:
        return hunter()
      case registrationStatus.kaisen:
        return kaisen()
      case registrationStatus.demon:
        return demon()
      case registrationStatus.one:
        return one()
      case registrationStatus.note:
        return note()
      case registrationStatus.hero:
        return hero()
      case registrationStatus.solo:
        return solo()
      case registrationStatus.mob:
        return mob()
      case registrationStatus.ninja:
        return ninja()
      case registrationStatus.man:
        return man()
      case registrationStatus.code:
        return code()
      case registrationStatus.gate:
        return gate()
      case registrationStatus.poki:
        return poki()
      case registrationStatus.dungeon:
        return dungeon()
      case registrationStatus.tokyo:
        return tokyo()
      case registrationStatus.full:
        return full()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
