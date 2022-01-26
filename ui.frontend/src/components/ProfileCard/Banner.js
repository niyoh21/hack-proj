import React, { Component } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";

export const BannerEditConfig = {
  emptyLabel: "Banner",

  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1;
  },
};

export default class Banner extends Component {
  get content() {
    return (
      <img
        className="Image-src"
        src={this.props.src}
        alt={this.props.alt}
        title={this.props.title ? this.props.title : this.props.alt}
      />
    );
  }

  // display our custom bannerText property!
  get bannerText() {
    console.log(this.props);
    console.log(this.props.bannerText);
    if (this.props.title) {
      return <h4>{this.props.title}</h4>;
    } else {
      return <h4>Default Banner Display</h4>;
    }
  }

  render() {
    if (BannerEditConfig.isEmpty(this.props)) {
      return null;
    }

    return (
      <div className="Banner">
        {this.bannerText}
        <div className="BannerImage">{this.content}</div>
      </div>
    );
  }
}

MapTo("wknd-spa-react/components/banner")(Banner, BannerEditConfig);
