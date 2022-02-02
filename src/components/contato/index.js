import React, { useRef, useState } from 'react'
import { Fade } from 'react-reveal'
import ico_whats from '../../assets/icons/icon-whatsapp-branco.png'
import ScrollableAnchor from 'react-scrollable-anchor'
import InputMask from 'react-input-mask'

import { sendEmail } from '../../services/email.service'

const limitMin = 50
const data = {
  fullname: '',
  email: '',
  phone: '',
  mensagem: '',
}

export default function Page(props) {
  const [required] = useState(false)
  const [loading, setLoading] = useState(false)
  const [complete, setComplete] = useState(false)
  const [error, setError] = useState(false)
  const [errName, setErrName] = useState(false)
  const [errEmail, setErrEmail] = useState(false)
  const [errMessage, setErrMessage] = useState(false)
  const [errPhone, setErrPhone] = useState(false)
  const [countMin, setCountMin] = useState(limitMin)
  const [content, setContent] = useState(data)

  const refName = useRef(null)

  const validateInput = () => {
    let err = false

    if (content.fullname.length < 2) {
      setErrName(true)
      err = true
    }
    if (content.phone.length < 15) {
      setErrPhone(true)
      err = true
    }
    if (content.mensagem.length < 50) {
      setErrMessage(true)
      err = true
    }

    if (err) {
      setLoading(false)
      return false
    }

    return true
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   if (!validateInput()) return false;

  //   console.log("handleSubmit", content);
  //   // const result = await sendEmail(content);
  //   console.log("handleSubmit", result);

  //   if (!result.error) {
  //     setComplete(true);
  //     setError(false);
  //     setContent(data);
  //   } else {
  //     setComplete(false);
  //     setError(true);
  //   }

  //   setLoading(false);
  //   return false;
  // };

  const handleChange = (e) => {
    const value = e.target.value
    const field = e.target.id
    const min = e.target.minLength

    if (value.length > min) {
      if (field === 'fullname') setErrName(false)
      if (field === 'phone') setErrPhone(false)
      if (field === 'mensagem') setErrMessage(false)
    }

    if (field === 'mensagem')
      setCountMin(value.length < limitMin ? limitMin - value.length : 0)

    setContent({ ...content, [field]: value })
  }

  const reset = () => {
    setContent(data)
    setError(false)
    setErrName(false)
    setErrEmail(false)
    setErrPhone(false)
    setErrMessage(false)
    refName.current.focus()
  }

  return (
    <div className=" w-full py-16 ">
      <ScrollableAnchor id={'contato'}>
        <div className="block 2xl:flex w-full content-center justify-center">
          <Fade left duration={2000}>
            <div className="w-full mt-24">
              <div className="text-5xl">
                ENTRE EM <strong>CONTATO</strong>
              </div>
            </div>
          </Fade>
        </div>
      </ScrollableAnchor>

      <Fade up duration={2000}>
        <div className="flex w-full content-center justify-center">
          <div className="w-full md:w-10/12 lg:p-8 mt-6">
            <form
              className="flex flex-col justify-center"
              //   onSubmit={handleSubmit}
              name="form_contato"
              method="POST"
              action="https://escoladaintegridade.activehosted.com/proc.php"
              id="_form_1_"
            >
              <input type="hidden" name="u" value="1" />
              <input type="hidden" name="f" value="1" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />
              <input
                type="hidden"
                name="or"
                value="9240148bf04482770c243bf3beac9757"
              />
              <input
                ref={refName}
                id="fullname"
                name="fullname"
                disabled={loading}
                value={content.fullname}
                className={`shadow-inner mb-4 p-2 w-full family-medium text-yellow2 placeholder-yellow2 placeholder-yellow2 ${
                  errName
                    ? 'bg-red-100 border border-red-700 text-red-700'
                    : 'bg-gray2 border-white border'
                }`}
                required={required}
                type="text"
                placeholder="Nome"
                onChange={handleChange}
                minLength={2}
                tabIndex={1}
              />

              <input
                disabled={loading}
                value={content.email}
                aria-errormessage={true}
                className={`shadow-inner mb-4 p-2 w-full family-medium text-yellow2 placeholder-yellow2 ${
                  errName
                    ? 'bg-red-100 border border-red-700 text-red-700'
                    : 'bg-gray2 border-white border'
                }`}
                required={required}
                id="email"
                type="email"
                name="email"
                onChange={(e) =>
                  setContent({ ...content, email: e.target.value })
                }
                aria-label="email address"
                placeholder="E-mail"
                tabIndex={2}
              />

              <textarea
                disabled={loading}
                value={content.mensagem}
                minLength={limitMin}
                name="mensagem"
                onChange={handleChange}
                id="mensagem"
                rows="4"
                cols="80"
                className={`shadow-inner mb-4 p-2 w-full family-medium text-yellow2 placeholder-yellow2 ${
                  errMessage
                    ? 'bg-red-100 border border-red-700 text-red-700'
                    : 'bg-gray2 border-white border'
                }`}
                placeholder="Mensagem"
                required={required}
                tabIndex={4}
              />

              <div className="flex flex-col-reverse md:flex-row justify-between w-full">
                <button
                  tabIndex={5}
                  type="submit"
                  disabled={loading}
                  className="transition duration-500 ease-in-out bg-yellow2 transform w-full py-2 family-bold uppercase w-28 text-black"
                >
                  Enviar
                </button>
              </div>

              {(errName || errPhone || errMessage) && (
                <Fade top>
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 w-4/5 mt-4 justify-between"
                    role="alert"
                  >
                    <strong className="font-bold">Alerta!</strong>
                    <span className="block sm:inline ml-3">
                      Preencha todos os campos corretamente.
                    </span>
                  </div>
                </Fade>
              )}

              {complete && (
                <Fade top>
                  <div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 w-4/5 mt-4 justify-between"
                    role="alert"
                  >
                    <strong className="font-bold">Sucesso!</strong>
                    <span className="block sm:inline ml-3">
                      Contato enviado com sucesso!
                    </span>
                  </div>
                </Fade>
              )}

              {error && (
                <Fade top>
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 w-4/5 mt-4 justify-between"
                    role="alert"
                  >
                    <strong className="font-bold">ERRO!</strong>
                    <span className="block sm:inline ml-3">
                      Houve uma falha no envio, tente novamente.
                    </span>
                  </div>
                </Fade>
              )}

              {loading && (
                <Fade left>
                  <div className="mt-16 text-white">
                    Aguarde, enviando seu contato...
                  </div>
                </Fade>
              )}
            </form>
          </div>
        </div>
      </Fade>
    </div>
  )
}
