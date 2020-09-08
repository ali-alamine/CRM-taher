import React from 'react';
import './GridCom.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

function GridCom(){
    return (
        <div className='grid'>
                <GridList cellHeight={180}>
                    <GridListTile className='tile'>
                        <h3>t1</h3>
                    </GridListTile>
                    <GridListTile className='tile'>
                        <h3>t1</h3>
                    </GridListTile>
                </GridList>
        </div>
    )
}

export default GridCom;