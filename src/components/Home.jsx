import React from "react";
import vg from "../assets/2.webp";
const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Tech</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            magnam, aut eaque quibusdam corrupti saepe dolores fugiat possimus
            voluptatem quis quaerat iusto eum voluptatum exercitationem quisquam
            recusandae officiis harum eveniet.
          </p>
        </div>
      </div>
      <div className="home3">
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis neque ducimus enim officiis optio velit quo reiciendis!
            Laudantium eveniet neque fuga consectetur deserunt quae asperiores,
            maxime sunt corrupti magni. Vitae. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quas delectus accusantium quis, quo
            aperiam, asperiores neque id soluta, accusamus animi sunt vero quae
            magni facilis alias. Maxime ad soluta autem!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
