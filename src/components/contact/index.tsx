import "./styles.css"
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai"

export function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-items-container">
        <div className="contact-us">
          <h3>Entre em contato</h3>

          <h4>Email</h4>
          <h5>ecowalls@gmail.com </h5>

          <h4>Phone</h4>
          <h5>61 0000-0000</h5>

          <h4>Endereço</h4>
          <h5> UNB - Universidade de Brasilia </h5>
        </div>
        <div className="about-company">
          <h3>Eco Wall</h3>
          <p>
            Empresa é especializada em hortas verticais estabelecendo jardins em
            ambientes diversos com diferentes espaços e necessidades, entregando
            ao consumidor um cultivo diverso de vegetais, ervas e plantas
            ornamentais.
          </p>
          <div className="media-container">
            <div>
              <AiOutlineInstagram size="2rem" />
            </div>
            <div>
              <AiFillFacebook size="2rem" />
            </div>
            <div>
              <AiFillLinkedin size="2rem" />
            </div>
            <div>
              <AiOutlineTwitter size="2rem" />
            </div>
          </div>
        </div>
        <div className="owners">
          <h3>Idealizadores</h3>

          <h4>Beatriz Alves Fernandes da Cruz</h4>
          <h4>Janaina Bernardo Alves</h4>
          <h4>Juliano Vilardi Gavoçi Tenente Prendi</h4>
          <h4>Karen Mendes Nascimento Barbosa da Silva</h4>
          <h4>Natália Lopes Vieira</h4>
          <h4>Roberta Tayna Vassalo Messias</h4>
          <h4>Wanessa Vicher da Silva</h4>
        </div>
      </div>
    </div>
  )
}
