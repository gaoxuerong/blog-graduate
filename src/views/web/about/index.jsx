import React, { Component } from 'react'
import './index.less'
import AuthorAvatar from '@/components/web/AuthorAvatar'
import axios from '@/lib/axios'
import { connect } from 'react-redux'
import { generateColorMap } from '@/redux/common/actions'

import { Divider, Icon } from 'antd'

import Comment from '@/components/web/comment'

@connect(
  null,
  { generateColorMap }
)
class About extends Component {
  state = { commentList: [] }

  componentDidMount() {
    this.fetchList()
  }

  fetchList = () => {
    axios.get('/comment/getAboutComments').then(res => {
      this.props.generateColorMap(res.rows) // 生成头像的颜色匹配
      this.setState({ commentList: res.rows })
    })
  }

  setCommentList = commentList => this.setState({ commentList })

  render() {
    return (
      <div className="content-inner-wrapper about">
        <AuthorAvatar />
        <Divider orientation="left">博客简述</Divider>
        <p>react16.8 + koa2 + sequelize + mysql </p>
        <Divider orientation="left">关于我</Divider>
        <ul className="about-list">
          <li>姓名：高雪荣</li>
          <li>学历专业：whpu本科 软件工程</li>
          <li>
            联系方式：
            <Icon type="qq" /> 1991403547
            <Divider type="vertical" />
            <i className="iconfont icon-email" />
            <a href="mailto:gaoxuerong123@gmail.com">gaoxuerong123@gmail.com</a>
          </li>
          <li>坐标： China</li>
          <li>全栈开发工程师</li>
          <li>
            技能
            <ul>
              <li>
                看过redux、koa2、redux-thunk、redux-saga、webapck源码；
              </li>
              <li>
                熟练掌握数据结构，网络，操作系统等计算机基础知识！
              </li>
              <li>
                熟练使用react vue MVVM框架！
              </li>
              <li>
                写过java nodejs python go！
              </li>
              <li>
                用过three.js做过数据可视化！
              </li>
            </ul>
          </li>
          <li>
            个人
            <ul>
              <li>爱学习，热爱开源</li>
              <li>Geek</li>
            </ul>
          </li>
        </ul>

        <Comment articleId={-1} commentList={this.state.commentList} setCommentList={this.setCommentList} />
      </div>
    )
  }
}

export default About
