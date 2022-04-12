import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';



class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 1
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 3
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 4,
                size: 'large'
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 5,
                size: 'large'
            }]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    )

                    )
                }
            </div>
        )
    }
}

export default Directory;