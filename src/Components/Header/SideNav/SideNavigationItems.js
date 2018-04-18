import React from 'react';
import { showItems } from '../../../helpers/helperFunctions';
import itemsArray from '../../../data/nav_data';

const SideNavigationItems = () => {
  return <div>{showItems(itemsArray)}</div>;
};

export default SideNavigationItems;
