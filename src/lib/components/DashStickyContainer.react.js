import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashStickyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { isPinned: false };
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        this.setState(state => ({ isPinned: !state.isPinned }));
    }

    render() {
        const title = this.props.title ? <div
            className='sticky-container-title'>
            {this.props.title}
        </div> : '';


        const pinIcon = <svg className="pin-icon" viewBox="0 0 20 20">
            <path d="M17.592,8.936l-6.531-6.534c-0.593-0.631-0.751-0.245-0.751,0.056l0.002,2.999L5.427,9.075H2.491c-0.839,0-0.162,0.901-0.311,0.752l3.683,3.678l-3.081,3.108c-0.17,0.171-0.17,0.449,0,0.62c0.169,0.17,0.448,0.17,0.618,0l3.098-3.093l3.675,3.685c-0.099-0.099,0.773,0.474,0.773-0.296v-2.965l3.601-4.872l2.734-0.005C17.73,9.688,18.326,9.669,17.592,8.936 M3.534,9.904h1.906l4.659,4.66v1.906L3.534,9.904z M10.522,13.717L6.287,9.48l4.325-3.124l3.088,3.124L10.522,13.717z M14.335,8.845l-3.177-3.177V3.762l5.083,5.083H14.335z"></path>
        </svg>

        const stickyClassName = this.state.isPinned ? 'sticky ' : '';
        const className = this.props.className ?
            'sticky-container ' + stickyClassName + this.props.className :
            'sticky-container ' + stickyClassName;

        const buttonClassName = this.state.isPinned ? 'pin-button pinned' : 'pin-button';
        const button = <button className={buttonClassName} onClick={this.onClick}>
            <i>{pinIcon}</i>
        </button>;

        const topValue = this.props.top ? this.props.top : '0px';

        return (
            <div id={this.props.id} className={className} style={{ top: topValue }}>
                {title}
                {button}
                {this.props.children}
            </div>
        );
    }
}

DashStickyContainer.defaultProps = {};

DashStickyContainer.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string,
    top: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
