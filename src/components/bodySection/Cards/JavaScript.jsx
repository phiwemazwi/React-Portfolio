import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import JS from '../../images/JavaScript.png'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 300,
        background: '#ebeaae'
        
    },
    expand: {
        marginLeft: 'auto'
    }
}));
const ExpandIcon = ({ expanded }) =>
    expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;
export default function ExpandableCards() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.card}>
            <CardHeader
                title="JavaScript"
                avatar={
                    <Avatar src={JS}>
                        <PersonIcon />
                    </Avatar>
                }
            />
            <CardContent>
                <Typography variant="caption">Proficiency</Typography>
                <Typography>
                    I have learned the fundamentals of JavaScript programming and this includes variables, 
                    arrays, objects, loops, and functions.
                </Typography>
            </CardContent>
            <CardActions disableActionSpacing>
                <IconButton>
                    
                </IconButton>
                <IconButton>
                    
                </IconButton>
                <IconButton
                    className={classes.expand}
                    onClick={toggleExpanded}
                >
                    <ExpandIcon expanded={expanded} />
                </IconButton>
            </CardActions>
            <Collapse in={expanded}>
                <CardContent>
                    <Typography>
                        Object Oriented Programming styles.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}