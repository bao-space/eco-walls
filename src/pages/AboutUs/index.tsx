import "./styles.css"
import BannerImg from "../../assets/about-us-banner.png"
import { Banner } from "../../components/banner"

export function AboutUs() {
  return (
    <>
      <Banner text="Sobre nós" backgroundImg={BannerImg} />
      <section className="about-us-container">
        <div className="who-we-are">
          <h3>Quem somos</h3>

          <h4>
            Nossa empresa é especializada em hortas verticais estabelecendo
            jardins em ambientes diversos com diferentes espaços e necessidades,
            entregando ao consumidor um cultivo diverso de vegetais, ervas e
            plantas ornamentais. Utilizamos sistemas de cultivo vertical,
            tecnologia transparente e práticas sustentáveis para fornecer ao
            consumidor produtos frescos associados a uma estética agradável em
            áreas urbanas.
          </h4>
        </div>
      </section>
      <div className="mission-container">
        <h3>Missão, Visão e Valores</h3>

        <div>
          <span>
            <h4>Visão</h4>
            <p>
              Se tornar a empresa referência em hortas verticais no Distrito
              Federal
            </p>
          </span>
          <span>
            <h4>Missão</h4>
            <p>
              Proposta de jardim interno para trazer plantas, ingredientes
              frescos, aromas e cores para o ambiente doméstico, permitindo
              contato com a natureza em espaços internos.
            </p>
          </span>
          <span>
            <h4>Valores</h4>
            <p>
              Se tornar a empresa referência em hortas verticais no Distrito
              Federal
            </p>
          </span>
        </div>
      </div>
    </>
  )
}
