import PageContent from '_components/page-content/page-content.component'
import React from 'react'
import { useNavigate } from '@reach/router';

const Grocery = () => {
  // const navigate = useNavigate();
  return (
    <>
      {/* <Category setRoute={navigate}/> */}
      <PageContent  pageId = {1} category = {'grocery'}/>
    </>
  )
}

export default Grocery
