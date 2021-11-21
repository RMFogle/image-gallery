import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Switch, FormGroup, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { BASE_API_URL } from '../../utils/Api'
import { deleteImage } from '../../redux/actions/imageAction';

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
        backgroundColor: 'none',
    },
        overlay: {
            position: 'absolute',
            top: '20px',
            left: '20px',
            color: 'white',
        },
        overlay2: {
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'white',
        },
    cardActions: {
            padding: '0 16px 8px 16px',
            display: 'flex',
            justifyContent: 'space-between',
        },
    });

const Image = (image: any) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
        <CardMedia
            className={classes.media}
            image={image}
        />
        <div className={classes.overlay}></div>
        <div className={classes.overlay2}></div>
        <CardActions className={classes.cardActions}>
                <FormGroup>
                    {/* <FormControlLabel
                        control={<Switch checked={checked} onChange={toggleChecked} />}
                        label={ checked ? 'Complete' : 'Incomplete'}
                    /> */}
                </FormGroup>
                {/* <Button onClick={() => dispatch(deleteImage(id))}>Delete</Button> */}
            </CardActions>
        </Card>
    )
}

const mapStateToProps = (state: any) => ({
    image: state.image || [],
    errors: state.errors || {}
});

export default connect(mapStateToProps)(Image)