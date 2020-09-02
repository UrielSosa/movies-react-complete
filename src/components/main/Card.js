import React from 'react';

const Card = ({movie}) => {
    const {title, rating, awards} = movie;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title mb-4">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted mb-2">Rating {rating}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Premios {awards}</h6>
            </div>
            <div className="card-footer">
                <a href="/" className="card-link">Ir al detalle</a>
            </div>
        </div>
    );
}
 
export default Card;