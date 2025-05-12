import { useState } from 'react';
import axios from 'axios';

export default function ReviewForm() {
  const [review, setReview] = useState('');
  const [result, setResult] = useState('');

  const handleCheck = async () => {
    const form = new FormData();
    form.append('review', review);
    const res = await axios.post('http://localhost:8000/predict', form);
    setResult(res.data.result);
  };

  return (
    <div>
      <textarea
        className="w-full p-2 border rounded"
        rows="4"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Type your review here..."
      />
      <button onClick={handleCheck} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
        Check
      </button>
      {result && (
        <div className="mt-4 text-lg">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
}
