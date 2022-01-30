import { Component } from "react";

const styles = {
  bubbleAlert: {
    backgroundColor: "#E9725A",
    borderRadius: "15px",
    solor: "#fff",
    padding: "2px 10px",
    fontSize: "0.9rem",
  },
};
class BubbleAlert extends Component {
  getNumber(n) {
    if (!n) {
      return "";
    } //esto es un metodo
    return n > 9 ? "9+" : n;
  }
  render() {
    const { value } = this.props;
    return <span style={styles.bubbleAlert}>{this.getNumber(value)}</span>;
  }
}

export default BubbleAlert;
