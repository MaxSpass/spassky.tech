import React, { Component  } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IcoSvg from '../../components/svg/index';

import GithubSrc from '../../../img/icons/svg/github.svg';
import LinkedinSrc from '../../../img/icons/svg/linkedin.svg';
import FacebookSrc from '../../../img/icons/svg/facebook.svg';

const social = [
    {
        cls: ['github'],
        href: 'https://github.com/MaxSpass',
        src: GithubSrc
    },
    {
        cls: ['linkedin'],
        href: 'https://www.linkedin.com/in/max-spasskiy-7ab01913a',
        src: LinkedinSrc
    },
    {
        cls: ['facebook'],
        href: 'https://www.facebook.com/profile.php?id=100005312348895',
        src: FacebookSrc
    },
];

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchor: null,
        }
    }

    handleClick(e) {
        this.setState({
            anchor: e.currentTarget
        });
    }

    handleClose() {
        this.setState({
            anchor: null
        })
    }

    renderSocials() {
        return (
            <div className="icon-wrap">{
                social.map((el,i) => {
                    return <IcoSvg key={i} cls={el.cls} href={el.href} src={el.src} />
                })
            }</div>
        )
    }

    render() {
        const { anchor } = this.state;

        return (
            <AppBar
                className="header"
                position="relative"
                color="inherit">
                <Toolbar variant="dense">

                    <IconButton
                        aria-owns={anchor ? 'main-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick.bind(this)}
                        color="inherit"
                        aria-label="main-menu">
                        <MenuIcon/>
                    </IconButton>

                    <Menu
                        id="main-menu"
                        anchorEl={anchor}
                        open={Boolean(anchor)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        getContentAnchorEl={null}
                        onClose={this.handleClose.bind(this)}
                    >

                        <MenuItem onClick={this.handleClose.bind(this)}>About</MenuItem>
                        <MenuItem onClick={this.handleClose.bind(this)}>Projects</MenuItem>
                        <MenuItem onClick={this.handleClose.bind(this)}>Contact me</MenuItem>

                    </Menu>
                    <Typography variant="subheading" color="inherit">
                        Spassky.tech
                    </Typography>

                    <div className="header-right">
                        {
                            social.length && this.renderSocials()
                        }
                    </div>

                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;