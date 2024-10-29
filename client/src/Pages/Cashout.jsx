import React, { useState } from 'react';
import SideBar from '../Components/SideBar';

const Cashout = () => {
  const [cashoutMethod, setCashoutMethod] = useState('Mobile Money');
  const [accountNumber, setAccountNumber] = useState('');
  const [networkProvider, setNetworkProvider] = useState('');
  const [bank, setBank] = useState('');
  const [savedAccount, setSavedAccount] = useState(null);
  const [expressAmount, setExpressAmount] = useState('');

  // Placeholder data for financial overview and transaction history
  const financialData = {
    currentBalance: 0.00,
    totalEarned: 13293.00,
    deductions: 1329.30,
    cashouts: 11963.70
  };

  const transactionHistory = [
    {
      date: '23/Jul/2024 10:19',
      amount: 'GHS 11,963.70',
      reference: 'f406dcdd-e418-4954-91df-2674a6d4327b',
      status: 'success',
      bank: 'Access Bank',
      customer: 'SULEMAN BARIKISU'
    },
    {
      date: 'Invalid Date',
      amount: 'GHS 11,963.70',
      reference: 'f43680fd-a4ce-4fea-9f58-f34e2ddc691a',
      status: 'failed',
      bank: 'MTN',
      customer: 'CECILIA KWOPIE'
    },
  ];

  const handleSaveAccount = () => {
    const accountInfo = {
      method: cashoutMethod,
      accountNumber,
      networkProvider,
      bank,
    };
    setSavedAccount(accountInfo);
    setAccountNumber('');
    setNetworkProvider('');
    setBank('');
  };

  const resetCashoutMethod = () => {
    setSavedAccount(null);
  };

  const handleExpressCashout = () => {
    if (expressAmount >= 100 && expressAmount <= 5000) {
      console.log("Express Cashout Requested:", expressAmount);
    } else {
      alert("Amount must be between GHS 100 and GHS 5000 for express cashout.");
    }
  };

  const handleFullCashout = () => {
    console.log("Full Cashout Requested");
  };

  return (
    <div className='w-full min-h-screen bg-slate-50 flex flex-col'>
      <div className='flex flex-1'>
        {/* Sidebar */}
        <div className='hidden lg:flex lg:w-[20%] lg:fixed lg:left-0 lg:top-16 bg-white shadow-md h-[80%] z-[0] mt-8'>
          <SideBar />
        </div>

        {/* Main content area */}
        <div className='flex-1 lg:ml-[20%] p-4 sm:p-6 md:p-8'>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Financial Overview</h2>
          <p className="text-gray-600 mb-6 sm:mb-8">Analyze your revenue streams and financial performance.</p>

          {/* Financial Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 sm:mb-8">
            <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-gray-500 font-semibold">Current Balance</h3>
              <p className="text-2xl sm:text-3xl font-bold text-black">GH₵ {financialData.currentBalance.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Available funds</p>
              <p className="text-green-500 mt-1 sm:mt-2">↗ You're getting there</p>
            </div>
            <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-gray-500 font-semibold">Total Earned</h3>
              <p className="text-2xl sm:text-3xl font-bold text-black">GH₵ {financialData.totalEarned.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Lifetime earnings</p>
              <p className="text-green-500 mt-1 sm:mt-2">↗ Keep it up</p>
            </div>
            <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-gray-500 font-semibold">Deductions</h3>
              <p className="text-2xl sm:text-3xl font-bold text-black">GH₵ {financialData.deductions.toFixed(2)}</p>
              <p className="text-sm text-gray-500">10% platform fee</p>
            </div>
            <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-gray-500 font-semibold">Cashouts</h3>
              <p className="text-2xl sm:text-3xl font-bold text-black">GH₵ {financialData.cashouts.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Total cashouts</p>
            </div>
          </div>

          {/* Cashout Method */}
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Cashout Method</h3>
          {!savedAccount ? (
            <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg mb-4 sm:mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Select Cashout Method</label>
              <select
                className="border p-2 rounded w-full mb-4"
                value={cashoutMethod}
                onChange={(e) => setCashoutMethod(e.target.value)}
              >
                <option value="Mobile Money">Mobile Money</option>
                <option value="Bank">Bank</option>
              </select>

              {cashoutMethod === 'Mobile Money' && (
                <div className="mt-4">
                  <label className="block text-gray-700 font-semibold mb-2">Mobile Money Number</label>
                  <input
                    type="text"
                    className="border p-2 rounded w-full mb-4"
                    placeholder="Enter Mobile Money number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                  <label className="block text-gray-700 font-semibold mb-2">Select Network Provider</label>
                  <select
                    className="border p-2 rounded w-full"
                    value={networkProvider}
                    onChange={(e) => setNetworkProvider(e.target.value)}
                  >
                    <option value="">Select a provider</option>
                    <option value="MTN">MTN</option>
                    <option value="Vodafone">Vodafone</option>
                    <option value="AirtelTigo">AirtelTigo</option>
                  </select>
                </div>
              )}

              {cashoutMethod === 'Bank' && (
                <div className="mt-4">
                  <label className="block text-gray-700 font-semibold mb-2">Bank Account Number</label>
                  <input
                    type="text"
                    className="border p-2 rounded w-full mb-4"
                    placeholder="Enter Bank Account number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                  <label className="block text-gray-700 font-semibold mb-2">Select Bank</label>
                  <select
                    className="border p-2 rounded w-full"
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                  >
                    <option value="">Select a bank</option>
                    <option value="GCB Bank">GCB Bank</option>
                    <option value="Ecobank">Ecobank</option>
                    <option value="Stanbic Bank">Stanbic Bank</option>
                    <option value="Standard Chartered">Standard Chartered</option>
                  </select>
                </div>
              )}

              <button
                onClick={handleSaveAccount}
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded w-full"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-teal-500 shadow-md rounded-lg text-white mb-4 sm:mb-6">
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="bg-yellow-400 h-10 w-16 rounded-sm"></div>
                </div>
                <div>
                  <p className="text-lg font-semibold">{savedAccount.method === 'Mobile Money' ? networkProvider : bank}</p>
                  <p className="text-sm">{savedAccount.method === 'Mobile Money' ? 'Mobile Money' : 'Bank'} | GHS</p>
                </div>
              </div>
              <p className="mt-2 text-sm">{savedAccount.accountNumber}</p>
              <button
                onClick={resetCashoutMethod}
                className="bg-red-500 text-white px-3 py-1 mt-4 rounded"
              >
                Reset Cashout Method
              </button>
            </div>
          )}

          {/* Express Cashout Section */}
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Request Transfer</h3>
          <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg mb-4 sm:mb-6">
            <h4 className="text-lg font-semibold mb-2">Express Cashout</h4>
            <p className="text-sm text-gray-600 mb-4">
              Withdraw up to GHS 5000 per day. A service charge of 1.2% e-levy inclusive is applicable. The minimum amount is GHS 100.00.
            </p>
            <input
              type="number"
              className="border p-2 rounded w-full mb-4"
              placeholder="Amount to withdraw"
              value={expressAmount}
              onChange={(e) => setExpressAmount(e.target.value)}
              min="100"
              max="5000"
              step="10"
            />
            <button
              onClick={handleExpressCashout}
              className={`w-full px-4 py-2 rounded ${expressAmount >= 100 && expressAmount <= 5000 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
            >
              Proceed
            </button>
          </div>

          {/* Full Cashout Section */}
          <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg mb-6 sm:mb-8">
            <h4 className="text-lg font-semibold mb-2">Full Cashout</h4>
            <p className="text-sm text-red-600 mb-4">
              Payment processed within 1-2 days. There is no service charge.
            </p>
            <button
              onClick={handleFullCashout}
              className="w-full px-4 py-2 bg-black text-white rounded"
            >
              Proceed
            </button>
          </div>

          {/* Cashout History */}
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Cashout History</h3>
          <div className="overflow-auto bg-white shadow-md rounded-lg p-4 sm:p-6">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-2 sm:px-4 py-2 text-left text-gray-600">Date</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-gray-600">Amount</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-gray-600">Reference</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-gray-600">Status</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-gray-600">Bank</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-gray-600">Customer</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map((transaction, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-2 sm:px-4 py-2">{transaction.date}</td>
                    <td className="px-2 sm:px-4 py-2 text-green-500">{transaction.amount}</td>
                    <td className="px-2 sm:px-4 py-2">{transaction.reference}</td>
                    <td className="px-2 sm:px-4 py-2">
                      <span className={`text-white px-2 py-1 rounded ${transaction.status === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-2 sm:px-4 py-2">{transaction.bank}</td>
                    <td className="px-2 sm:px-4 py-2">{transaction.customer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashout;
