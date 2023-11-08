import "./styles.css"

export function Services() {
  return (
    <section className="service-container">
      <form>
        <h4>Entre em contato</h4>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="form-inputs">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nome completo
            </label>
            <input
              type="text"
              id="first_name"
              className="border-none border-b-red-600 text-gray-900 text-sm bg-none block w-full p-2.5  "
              placeholder="Nome completo"
              required
            />
          </div>
          <div className="form-inputs">
            <label
              htmlFor="contact"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Forma de contato
            </label>
            <input
              type="text"
              id="contact"
              className="border border-gray-300 text-gray-900 text-sm bg-none block w-full p-2.5  "
              placeholder="Email ou telefone"
              required
            />
          </div>
        </div>
        <label
          htmlFor="service-types"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Selecione o tipo de serviço desejado
        </label>
        <select
          id="service-types"
          className="border text-gray-900 text-sm bg-none block w-full p-2.5 "
        >
          <option selected>Tipo de serviço</option>
          <option value="US">Instalação</option>
          <option value="CA">Novas mudas</option>
          <option value="FR">Manutenção</option>
          <option value="DE">Outros</option>
        </select>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Deixe uma mensagem
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-none border border-gray-300  "
          placeholder="Escreva aqui..."
        ></textarea>
        <button
          type="submit"
          className="text-white bg-green-500 hover:bg-green-600 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium bg-none text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-5"
        >
          Submit
        </button>
      </form>
      <div className="service-banner-container h-full w-1/2"></div>
    </section>
  )
}
