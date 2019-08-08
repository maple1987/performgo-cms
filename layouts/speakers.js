import React from 'react'

const Linkedin = ({ url, isInModal = false }) => (
  <a className={ isInModal ? 'modal-social-media-button' : 'perform-speaker__social-icon' } style={{ height: isInModal ? '32px': 'auto' }} href={url} target="_blank">
    <svg enableBackground="new 0 0 430.117 430.117" viewBox="0 0 430.117 430.117" style={ isInModal ?{ height: '32px', width: '20px' } : {}} xmlns="http://www.w3.org/2000/svg">
      <path d="m430.117 261.543v159.017h-92.188v-148.367c0-37.271-13.334-62.707-46.703-62.707-25.473 0-40.632 17.142-47.301 33.724-2.432 5.928-3.058 14.179-3.058 22.477v154.873h-92.219s1.242-251.285 0-277.32h92.21v39.309c-.187.294-.43.611-.606.896h.606v-.896c12.251-18.869 34.13-45.824 83.102-45.824 60.673-.001 106.157 39.636 106.157 124.818zm-377.934-251.985c-31.548 0-52.183 20.693-52.183 47.905 0 26.619 20.038 47.94 50.959 47.94h.616c32.159 0 52.159-21.317 52.159-47.94-.606-27.212-20-47.905-51.551-47.905zm-46.706 411.002h92.184v-277.32h-92.184z"></path>
    </svg>
  </a>
)

const Twitter = ({ url, isInModal = false }) => (
  <a className={ isInModal ? 'modal-social-media-button' : 'perform-speaker__social-icon' } style={{ height: isInModal ? '32px': 'auto' }} href={url} target="_blank">
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="m33.9506173 0c4.0123457 0 6.1728395 1.27099083 8.0246913 3.17747708 1.8518519 0 4.0123457-1.27099083 5.2469136-1.90648625.308642-.31774771.9259259-.63549542 1.2345679-.63549542-.308642 2.22423396-1.5432099 3.8129725-3.0864197 5.08396333-.308642.31774771-.617284.63549541-1.2345679.95324312 2.1604938 0 4.0123456-.95324312 5.8641975-1.58873854-.9259259 1.58873854-2.1604938 3.17747708-3.3950617 4.1307202-.617284.31774771-.925926.95324308-1.5432099 1.27099088 0 2.5419816 0 4.7662156-.617284 6.6727018-2.4691358 12.0744129-9.2592592 20.0181056-20.0617284 23.5133304-4.0123456 1.2709908-10.1851851 1.9064862-14.50617279.6354954-2.16049383-.6354954-4.32098765-1.2709908-6.17283951-1.9064862-.92592592-.3177478-1.85185185-.9532432-2.77777777-1.5887386-.30864198-.3177477-.61728395-.3177477-.92592593-.6354954.92592593 0 2.16049383.3177477 3.39506173 0 .92592592-.3177477 2.16049383 0 3.08641975-.3177477 2.4691358-.6354954 4.32098762-1.2709908 6.17283952-2.224234.9259259-.6354954 2.1604938-1.2709908 2.7777778-1.9064862-1.2345679 0-2.1604939-.3177477-3.0864198-.6354954-3.39506172-1.2709909-5.24691357-3.4952248-6.48148147-6.6727019.92592593 0 4.01234568.3177477 4.62962967-.3177477-1.23456794 0-2.46913584-.9532431-3.39506177-1.2709908-3.08641975-1.5887386-5.24691358-4.4484679-5.24691358-9.2146835.30864198.3177477.61728395.3177477.92592593.6354954.61728395.3177477 1.2345679.3177477 2.16049382.6354954.30864198 0 .92592593.3177477 1.54320988 0-.61728395-.6354954-1.2345679-.9532431-1.85185185-1.5887386-1.85185185-2.2242339-3.39506173-5.71945869-2.16049383-9.53243118.30864198-.95324313.61728395-1.90648625 1.2345679-2.85972937.30864198.3177477.61728395.63549541.92592593.95324312.92592593 1.27099083 1.85185185 2.22423395 3.08641975 3.17747708 3.70370372 3.17747707 7.09876542 4.76621565 12.65432102 6.35495415 1.2345679.3177477 3.0864197.6354954 4.6296296.6354954-.617284-1.2709908-.308642-3.49522477 0-5.08396331.9259259-3.49522478 2.7777778-5.71945874 5.8641975-6.99044957.617284-.31774771 1.5432099-.63549541 2.1604939-.63549541.3086419-.31774771.6172839-.31774771.9259259-.31774771z" fill-rule="evenodd" transform="translate(0 4)"></path></svg>
  </a>
)


export default ({ speakers = [] }) => {
  return (
    <div className="section section--contenttop section--bg section--bgcover" style={{ backgroundImage: 'url(https://dt-cdn.net/images/perform-go-speaker-background-2-2500-1fb22811d9.jpg)' }}>

      <div className="column column--1-of-3">
        <p className="placeholder--fixed"></p>
        <p style={{ fontSize: 'calc(24px + 8 * (100vw - 360px) / 1560)', fontWeight: 300, lineHeight: 1.5 }} className="perform-go-misc__speaker-heading">
          <span className="perform--color-gradient perform--bold-500">Speakers</span>
        </p>
        <hr className="separator separator--right" />
      </div>

      <div className="column column--2-of-3 modal-col-container">
        <div className="perform-speakers">
          <div>
            {speakers.map((speaker) => {
              return <div key={speaker.name} className="perform-speaker-box">
                <div className="perform-speaker-box__inner modal-trigger popup-tiles" data-modal={speaker.name}>
                  <img src={speaker.avatar_url} alt="Marek Matuszewski" className="perform-speaker-box__image" />
                  <span className="perform-speaker-box__plus gradient">+</span>
                  <div className="perform-speaker-box__lower">
                    <div className="perform-speaker__social">
                      {speaker.linkedin ? <Linkedin url={speaker.linkedin} /> : null }
                    </div>
                    <p className="perform-speaker-box__name">
                      <span className="gradient">{speaker.name}</span>
                    </p>
                    <div className="perform-speaker-box__title">
                      {speaker.title}
                    </div>
                    <div className="perform-speaker-box__company">
                      {speaker.company}
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
        
        {speakers.map((speaker) => {
          return <div key={speaker.name} className="modal modal-window" id={speaker.name}>
            <div className="modal-content">
              <div className="modal-header modal-header--gradient-blue-purple">
                <p className="modal-close-button">X</p>
                <div className="modal-social-media-buttons">
                  {speaker.linkedin ? <Linkedin url={speaker.linkedin} isInModal={true} /> : null }
                  {speaker.twitter ? <Twitter url={speaker.twitter} isInModal={true} /> : null }
                </div>
                <p className="modal-headline"><span className="perform--bold-500">{speaker.name}</span> | {speaker.title}, {speaker.company}</p>
              </div>
              <div className="modal-body">
                <div className="modal-body--section is-flex">
                  <div className="modal-body--image column--1-of-4">
                    <img src={speaker.avatar_url} alt="Marek Matuszewski" className="modal-body--image-speaker" />
                    <br />
                    <div className="modal-body--image-company">
                      <img src={speaker.company_logo_url} alt="ANZ New Zealand" width="400px" sizes="((min-width: 992px) and (not (media: print))) 50vw, 100vw" />
                    </div>
                  </div>
                  <div className="modal-body--text column--3-of-4">
                    <p className="modal-description">{speaker.description}</p>
                  </div>
                </div>
              </div>
                
            </div>
          </div>
        })}
        
      </div>
    </div>
  )
}