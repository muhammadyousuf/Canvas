import React, { Component } from "react";
import { Stage, Layer, Rect, Text , Circle , Line, Shape, Star } from "react-konva";
import Konva from "konva";
import './kanvas.css'

class Konvas extends Component {
    state = {
        color: 'green',
        isDragging: false,
        x: 220,
        y: 50
      };
      handleClick = () => {
        this.setState({
          color: Konva.Util.getRandomColor()
        });
      };
      componentDidMount() {
        // log Konva.Circle instance
        console.log(this.circle);
      }
      handleDragStart = e => {
        e.target.setAttrs({
          shadowOffset: {
            x: 15,
            y: 15
          },
          scaleX: 1.1,
          scaleY: 1.1
        });
      };
      handleDragEnd = e => {
        e.target.to({
          duration: 0.5,
          easing: Konva.Easings.ElasticEaseOut,
          scaleX: 1,
          scaleY: 1,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
          width:400,
          height:400
        });
      };
  render() {
    return (
      <div  >
        <h1>Wellcome to Kanva</h1>
        <Stage width={500} height={500} className="canvas" >
          <Layer>
          <Text
            text="Draggable Text"
            x={this.state.x}
            y={this.state.y}
            draggable
            fill={this.state.isDragging ? 'green' : 'black'}
            onDragStart={() => {
              this.setState({
                isDragging: true
              });
            }}
            onDragEnd={e => {
              this.setState({
                isDragging: false,
                x: e.target.x(),
                y: e.target.y()
              });
            }}
          />
            <Rect
              x={50}
              y={50}
              width={50}
              height={50}
              fill={this.state.color}
              shadowBlur={5}
              draggable
              onClick={this.handleClick}
            />
            <Circle x={200} y={200} ref={ref => (this.circle = ref)} draggable radius={50} fill="red" />
            <Circle x={400} y={400} ref={ref => (this.circle = ref)} draggable radius={50} fill="green" />
            <Line
            x={20}
            y={200}
            points={[0, 0, 100, 0, 100, 100]}
            tension={0.5}
            closed
            stroke="black"
            fillLinearGradientStartPoint={{ x: -50, y: -50 }}
            fillLinearGradientEndPoint={{ x: 50, y: 50 }}
            fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
            draggable
          />
           {/* <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(20, 50);
              context.lineTo(220, 80);
              context.quadraticCurveTo(150, 100, 260, 170);
              context.closePath();
              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape);
            }}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={4}
            draggable
          /> */}
            {/* {[...Array(10)].map(i => (
            <Star
              key={i}
              x={Math.random() * window.innerWidth}
              y={Math.random() * window.innerHeight}
              numPoints={5}
              innerRadius={20}
              outerRadius={40}
              fill="#89b717"
              opacity={0.8}
              draggable
              rotation={Math.random() * 180}
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.6}
              onDragStart={this.handleDragStart}
              onDragEnd={this.handleDragEnd}
            />
          ))} */}

          </Layer>
        </Stage>
        
      </div>
    );
  }
}

export default Konvas;
