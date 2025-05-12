

import { useState } from 'react';

export default function Home() {
  const [reviewText, setReviewText] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    if (!reviewText.trim()) {
      setResult(null);
      return;
    }
    setResult('Analyzing...');
    setTimeout(() => {
      const isFake = reviewText.toLowerCase().includes('scam') || reviewText.length < 10;
      setResult(isFake ? '❌ Fake Review Detected' : '✅ This Review Looks Genuine');
    }, 800);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Fake Review Detector
        </h1>
        
        <textarea
          rows={5}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Paste your review here..."
          className="w-full border border-gray-300 rounded-xl p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-200"
        >
          Check Authenticity
        </button>
        {result && (
          <div className="mt-6 text-center text-lg font-medium text-gray-700">
            {result.startsWith('✅') ? (
              <p className="text-green-600">✅ {result.replace('✅ ', '')}</p>
            ) : (
              <p className="text-red-600">❌ {result.replace('❌ ', '')}</p>
            )}
          </div>
        )}
        <p className="text-sm text-center text-gray-400 mt-8">
          Thank you for using• See you soon!
        </p>
      </div>
    </main>
  );
}