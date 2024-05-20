import React, { useState } from 'react';
export default function Bai3() {
        const [birthdate, setBirthdate] = useState<string>('');
        const [submittedBirthdate, setSubmittedBirthdate] = useState<string>('');
      
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          setSubmittedBirthdate(birthdate);
        };
  return (
    <div>Bai3
      <form onSubmit={handleSubmit}>
        <label htmlFor="birthdate">Birthdate:</label>
        <input
          type="date"
          id="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {submittedBirthdate && (
        <div style={{ marginTop: '20px' }}>
          <p>Submitted Birthdate: {submittedBirthdate}</p>
        </div>
      )}
    </div>
  )
}
