import React from 'react'
import { Icon, Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'
import LogoImg from '../../../assets/logo.png'

const HeaderLeft = ({ navList }) => {
  const aa = (
    <Menu className="header-nav">
      {navList.map(nav => (
        <Menu.Item key={nav.link}>
          <Link to={nav.link}>
            {nav.icon && <Icon type={nav.icon} style={{ marginRight: 15 }} />}
            <span className="nav-text">{nav.title}</span>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <div className="header-left">
      <img src={ LogoImg } className="logo-img" alt="logo" />
      <span className="blog-name">高雪荣的博客</span>
      <Dropdown overlayClassName="header-dropdown" trigger={['click']} overlay={aa}>
        <Icon type="menu-o" className="nav-phone-icon" />
      </Dropdown>
    </div>
  )
}

export default HeaderLeft
