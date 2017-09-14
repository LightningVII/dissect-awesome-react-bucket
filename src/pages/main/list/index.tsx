import * as React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { styles } from './index.d';
const img = require('../images/th-20005.jpg');
const styles: styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        width: 500
    }
};

const tilesData = [
    {
        img: img,
        title: 'Breakfast',
        author: 'jill111'
    },
    {
        img: img,
        title: 'Tasty burger',
        author: 'pashminu'
    },
    {
        img: img,
        title: 'Camera',
        author: 'Danson67'
    },
    {
        img: img,
        title: 'Morning',
        author: 'fancycrave1'
    },
    {
        img: img,
        title: 'Hats',
        author: 'Hans'
    },
    {
        img: img,
        title: 'Honey',
        author: 'fancycravel'
    },
    {
        img: img,
        title: 'Vegetables',
        author: 'jill111'
    },
    {
        img: img,
        title: 'Water plant',
        author: 'BkrmadtyaKarki'
    }
];

const GridListExampleSimple = () => (
    <div
        style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        }}
    >
        <GridList style={styles.gridList}>
            <Subheader>December</Subheader>
            {tilesData.map(tile => (
                <GridTile
                    key={tile.title}
                    title={tile.title}
                    subtitle={
                        <span>
                            by <b>{tile.author}</b>
                        </span>
                    }
                    actionIcon={
                        <IconButton>
                            <StarBorder color="white" />
                        </IconButton>
                    }
                >
                    <img src={tile.img} />
                </GridTile>
            ))}
        </GridList>
    </div>
);

export default GridListExampleSimple;
