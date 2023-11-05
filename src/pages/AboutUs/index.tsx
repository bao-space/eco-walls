import "./styles.css"
import BannerImg from "../../assets/about-us-banner.png"
import { Banner } from "../../components/banner"

export function AboutUs() {
  return (
    <section className="about-us-container">
      <Banner backgroundImg={BannerImg} />
      <div>About Us</div>
    </section>
  )
}
