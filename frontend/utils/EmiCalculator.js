'use client'
import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(12);
  const [loanTenure, setLoanTenure] = useState(2);
  const [tenureType, setTenureType] = useState('Year');

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const tenure = tenureType === 'Year' ? loanTenure * 12 : loanTenure;

    const emi = principal * rate * (Math.pow(1 + rate, tenure) / (Math.pow(1 + rate, tenure) - 1));
    return emi.toFixed(2);
  };

  const totalInterestPayable = () => {
    const emi = calculateEMI();
    const tenure = tenureType === 'Year' ? loanTenure * 12 : loanTenure;
    return (emi * tenure - loanAmount).toFixed(2);
  };

  const totalPayment = () => {
    const emi = calculateEMI();
    const tenure = tenureType === 'Year' ? loanTenure * 12 : loanTenure;
    return (emi * tenure).toFixed(2);
  };

  const chartData = {
    labels: ['Principal Amount', 'Total Interest'],
    datasets: [
      {
        data: [loanAmount, totalInterestPayable()],
        backgroundColor: ['#4CAF50', '#FF6384'],
        hoverBackgroundColor: ['#45A049', '#FF4365'],
      },
    ],
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      
      <div className="mb-4">
        <label className="block text-gray-700">Loan Amount</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="w-full mt-2 p-2 border text-black border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Interest Rate (%)</label>
        <input
          type="range"
          min="0"
          max="25"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="w-full mt-2"
        />
        <div className="text-gray-700 mt-2">{interestRate}%</div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Loan Tenure</label>
        <input
          type="number"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
          className="w-full mt-2 text-black p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4 flex">
        <button
          className={`px-4 py-2 mr-2 rounded ${tenureType === 'Year' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
          onClick={() => setTenureType('Year')}
        >
          Year
        </button>
        <button
          className={`px-4 py-2 rounded ${tenureType === 'Month' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
          onClick={() => setTenureType('Month')}
        >
          Month
        </button>
      </div>
      <div className="mt-6">
        <div className="text-xl font-bold">Loan EMI: {calculateEMI()}</div>
        <div className="text-xl font-bold">Total Interest Payable: {totalInterestPayable()}</div>
        <div className="text-xl font-bold">Total Payment (Principal + Interest): {totalPayment()}</div>
      </div>
      <div className="mt-6">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default EMICalculator;
