import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import './index.css'

const Container = styled.div`
  display: inline-block;
  height: 900px;
  min-width: 150px;
  background-color: #1f263e;
`

const Cell = styled.div`
  height: 80px;
  min-width: 80px;
  padding: 0 30px;
  line-height: 80px;
  color: white;
  cursor: pointer;
  ${({ isExpander = false }) =>
    isExpander ? '' : '&:hover { background-color: #d4d4d46e; }'}
`

const Tree = ({ user, isOpen, items = [] }) => {
  const [isChildrenOpen, setIsChildrenOpen] = useState(false)
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    setIsShow(true)
  }, [])

  const { currentUser, userRoles } = user

  if (!items || !items.length) return null

  return items.map(({ children, name, icon }) => {
    const handleClick = () => {
      const hasPermission = userRoles[currentUser] && userRoles[currentUser][name]
      if (children) {
        setIsChildrenOpen(!isChildrenOpen)
      } else if (hasPermission) {
        console.log(`${name} is fired!!!`)
      }
    }

    return (
      <>
        <CSSTransition
          in={isShow}
          timeout={2000}
          classNames="boss-text"
        >
          <Cell onClick={handleClick}>{`${icon} ${ isOpen || !icon ? name : '' }`}</Cell>
        </CSSTransition>
        {isChildrenOpen && (
          <Tree user={user} isOpen={isOpen} items={children}></Tree>
        )}
      </>
    )
  })
}

export const SideBar = ({ input, user }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container>
      <Cell isExpander={true} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'X' : '三'}
      </Cell>
      <Tree user={user} isOpen={isOpen} items={input} />
    </Container>
  )
}

export default SideBar
