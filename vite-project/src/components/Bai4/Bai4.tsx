import React, { useState } from 'react';
export default function Bai4() {
        const [progress, setProgress] = useState<number>(0);
        const [submittedProgress, setSubmittedProgress] = useState<number | null>(null);
      
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          setSubmittedProgress(progress);
        };

  return (
    <div>Bai4
      <form onSubmit={handleSubmit}>
        <label htmlFor="progress">Progress:</label>
        <input
          type="range"
          id="progress"
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          min="0"
          max="100"
        />
        <span>{progress}%</span>
        <button type="submit">Submit</button>
      </form>
      {submittedProgress !== null && (
        <div style={{ marginTop: '20px' }}>
          <p>Submitted Progress: {submittedProgress}%</p>
        </div>
      )}
    </div>
  )
}
