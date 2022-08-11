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
import ibm from '../../images/IBM.png';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 300,
        background: '#edf4f5'
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
                title="IBM z/OS"
                avatar={
                    <Avatar src={ibm}>
                        <PersonIcon />
                    </Avatar>
                }
            />
            <CardContent>
                <Typography variant="caption">Proficiency</Typography>
                <Typography>
                    I have foundational skills in IBM Z hardware and software
                    especially around z/OS and system administration.
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
                        Enterprise computing, IBMZ, Linux, Mainframe, Security and
                        and a general understanding of z/OS.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}