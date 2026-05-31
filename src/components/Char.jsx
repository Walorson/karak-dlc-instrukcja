const Char = ({name, skill1name, skill2name, skill1desc, skill2desc}) => {
    return (
        <article className="character-card">
        <div className="character-image">
          <img src={name+"/postać.png"} alt="Postać" />
        </div>

        <div className="character-content">
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2 className="character-name">{name}</h2>
          </div>

          <div className="skills">
            <div className="skill">
              <div className="skill-icon">
                <img src={name+"/"+name.toLowerCase()+"-icon1.png"} alt="Ikona umiejętności" />
              </div>
              <div>
                <div className="skill-name">{skill1name}</div>
                <div className="skill-desc">{skill1desc}</div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-icon">
                <img src={name+"/"+name.toLowerCase()+"-icon2.png"} alt="Ikona umiejętności" />
              </div>
              <div>
                <div className="skill-name">{skill2name}</div>
                <div className="skill-desc">{skill2desc}</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    )
}

export default Char;