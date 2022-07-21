import React from 'react';
import { useSelector } from 'react-redux';

import { Cell } from '@components';

import './index.scss';

export function Field() {
  const settings = useSelector(state => state.settings);

  const renderField = () => {
    const rows = [];
    for (let i = 0; i < settings.rowCount; i++) {
      const cells = [];
      for (let j = 0; j < settings.columnCount; j++) {
        cells.push(<Cell key={j} position={[i, j]} />)
      }
      rows.push(<div key={i} className='field__row'>{cells}</div>)
    }
    return rows;
  }

  return (
    <div className='field'>
      {renderField()}
    </div>
  )
}
