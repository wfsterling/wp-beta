import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import './Onboard.scss';
import Image from '../../static/images/Wolf-Pack-Logo-Dark-01.png';
import OnboardForm from './OnboardForm'

function OnboardItem(props) {

    const [newToken] = useState({
        pup: '0x02345230487203982039847502938745589',
        balance: '5.00',
    });


    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
          padding: "1.2em 24px",
          color: theme.palette.text.secondary,
          backgroundColor: "#6CC9CD",
        },
        card: {
            backgroundColor: '#FAFAFA',
            padding: '.4em',
        },
        pageHeading: {
          fontSize: '32px',
          marginTop: '.6em',
          paddingTop: '.6em',
          marginBottom: '.6em',
          paddingBottom: '.6em',
          [theme.breakpoints.down('xs')]: {
            fontSize: '1.6rem',
          },
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
        tokenContainer: {
            marginTop: '2em',
            background: 'url({Image}) 50% 50% no-repeat',
        },
        ethAddress: {
            width: '100%',
            padding: '.6em',
            backgroundColor: 'white',
            color: '#9B9B9B',

        }
    }));
    const classes = useStyles(); 

    return (
    <div className="container">
        <Typography variant="h3" className={classes.pageHeading}>
            New Token Confirmation
        </Typography>
        <Typography variant="body1" >
            Found! This token is ready for use with a $5.00 balance.
        </Typography>

        <div className={classes.tokenContainer}>
            <Typography variant="body2" >
                Token
            </Typography>

            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Token Type
                    </Typography>
                    <Typography variant="h5" component="h2">
                    Pup
                    </Typography>
                    <Typography variant="caption" className={classes.ethAddress} >
                        {newToken.pup}
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    $ <Button size="small">{newToken.balance}</Button>
                </CardActions>
            </Card>


            {/* Form */}
            <OnboardForm/>

        </div>
        
    </div>
    )
}

OnboardItem.propTypes = {
    OnboardItem: PropTypes.func.isRequired
};

OnboardItem.defaultProps = {};

export default OnboardItem;
