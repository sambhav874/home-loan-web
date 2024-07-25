// Rend Component (Rend.js)
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css'; // Ensure you import your CSS file

gsap.registerPlugin(ScrollTrigger);

function Rend() {
  useEffect(() => {
    gsap.fromTo(
      '.bar',
      { scaleY: 0.1 },
      {
        scaleY: 1.1,
        scaleX: 2,

        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.bars-container',
          start: 'top 40%',
          end: 'bottom 10%',
          scrub: true,
          markers: false, // Remove markers in production
        },
      }
    );
  }, []);

  return (
    <div className="bg-slate-700 mt-12 ">
      <header className="bg-gray-200 text-black hover:text-slate-800 py-12">
        <div className=" mx-auto px-4 text-black hover:text-slate-800">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left text-black hover:text-slate-800">
              <h1 className="text-5xl font-bold mb-4 text-black hover:text-slate-800">Banker's Adda</h1>
              <p className="mt-4 text-lg text-black hover:text-slate-400">Growmoreloans.com: We are one of India's largest Corporate DSA & fastest growing Loan Distribution Company in India. We are part of Intellex Strategic Consulting Private Limited that manages multiple Financial and Management Advisory Services and Accounting and Taxation and Compliances practices across India.</p>
              <p className="mt-4 text-lg text-black hover:text-slate-800">GrowmoreLoans is a DSA, having partnerships with more than 60+ leading Banks and NBFCs and Fintechs to offer loans across India.</p>
              <p className="mt-4 text-lg text-black hover:text-slate-800">We cater to Finance and Loan requirements such as Personal Loans, Business Loans, Home Loans, Mortgage Loans, Car And Vehicles Loans, Education Loans, Project Finance, Working Capital, Invoice Discounting, Bills Discounting, Supply Chain Finance, Revenue Based Financing (RBF), Venture Debt, Venture Capital.</p>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
              <div className="bars-container">
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
                <div className="bar bar-4"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Rend;
