/**@jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react'
import React from 'react'

const Loader = ({loading,children}) => {
  const theme = useTheme()
  return (
    <div>
      {loading?
        <div
          css={css`
                color:${theme.text};
                text-align:center;
                padding:20px 0;
          `}
        >
          {children}
        </div> 
      :null}
    </div>
  )
}

export default Loader
