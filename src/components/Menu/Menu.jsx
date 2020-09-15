import React from 'react'
import MenuItem from '../MenuItem/MenuItem.jsx'
import { StyledMenu } from './Menu.styled'

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'title 1',
          subTitle: 'subtitle 1',
          imageSrc: 'https://source.unsplash.com/600x400/?fashion,man',
          id: 1,
          linkUrl: 'man'
        },
        {
          title: 'title 2',
          subTitle: 'subtitle 1',
          imageSrc: 'https://source.unsplash.com/600x400/?fashion,woman',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'title 3',
          subTitle: 'subtitle 3',
          imageSrc: 'https://source.unsplash.com/600x400/?fashion,baby',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'title 4',
          subTitle: 'subtitle 4',
          imageSrc: 'https://source.unsplash.com/600x400/?fashion,bags',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'title 5',
          subTitle: 'subtitle 5',
          imageSrc: 'https://source.unsplash.com/600x400/?fashion,shoes',
          id: 5,
          linkUrl: ''
        }
      ]
    }
  }

  render() {
    return (
      <StyledMenu>
       {this.state.sections.map(({id, ...rest}) => (
         <MenuItem
          key={id}
          {...rest}
        />
       ))}
      </StyledMenu>
    )
  }
}

export default Menu