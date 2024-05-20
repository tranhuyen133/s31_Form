import React, { useState } from 'react';


export default function Bai2() {
        const [color, setColor] = useState<string>('');
        const [submittedColor, setSubmittedColor] = useState<string>('');
      
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          setSubmittedColor(color);
        };
      
  return (
    <div>Bai2
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter color code (e.g., #FF5733)"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {submittedColor && (
        <div style={{ marginTop: '20px' }}>
          <p>Submitted Color Code: {submittedColor}</p>
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: submittedColor,
              border: '1px solid #000'
            }}
          />
        </div>
      )}
    </div>
  )
}
