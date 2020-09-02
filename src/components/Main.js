import React from 'react';
import Card from './main/Card';

const Main = ({movies}) => {
    return (
        <main>
            <div className="container">
                <h1 className="text-center my-5">Listado de peliculas</h1>
                <div className="row">
                    <div className="card-columns">
                    {
                        movies.length !== 0? 
                        movies.map((movie, i) => (
                            <Card 
                                key={i}
                                movie={movie}
                            />
                        ))
                        :
                        <h3>No se encotraron pelis</h3>
                    }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;