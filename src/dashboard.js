import React, { Component } from 'react';
import heapObject from './data';
import { Layout } from 'antd';
import View1 from './views/View1';
import View2Input from './views/View2-Input';
import View3VisLinear from './views/View3-VisLinear/View3-VisLinear';
import View4 from './views/View4-VisInput/View4-VisInput'
import View5 from './views/View5/View5-VisTree';
import View6 from './views/View6-VisSorted/View6-VisSorted'
import './dashboard.css';

const { Sider, Content } = Layout;


export default class Dashboard extends Component {

    push = (x) => {
        heapObject.push(x)
        heapObject.pushBack(x)
        this.forceUpdate()
    }

    pop = () => {
        if (heapObject.sorted.length >= heapObject.array.length) {
            alert("Sorted! Heap empty!")
        }
        heapObject.pop()
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <Layout style={{ height: 820 }}>
                    <Sider width={400} style={{backgroundColor:'#eee'}}>
                        <Content style={{ height: 540 }}>
                            <View1 />
                        </Content>
                        <Content style={{ height: 260 }}>
                            <View2Input
                                push = {this.push}
                                pop = {this.pop}
                            />
                        </Content>
                    </Sider>
                    <Layout>
                        <Content style={{ height: 100 }}>
                            <View4 data={heapObject.exportUnheapified()}/>
                        </Content>
                        <Content style={{ height: 100 }}>
                            <View6 data={heapObject.exportSorted()}/>
                        </Content>
                        <Content style={{ height: 250 }}>
                            <View3VisLinear data={heapObject.export()}/>
                        </Content>
                        <Content style={{ height: 320 }}>
                            <View5 data={heapObject.export()}/>
                        </Content>

                    </Layout>
                </Layout>
            </div>
        )
    }
}
