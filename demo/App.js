import React, { Component, useState } from 'react';
import { View, Modal, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import ImageViewer from './build/index';

const defaultImages = [
  {
    url: 'https://images.hdqwalls.com/download/skye-united-kingdom-8k-yh-7680x4320.jpg',
  },
  {
    url: 'https://www.setaswall.com/wp-content/uploads/2018/05/8K-Wallpaper-02-7680x4320.jpg'
  },
];

const dimensions = Dimensions.get("window");

const RenderImage = props => {
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(isLoaded)

  return (
    <>
      <Image {...props} source={{...props.source}} onLoadEnd={() => setIsLoaded(true)} onError={() => setIsLoaded(true)} />
      {!isLoaded && <Text style={{ color: 'white' }}>LOADING</Text>}
    </>
  );
}

export default class App extends Component {
  state = {
    isModalOpen: true,
    images: [...defaultImages],
  };

  curImageSize = {
    height: 0,
    width: 0,
  }

  componentWillMount() {
    setTimeout(() => this.setState(({ images }) => ({ images: [...images, { url: 'https://images.hdqwalls.com/download/skye-united-kingdom-8k-yh-7680x4320.jpg' }] })), 2000)
  }

  render() {
    const { images } = this.state;

    return (
      <View
        style={{
          padding: 10
        }}
      >
        {this.state.isModalOpen && <Modal
          visible
        >
          <ImageViewer
            enableSwipeDown
            onSwipeDown={() => this.setState({ isModalOpen: false })}
            renderImage={props => <RenderImage {...props} />}
            imageUrls={images}
            initialIndex={1}
            loadingRender={() => <Text style={{ color: 'white' }}>LOADING</Text>}
          />
        </Modal>}
        <TouchableOpacity onPress={() => this.setState({ isModalOpen: true })}>
          <Text>modal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ isModalOpen: true })}>
          <Text>modal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ isModalOpen: true })}>
          <Text>modal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ isModalOpen: true })}>
          <Text>modal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ isModalOpen: true })}>
          <Text>modal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ isModalOpen: true })}>
          <Text>modal</Text>
        </TouchableOpacity>
        <Image source={{uri: "https://images3.alphacoders.com/124/thumb-1920-124547.jpg", cache: 'force-cache'}} style={{"height": 276.134765625, "width": 414}} />
        <TouchableOpacity onPress={() => this.setState({ isModalOpen: true })}>
          <Text>modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
