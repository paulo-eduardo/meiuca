import React from "react";
import { Button } from "./components/button";
import { Heading } from "./components/heading";
import { Subtitle } from "./components/subtitle";
import { Paragraph } from "./components/paragraph";
import { Shape } from "./components/shape";

import "./App.css";

class App extends React.Component {
  state = {
    css: null,
  };
  componentDidMount() {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((data) => this.setState({ css: data }));
  }

  render() {
    if (this.state.css == null) return <h1>Loading</h1>;
    return (
      <Shape css={this.state.css} className="App">
        <Heading css={this.state.css} size="XXXL">
          Heading SM
        </Heading>
        <Subtitle css={this.state.css} spacingStack="XXS">
          {" "}
          Subtitle SM{" "}
        </Subtitle>
        <Paragraph css={this.state.css} spacingStack="XS">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          feugiat arcu felis, non efficitur massa tristique nec. Morbi
          sollicitudin, massa sed scelerisque pulvinar, massa sem congue tellus,
          quis consequat leo diam et magna. Donec sollicitudin molestie luctus.
          Morbi ut tempus metus, condimentum hendrerit justo. Donec tincidunt
          diam tellus, vel sodales justo ornare sit amet. Etiam molestie justo
          vitae lorem consequat, sed gravida risus molestie. Sed laoreet gravida
          arcu quis vehicula. Fusce mi elit, consectetur sed fermentum sed,
          laoreet in mi. Cras elementum facilisis magna eu commodo. Maecenas
          egestas nibh quam, quis semper leo congue ut. Proin mi quam, fermentum
          ut tellus sed, venenatis lacinia nulla. Integer non nulla purus. Fusce
          nulla lacus, convallis ac urna vel, ullamcorper dapibus purus. Etiam
          enim massa, accumsan eget ipsum ut, tincidunt fermentum dolor. Nam ac
          rutrum est. Fusce sollicitudin mauris vel enim imperdiet, et ornare
          ligula commodo. Quisque imperdiet elit sit amet elit auctor, et
          ultricies nibh porttitor. Nullam at leo sodales, vulputate nibh sed,
          vulputate sem. Nam vitae dignissim ipsum. Phasellus mattis et elit
          vitae porta. Duis sollicitudin neque non arcu sodales, in rhoncus
          lorem auctor. Vivamus accumsan ante at vulputate egestas. Proin
          hendrerit efficitur ex quis dignissim. Curabitur consectetur mi
          mollis, rutrum sapien nec, malesuada neque. Sed quis justo nisi.
          Vestibulum sit amet neque non urna rhoncus malesuada eu sed eros.
          Vestibulum laoreet erat in mollis maximus. Fusce tincidunt felis sem,
          non aliquet neque fringilla eu. Pellentesque a massa in libero
          eleifend laoreet vel nec odio. Donec ultricies nisi vel lorem
          consequat convallis. Nulla aliquet neque eget iaculis porttitor. Sed
          quis imperdiet ex, quis aliquam elit. Maecenas feugiat vitae ligula a
          vulputate. Nam tristique nisi metus, ut luctus ligula aliquet id.
          Pellentesque dictum, erat nec feugiat feugiat, eros urna ornare erat,
          sed porta magna felis ac est. In venenatis, odio non egestas suscipit,
          augue odio iaculis est, vitae auctor nulla lacus non quam. Mauris
          fermentum nec tortor eu placerat. Donec sagittis lobortis tortor ac
          maximus. In ut sapien a turpis pellentesque luctus. Quisque eleifend
          aliquam libero. Sed sit amet leo elit.
        </Paragraph>
        <Button
          css={this.state.css}
          spacingStack="MD"
          text="Button Label"
          fontFamily="Highlight"
          fontWeight="medium"
          fontSize="SM"
          labelColor="Neutral"
          labelColorIntense="Lightest"
          borderRadius="none"
          color="Primary"
          colorIntense="Medium"
        />
      </Shape>
    );
  }
}

export default App;
