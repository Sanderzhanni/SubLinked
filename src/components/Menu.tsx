import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DescriptionIcon from '@material-ui/icons/Description';
import InfoIcon from '@material-ui/icons/Info';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LogoOnLight from '../assets/LogoOnLight.svg';
import LogoOnDark from '../assets/LogoOnDarkReddit.svg';
import { links, getPathName } from '../utils/Links';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuIcon: {
    marginRight: theme.spacing(2),
  },
  menuVersion: {
    marginLeft: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

interface Classes {
  menuIcon: string | undefined;
}

const mapIcons = (num: number, classes: Classes): React.ReactElement => {
  switch (num) {
    case 1:
      return <AccountTreeIcon className={classes.menuIcon} />; // project graph
    case 2:
      return <AddToQueueIcon className={classes.menuIcon} />; // generate
    case 3:
      return <DescriptionIcon className={classes.menuIcon} />;
    case 4:
      return <InfoIcon className={classes.menuIcon} />;
    default:
      return <HomeIcon className={classes.menuIcon} />;
  }
};

const Menu = (): React.ReactElement => {
  const [menuOpen, toggleMenu] = useState(false);
  const menuBool = useRef(false);
  const ref = useRef<HTMLDivElement>(null);
  const ANIMATION_TIME = 255; // seconds
  const classes = useStyles();
  const history = useHistory();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current)?.contains(e.target as HTMLElement)) {
        if (menuBool.current) {
          toggleMenu(false);
        }
      }
    },
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      menuBool.current = menuOpen;
    }, ANIMATION_TIME);
  });

  useEffect(() => {
    document.addEventListener('click', clickListener);
    return (): void => {
      document.removeEventListener('click', clickListener);
    };
  }, [clickListener]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={(): void => toggleMenu(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            { getPathName(window.location.pathname) }
          </Typography>
          <Tooltip title="Project on GitHub" placement="left">
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={(): Window | null => window.open('https://github.com/Sanderzhanni/SubLinked', '_blank')}>
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={menuOpen} variant="persistent" ref={ref}>
        <List>
          <ListItem
            button
            onClick={(): void => {
              toggleMenu(false);
              history.push('/');
            }}
          >
            {prefersDarkMode
              ? <img src={LogoOnDark} className="menu-logo" alt="Website Dark Logo" />
              : <img src={LogoOnLight} className="menu-logo" alt="Website Light Logo" />}
          </ListItem>
          <ListItem>
            <ListItemText className={classes.menuVersion} secondary="v 2.12.0" />
          </ListItem>
          <Divider />
          {links.map((item, i) => (
            <React.Fragment key={item.name}>
              <ListItem
                button
                onClick={(): void => {
                  toggleMenu(false);
                  history.push(item.path);
                }}
              >
                {mapIcons(i, classes)}
                <ListItemText primary={item.name} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Menu;
