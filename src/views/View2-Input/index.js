import React, { Component} from 'react';
import { Button, Input, InputNumber} from 'antd';
import { Col, Row } from 'antd';
import { Typography } from 'antd';
import './view2-Input.css';
import {LoginOutlined, LogoutOutlined, ReloadOutlined, EnterOutlined} from '@ant-design/icons';

const {Paragraph} = Typography;

export default class View2Input extends Component {
    constructor(props) {
      super(props);
      this.state = {input: 0,
                    isPushDisable: false,
                    isSwitchDisable: false,
                    isPopDisable: true};
    }

    onChange = (value) => {
      this.setState({
        input: value
      })
    };

    submit = () => {
      let value = this.state.input
      if(value < 1 || value > 99) {
        alert("Input out of accepted range")
        this.setState({input: 0})
      }
      else
        this.props.push(value)
    }

    setAbility = () => {
      this.setState({isPushDisable: true,
                     isSwitchDisable: true,
                     isPopDisable: false})
    }


    render() {
        return (
            <div id='view2' className='pane'>
                <div className='header'>Inputs</div> 
                <Row>
                  <Col span={11} offset={1}>
                  <Input.Group compact>
                  <InputNumber onChange={this.onChange} />
                  <Button type="primary" onClick={this.submit} disabled={this.state.isPushDisable}><LoginOutlined rotate={90}/>Push</Button>
                  </Input.Group>
                  </Col>                  
                  <Col span = {11} offset={1}>
                  <Button type="primary" size={20} onClick={this.setAbility} disabled={this.state.isSwitchDisable}><EnterOutlined />Input Complete</Button>
                  </Col>
                </Row>
                <Row>
                  <Col span={23} offset={1}>
                    <Paragraph>Accepted input range: [1, 99]</Paragraph>
                    <Paragraph></Paragraph>
                  </Col>
                </Row>
                <Row>
                  <Col span = {24} offset={1}> 
                  <Button type="primary" size={20} onClick={this.props.pop} disabled={this.state.isPopDisable}><LogoutOutlined rotate={270} />Pop</Button> 
                  </Col>
                </Row>
                <Paragraph></Paragraph>
                <Row>
                  <Col span = {24} offset={1}> 
                  <Button type="primary" size={20} href=""><ReloadOutlined />Refresh</Button> 
                  </Col>
                </Row>
            </div>
        )
    }
}

