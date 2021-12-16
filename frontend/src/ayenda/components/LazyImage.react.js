import React from "react";
import LazyLoad from "vanilla-lazyload";

// Only initialize it one time for the entire application
document.lazyLoadInstance = new LazyLoad();

export class LazyImage extends React.Component {
  // Update lazyLoad after first rendering of every image
  componentDidMount() {
    document.lazyLoadInstance.update();
  }

  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  // Just render the image with data-src
  render() {
    const { alt, src, srcset, sizes, width, height, className } = this.props;
    return (
      <img
        alt={alt}
        className={"lazy "+className}
        data-src={src}
        src={src}
      />
    );
  }
}

export default LazyImage;
