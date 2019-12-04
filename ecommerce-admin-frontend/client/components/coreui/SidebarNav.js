import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Badge, Nav, NavItem, NavLink as RsNavLink} from 'reactstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import {injectIntl} from 'react-intl';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    navConfig: PropTypes.any,
    navFunc: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    isOpen: PropTypes.bool,
    staticContext: PropTypes.any,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
    open: [],
    tag: 'nav',
    navConfig: {
        items: [
            {
                name: 'Dashboard',
                url: '/dashboard',
                icon: 'icon-speedometer',
                badge: {variant: 'info', text: 'NEW'}
            }]
    },
    isOpen: false
};

class AppSidebarNav extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.activeRoute = this.activeRoute.bind(this);
        this.hideMobile = this.hideMobile.bind(this);
    }


    componentDidMount() {
        this.openDafaults(this.props.navConfig.items)
    }


    openDafaults(item){
        if(Array.isArray(item) || item.children){
            (Array.isArray(item) ? item : item.children).map(item => this.openDafaults(item))
        }else{
            if(this.props.open.includes(item.component)){
                this.props.onClickItem(item)
            }
        }
    }


    handleClick(e) {
        e.preventDefault();
        e.currentTarget.parentElement.classList.toggle('open');
    }

    activeRoute(routeName, props) {
        return props.location.pathname.indexOf(routeName) > -1
            ? 'nav-item nav-dropdown open'
            : 'nav-item nav-dropdown';
    }

    hideMobile() {
        if (document.body.classList.contains('sidebar-show')) {
            document.body.classList.toggle('sidebar-show');
        }
    }

    // nav list
    navList(items) {
        return items.map((item, index) => this.navType(item, index));
    }

    // nav type
    navType(item, idx) {
        if (item.title) return this.navTitle(item, idx);
        if (item.divider) return this.navDivider(item, idx);
        if (item.label) return this.navLabel(item, idx);
        if (item.children) return this.navDropdown(item, idx);

        return this.navItem(item, idx);

    }

    // nav list section title
    navTitle(title, key) {
        const classes = classNames('nav-title', title.class);
        return <li key={key} className={classes}>{this.navWrapper(title)} </li>;
    }

    // simple wrapper for nav-title item
    navWrapper(item) {
        return item.wrapper && item.wrapper.element ? React.createElement(item.wrapper.element, item.wrapper.attributes, item.name) : this.props.intl.formatMessage(item.name);
    }

    // nav list divider
    navDivider(divider, key) {
        const classes = classNames('divider', divider.class);
        return <li key={key} className={classes}/>;
    }

    // nav label with nav link
    navLabel(item, key) {
        const classes = {
            item: classNames('hidden-cn', item.class),
            link: classNames('nav-label', item.class ? item.class : ''),
            icon: classNames(
                'nav-icon',
                !item.icon ? 'fa fa-circle' : item.icon,
                item.label.variant ? `text-${item.label.variant}` : '',
                item.label.class ? item.label.class : '',
            )
        };
        return (
            this.navLink(item, key, classes)
        );
    }

    // nav dropdown
    navDropdown(item, key) {
        const classIcon = classNames('nav-icon', item.icon);
        return (
            <li key={key} className={this.activeRoute(item.url, this.props)}>
                <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick}><i
                    className={classIcon}/>{this.props.intl.formatMessage(item.name)}{this.navBadge(item.badge)}</a>
                <ul className="nav-dropdown-items">
                    {this.navList(item.children)}
                </ul>
            </li>);
    }

    // nav item with nav link
    navItem(item, key) {
        const classes = {
            item: classNames(item.class),
            link: classNames('nav-link text-truncate', item.variant ? `nav-link-${item.variant}` : ''),
            icon: classNames('nav-icon', item.icon)
        };
        return (
            this.navLink(item, key, classes)
        );
    }

    // nav link
    navLink(item, key, classes) {
        const url = item.url ? item.url : '';
        const itemIcon = <i className={classes.icon}/>;
        const itemBadge = this.navBadge(item.badge);
        const attributes = item.attributes || {};
        const intl = this.props.intl;

        return (
            <NavItem key={key} className={classes.item}>

                {
                    attributes.disabled
                        ?
                        <RsNavLink href={""} className={classes.link} {...attributes}>
                            {itemIcon} {intl.formatMessage(item.name)}
                            {itemBadge}
                        </RsNavLink>
                        :
                        this.props.onClickItem ?
                            <RsNavLink href={""} className={classes.link} {...attributes} onClick={e => {
                                e.preventDefault()
                                this.props.onClickItem(item)
                            }}>
                                {itemIcon} {intl.formatMessage(item.name)}
                                {itemBadge}
                            </RsNavLink> :

                            this.isExternal(url) ?
                                <RsNavLink href={url} className={classes.link} active {...attributes}>
                                    {itemIcon}{intl.formatMessage(item.name)} {itemBadge}
                                </RsNavLink> :

                                <NavLink to={url} className={classes.link} activeClassName="active"
                                         onClick={this.hideMobile} {...attributes}>
                                    {itemIcon}
                                    {intl.formatMessage(item.name)}
                                    {itemBadge}
                                </NavLink>
                }
            </NavItem>
        );
    }

    // badge addon to NavItem
    navBadge(badge) {
        if (badge) {
            const classes = classNames(badge.class);
            return (
                <Badge className={classes} color={badge.variant}>{badge.text}</Badge>
            );
        }
        return null;
    }

    isExternal(url) {
        const link = url ? url.substring(0, 4) : '';
        return link === 'http';
    }

    render() {
        const {className, children, navConfig, ...attributes} = this.props;

        delete attributes.isOpen;
        delete attributes.staticContext;
        delete attributes.Tag

        const navClasses = classNames(className, 'sidebar-nav');

        // ToDo: find better rtl fix
        const isRtl = getComputedStyle(document.querySelector('html')).direction === 'rtl'

        // sidebar-nav root
        return (
            <PerfectScrollbar className={navClasses} option={{suppressScrollX: !isRtl}}>
                <Nav>
                    {children || this.navList(navConfig.items)}
                </Nav>
            </PerfectScrollbar>
        );
    }
}

AppSidebarNav.propTypes = propTypes;
AppSidebarNav.defaultProps = defaultProps;

export default injectIntl(AppSidebarNav);
