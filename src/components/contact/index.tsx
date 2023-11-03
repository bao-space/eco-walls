import "./styles.css"

export function Contact() {
  return (
    <footer className="contact-container">
      <div className="contact-items-container">
        <div className="contact-us">
          <h3>Entre em contato</h3>

          <h4>Email</h4>
          <h5>prendi@banana.com</h5>

          <h4>Phone</h4>
          <h5>4002 8922</h5>

          <h4>Endereço</h4>
          <h5> UNB - Universidade de Brasilia </h5>
        </div>
        <div className="about-company">
          <h3>Eco Wall</h3>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing{" "}
          </p>
          <div className="media-container">
            <div>Insta</div>
            <div>Face</div>
            <div>Linkedin</div>
            <div>Twitter</div>
          </div>
        </div>
        <div className="owners">
          <h4>Beatriz Alves Fernandes da Cruz</h4>
          <h4>Janaina Bernardo Alves</h4>
          <h4>Juliano Vilardi Gavoçi Tenente Prendi</h4>
          <h4>Karen Mendes Nascimento Barbosa da Silva</h4>
          <h4>Natália Lopes Vieira</h4>
          <h4>Roberta Tayna Vassalo Messias</h4>
          <h4>Wanessa Vicher da Silva</h4>
        </div>
      </div>
    </footer>
  )
}
