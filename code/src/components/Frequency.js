/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';

const Frequency = ({ userfrequency, setUserfrequency }) => {
  const frequencyGroups = ['Week-days', 'Weekends']
  return (
    <div>
      <h1 className="check-h1" tabIndex="0">Frequency:</h1>
      {frequencyGroups.map((frequency) => (
        <label className="label" tabIndex="0" key={frequency} htmlFor="frequency">
          <input
            type="checkbox"
            value={frequency}
            onChange={(event) => {
              if (userfrequency.includes(frequency)) {
                setUserfrequency(userfrequency.filter((item) => item !== frequency))
              } else {
                setUserfrequency([...userfrequency, event.target.value])
              }
            }}
            checked={userfrequency.includes(frequency)} />
          {frequency}&nbsp;&nbsp;&nbsp;&nbsp;
        </label>
      ))}
    </div>
  )
}

export default Frequency;