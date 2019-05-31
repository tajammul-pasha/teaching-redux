import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import { connect } from "react-redux";
import { getNewsFeed } from "../actions/news.actions";

class News extends Component {
  componentDidMount() {
    console.log("FROM cdm", this.props);
  }

  render() {
    return (
      <View>
        <Text>News</Text>
        <Button
          onPress={this.props.getNewsFeed}
          title="Get News Feeds"
          color="#841584"
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewsFeed: () => dispatch(getNewsFeed())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
