import React from "react";

const ExploreFuture = () => {
    return (
        <section
          id="journey"
          className="bg-gray-100 py-16 bg-cover"
          style={{ backgroundImage: "url('https://newpunepublicschool.com/images/bg.jpg')" }}
        >
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <div className="text-center mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-relaxed">
                We invite you to explore your child's future at
                <br />
                <span className="text-yellow-500">New Nagpur public School</span>
              </h2>
            </div>
            {/* Video Block */}
            <div className="video-block relative shadow-md rounded-lg overflow-hidden max-w-3xl mx-auto">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%", height: "0" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/JBzmj3k1A1M"
                  title="New Pune Public School, Nigdi - Get the Campus Tour | Best CBSE School in PCMC | Admission Open"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="hover:scale-105 transition-transform duration-300 ease-in-out"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      );
    };

export default ExploreFuture;
