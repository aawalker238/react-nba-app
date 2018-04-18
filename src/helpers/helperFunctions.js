import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

/**
 *
 * @param {array} arr
 */
export function showItems(arr) {
  return arr.map((item, idx) => {
    return (
      <div className={item.type} key={idx}>
        <Link to={item.link}>
          <FontAwesome name={item.icon} />
          {item.text}
        </Link>
      </div>
    );
  });
}
