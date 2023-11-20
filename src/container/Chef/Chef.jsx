import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef Bolu's word" />
      <h1 className="headtext__cormorant">What I believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Never Cook Beans with Gas. You gonna regret it.
          </p>
        </div>
        <p className="p__opensans">
          I was just joking. Beans is a very good food fot the body. Never
          undermine the powe rof beans . Ewa ma jo ino ooo
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Yomi-OLugbodi</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
