import React from 'react'
import benin from "../img/benin-head.ab6efcd5.png";
import nft1 from "../img/1.447c5eeb.png";
import nft2 from "../img/2.547d7982.png";
import nft3 from "../img/3.3d5c7577.png";
import nft4 from "../img/4.0fa22a11.png";

const Story = () => {
  return (
  
  <section
    id="story"
    class="glassy-wrapper x-section mt-60 text-center story-section"
  >
    <div class="container">

      <h1 id='Story' class="section-title mb-20">Story</h1>
      <p>
        In February 1897, Benin City was captured by British forces in what was
        a bloody and devastating occupation. Following this occupation of Benin
        City by the British Empire was a massive looting of the Royal palace,
        shrines and several other parts of the Kingdom.
      </p>
      <p>
        Thousands of objects of ceremonial and ritual value were taken to the UK
        as official 'spoils of war' or distributed among members of the
        expedition according to their rank. This included objects removed from
        royal ancestral shrines, among which were ceremonial brass heads of
        former Obas and their associated ivory tusks.
      </p>
      <p>
        The looted objects also included more than 900 brass plaques, dating
        largely to the 16–17th century, found in a storage room within the
        palace. Having previously decorated the palace walls, these plaques were
        key historic records for the Benin Court and kingdom, enabling
        illustration of historic practices and traditions.
      </p>
      <p>
        These ancient Benin Bronze Heads were cast by specialist guilds working
        for the royal court. They were cast in honor of Kings and Queen mothers.
      </p>
      <p>
        Today, the Benin Bronze Heads are worth millions of Dollars with most of
        them on display in Museums across the UK.
      </p>
      <div class="d-flex justify-content-center mt-35">
        <img src={benin} alt="benin bronze head" />
      </div>
      <p class="mt-20">
        <a
          href="https://www.bbc.com/news/world-africa-56292809"
          class="news-link"
          target="_blank"
          rel="noreferrer"
        >
          This Benin Bronze sold to a private collector for a record fee of £10m
          <img src="../assets/images/anchor.png" alt="" />
        </a>
      </p>
      <h1 class="section-title mt-35 mb-20">Hall Of Royals NFT</h1>
      <p>
        Inspired by the ancient Benin Bronze Heads, Hall of Royals is a project
        to give a new expression and bring to limelight this ancient art form -
        using them to honor and immortalize people, ideas and cultures around
        the world.
      </p>
      <p>
        This project unifies an ancient art form with a modern world - a bridge
        between the ancient and the new.
      </p>
      <p>
        The Hall of Royals NFT collection is in 4 categories; Ancient, Meta,
        Legendary & Honorary Royals.
      </p>
      <div
        class="glassy-wrapper mt-40 d-flex flex-column flex-sm-row align-items-center align-items-sm-stretch x-nfts"
      >
        <img src={nft1} alt="" />
        <div class="pt-15 pb-15">
          <h4 class="mb-10">Ancient Royals</h4>
          <p>
            These are sculpts that are decked with traditional Benin Bronze Head
            ornaments, head wears, neck wears and tribal marks.
          </p>
          <p>
            They depict the Bronze Heads in their real life forms in varying
            material textures. No additional ornaments are added
          </p>
        </div>
      </div>
      <div
        class="glassy-wrapper mt-40 d-flex flex-column flex-sm-row align-items-center align-items-sm-stretch x-nfts"
      >
        <img src={nft2} alt="" />
        <div class="pt-15 pb-15">
          <h4 class="mb-10">Meta Royals</h4>
          <p>
            These sculpts are also decked in the traditional Benin Bronze Head
            regalia + modern accessories especially those associated with the
            metaverse like 3D glasses, pipes and piercings
          </p>
          <p>
            These sculpts combines this ancient art form with modern
            accessories, ideas & culture
          </p>
        </div>
      </div>
      <div
        class="glassy-wrapper mt-40 d-flex flex-column flex-sm-row align-items-center align-items-sm-stretch x-nfts"
      >
        <img src={nft3} alt="" />
        <div class="pt-15 pb-15">
          <h4 class="mb-10">Legendary Royals</h4>
          <p>
            These sculpts are done in honor of people who had an impact on the
            world, their society or community during their lifetime.
          </p>
          <p>
            They are meant to honor these Legends by adorning them in the
            regalia of the Benin Bronze Heads
          </p>
          <p>
            Also, we hope that through this we can bring global recogition to
            the Benin Bronze Heads
          </p>
        </div>
      </div>

      <div
        class="glassy-wrapper mt-40 d-flex flex-column flex-sm-row align-items-center align-items-sm-stretch x-nfts"
      >
        <img src={nft4} alt="" />
        <div class="pt-15 pb-15">
          <h4 class="mb-10">Honorary Royals</h4>
          <p>
            Honorary sculpts are done to honor and recognize the high achievers
            of our present day world - celebrities, content creators, writers,
            activists, etc.
          </p>
          <p>
            Women & men who are making a difference in their various fields -
            music, academia, science, technology, DeFi, etc.
          </p>
          <p>
            These will not be for sale but offered for free to the individuals
            sculpted
          </p>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Story;