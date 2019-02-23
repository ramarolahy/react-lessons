import React from 'react';

export default class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.imgRef = React.createRef();

        this.state = { spans: 0 };
    }
    // We would not be able to get imgRef.clientHeight right away since React will try to access
    // it before the image even load (happens supper fast!!) thus we will need to listen the
    // load event
    componentDidMount() {
        this.imgRef.current.addEventListener('load', this.setSpans);
    }
    // Using arrow function will solve 'this' binding issues with callbacks
    setSpans = ()=> {
        // Get img height
        const height = this.imgRef.current.clientHeight;
        // calculate appropriate span for each img
        const spans = Math.ceil(height / 1) + 10;
        this.setState({ spans })

    }

    render() {
        // See https://mathiasbynens.github.io/rel-noopener/ for rel="noopener"
        // See https://reactjs.org/docs/lists-and-keys.html for key. ADD to root tag
        // destructuring will allow us to refer to images keys without repeating el.key each time
        // eg instead of el.urls.thumb we can just write urls.thumb
        const {description, urls} = this.props.image;
        return (
            <div className="wrap--img" style={{gridRowEnd:`span ${this.state.spans}`}}>
                <a href={urls.full} target='_blank' rel="noopener noreferrer">
                    <img ref={this.imgRef} alt={description} src={urls.thumb} />
                </a>
            </div>
        );
    }
}