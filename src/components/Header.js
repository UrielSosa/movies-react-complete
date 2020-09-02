import React from 'react';

function Header ({search}) {
    const handleChange = (e) => {
        search(e.target.value)
    }
    return (
        <header>
            <nav className="navbar navbar-light bg-light d-flex justify-content-between">
                <a className="navbar-brand" href="/">Digital Movies</a>
                <form className="form-inline w-50 d-flex justify-content-center">
                    <input 
                        className="form-control w-75" 
                        type="search"
                        placeholder="Buscá una peli..." 
                        aria-label="Search" 
                        onChange={handleChange}
                    />
                </form>
                <button className="btn btn-primary" type="button">Crear pelicula</button>
            </nav>
        </header>
    )
}

export default Header;