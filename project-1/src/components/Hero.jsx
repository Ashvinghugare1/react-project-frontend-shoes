const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p> YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Also AVailable On</p>

                    <div className="brand-icons">
                        <img src="./images/amazon.png" alt="amazon-logo" srcset="" />
                        <img src="./images/flipkart.png" alt="flipkart-logo" srcset="" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/hero-image.png" alt="image-logo" srcset="" />
            </div>
        </main>
    );
};

export default HeroSection;

