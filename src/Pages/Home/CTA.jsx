import React from 'react'
import Footer from '../../Components/Footer';

const CTA = () => {
    return (
            <section className="bg-orange-500 text-white py-16 text-center">
                <h2 className="text-3xl font-semibold">
                    Order Your Favorite Food Now!
                </h2>
                <button className="mt-6 px-6 py-3 bg-black rounded-lg hover:bg-gray-800">
                    Go to Menu
                </button>
            </section>
    );
};
export default CTA;