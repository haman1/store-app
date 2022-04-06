import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: './img/hat.png',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: './img/jackets.png',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: './img/sneakers.png',
          id: 3
        },
        {
          title: 'womens',
          imageUrl:'./img/women.png',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: './img/men.png',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;