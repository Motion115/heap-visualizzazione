import React, { Component } from 'react';
import { Col, Row } from 'antd';
import { Typography } from 'antd';
import './view1.css';

const { Paragraph, Text} = Typography;

export default class View1 extends Component {
    render() {
        return (
            <div id='view1' className='pane'>
                <div className='header'>HeapSort Visualization</div>
                <div className='intro'>
                    <Row>
                        <Col span={24} offset={1}>同济大学电子与信息工程学院计算机系</Col>
                    </Row>
                    <Row>
                        <Col span={11}offset={1}>
                            <Row>
                                <Col span={24}>2051568</Col>
                            </Row>
                            <Row>
                                <Col span={24}>邹睿石</Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <a href='https://motion115.github.io/'>
                            <img src={require('./logo.png')} alt="logo" className="logo"/>
                            </a>
                        </Col>
                    </Row>                
                </div>
                <div className='header'>Vis Explanation</div>
                <div>
                <Typography>
                    <Paragraph>
                        <Text code strong>Input Array</Text> 显示待排数组内容。
                    </Paragraph>
                    <Paragraph>
                        <Text code strong>Sorted Array</Text> 显示堆排序后数组内容。
                    </Paragraph>
                    <Paragraph>
                        <Text code strong>Heap: content in array可视化部分</Text> 展现堆中元素内容。使用纵轴反映数的相对大小关系（纵轴高度为原始数据开根号）。
                        默认状态下显示-1，表示此时堆中没有元素。
                    </Paragraph>
                    <Paragraph>
                        <Text code strong>Heap: tree visualization可视化部分</Text> 展现堆中元素内容。使用树型的结构，直观体现每次插入、弹出元素后堆中元素变化。
                    </Paragraph>
                    <Paragraph>
                        <Text code strong>Inputs</Text> 输入模块。为了可视化效果良好，限制输入范围为1-99的整数；最大数组长度为31。
                        若超过上述条件，则会弹窗提示输入不合法。输入数组时，在Input模块的数字输入框中输入或点击选择数字，点击Push按钮加入待排数组；
                        排序时，不断点击Input模块中的Pop按钮，直到数组为空。
                    </Paragraph>

                    </Typography>
                </div>
            </div>


        )
    }
}
