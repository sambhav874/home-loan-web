'use client'
import React, { useEffect, useState } from 'react';
import LoanCard from './../../components/layout/LoanCard'; // Adjust the path as per your project structure
import Link from 'next/link';

const LoanApply = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetchLoans();
  }, []);

  async function fetchLoans() {
    try {
      const response = await fetch("/api/loan");
      if (response.ok) {
        const loanData = await response.json();
        setLoans(loanData);
      } else {
        console.error("Error fetching loans:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching loans:", error);
    }
  }

  return (
    <div className="container mx-auto py-8 ">
      <div className='flex justify-center m-4'> <Link href={'/application-form'}  className='hover:bg-blue-700  bg-blue-800 p-2 m-2 text-white rounded-md'>Apply Here</Link></div>
     
      <h1 className="text-3xl font-bold text-center mb-8">Available Loans</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loans.map((loan) => (
          <LoanCard key={loan._id} loan={loan} />
        ))}
      </div>
    </div>
  );
};

export default LoanApply;