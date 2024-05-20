import React, { useState } from 'react';

export default function Bai7() {
        const [gender, setGender] = useState<string>('');
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          console.log('Selected Gender:', gender);
        };
  return (
    <div>Bai7
       <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === 'Male'}
              onChange={(e) => setGender(e.target.value)}
            />
            Nam
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === 'Female'}
              onChange={(e) => setGender(e.target.value)}
            />
            Nữ
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={gender === 'Other'}
              onChange={(e) => setGender(e.target.value)}
            />
            Khác
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {gender && (
        <div style={{ marginTop: '20px' }}>
          <p>Selected Gender: {gender}</p>
        </div>
      )}
    </div>
    </div>
  )
}
