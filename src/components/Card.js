import React from 'react';//não funciona sem isso

const Card = ({name, email, id}) => {//dentro do parametro temos props (propriedades), dispensando uma linha de cod
    return ( //className text center, background, display block, border, padding, margin, efeito,
        <div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
            <img alt='robot' src= {`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;