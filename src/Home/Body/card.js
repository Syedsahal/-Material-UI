import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2">
          <h4><b>FOR MURREE</b></h4>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          30% Discount
        </Typography>
        <Typography variant="body2" component="p">
          <h3>Food,Music,Camp and Comfort stay.</h3>
          <br />
          {'"You will be Happy"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Call or email for more.</Button>
      </CardActions>
    </Card>

    

    
  );
}
