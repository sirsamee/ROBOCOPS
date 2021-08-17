import React from 'react';

const Card = (props) => {
    const { name, email, id } = props
    return ( <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-10' >
        <img style = {
            { width: '200px', height: '200px' }
        }
        alt = 'robots'
        src = { `https://robohash.org/${props.id}?50x100` }
        /> <div>
        <h2> { props.name } </h2> <p> { props.email } </p> </div> </div>
    );
}
export default Card;