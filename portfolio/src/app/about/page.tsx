import React from "react";

const About = () => {
  return (
    <section className="retro-bg min-h-screen flex items-center justify-center p-4">
      <div className="bg-black max-w-3xl p-8 rounded-lg shadow-lg retro-font">
        <h1 className="text-4xl text-blue-600 mb-4 text-center">
          Tech Innovators Inc. 🚀
        </h1>
        <p className="text-xl text-gray-700 mb-6 text-center">
          Pioneering the Future of Technology for 5 Years
        </p>
        <div className="space-y-4">
          <p className="text-gray-400">
            Founded in 2019, Tech Innovators Inc. has been at the forefront of
            technological advancements, providing cutting-edge solutions that
            drive the digital transformation of businesses worldwide. Our
            journey began with a small team of passionate engineers, and over
            the past five years, we've grown into a global leader in the tech
            industry. 🌐
          </p>
          <p className="text-gray-400">
            Our mission is to innovate and deliver high-quality tech products
            that empower businesses to achieve their goals. From cloud computing
            ☁️ and artificial intelligence 🤖 to blockchain and IoT 🌐, we
            harness the power of technology to create impactful solutions.
          </p>
          <p className="text-gray-400">
            At Tech Innovators Inc., we believe in a collaborative approach,
            working closely with our clients to understand their unique needs
            and challenges. Our dedicated team of experts is committed to
            excellence, ensuring that our clients receive the best possible
            service and support. 🤝
          </p>
          <p className="text-gray-400">
            As we look to the future, we are excited to continue our journey of
            innovation and growth. Thank you for being a part of our story.
            Together, we can shape the future of technology. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
