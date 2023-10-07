import {Carousel} from "react-responsive-carousel";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Gallery() {
    return (
        <div className="App container-fluid">
            
            {/* Header Section */}
            <header className="text-center py-5 bg-primary text-white">
                <h1 className="display-4 mb-3">
                    Together we repair homes, revitalize communities, and rebuild lives.
                </h1>
                <p className="lead">Join us in making a difference.</p>
            </header>
            
            {/* Gallery Section */}
            <section className="mt-5">
                <h2 className="text-center mb-4">Recent Projects</h2>
                <Gallery />
            </section>
            
            <hr />
            
            {/* Calendar Section */}
            <section className="my-5">
                <h2 className="text-center mb-4">Upcoming Events</h2>
            </section>
            
            {/* Footer Section */}
            <footer className="py-4 bg-dark text-white text-center">
                <p>© 2023 by Non-Profit Organization. Proudly created with love and dedication.</p>
            </footer>
        
        </div>
    );
}

export default Gallery;
