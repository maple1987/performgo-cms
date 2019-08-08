import React from 'react'

export default ({ agendas = [] }) => {
  return (
    <div className="section section--even">
      <p style={{ textAlign: 'center', fontSize: 'calc(24px + 8 * (100vw - 360px) / 1560)', fontWeight: 300, lineHeight: 1.5 }}>
        <span className="perform--color-gradient perform--bold-500">Agenda</span>
      </p>
      <hr className="separator separator--center" />
      <div className="perform-go-agenda">
        <svg xmlns="http://www.w3.org/2000/svg" style={{ width:0, height:0, display: 'none' }} aria-hidden="true" hidden="">
          <defs>
            <symbol id="dropdownopen" viewBox="0 0 512 512">
              <polygon fill="inherit" points="403.07822,142.41222 256,289.49042 108.92179,142.41222 63.66695,187.66705 256,380.00009 448.33304,187.66705 "></polygon>
            </symbol>
          </defs>
        </svg>

        <div className="agenda agenda--no-tabs">
          <div className="agenda__day tab__detail ">
            {agendas.map((agenda) => {
              const { time = '', title = '', content = '' } = agenda
              return <div key={time} className="agenda-slot">
                <div className="agenda-slot__time">
                  <div>{time}</div>
                </div>
                <div className="agenda-talk">
                  <h3 className="agenda-talk__title" id={title.toLowerCase()}>{title}</h3>

                  {content ? <div className="agenda-talk__description">
                    <input id={time.toLowerCase()} type="checkbox" />
                    <label htmlFor={time.toLowerCase()}>
                      <svg className="agenda-talk__dropdown-icon" viewBox="0 0 512 512">
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#dropdownopen"></use>
                      </svg>
                    </label>
                    <div className="agenda-talk__description-content">{content}</div>
                  </div> : null }
                </div>
              </div>
            })}

          </div>
        </div>
      </div>
    </div>
  )
}