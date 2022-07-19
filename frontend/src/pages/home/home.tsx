/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import Header from '../../components/header';

import { useDispatch, useSelector } from 'react-redux';
import sample from '../../common/config/reducers/sample';
import dataInterface from '../../common/config/reducers/sample';

const btnStyle = css`
  width: 200px;
  height: 100px;
  font-size : 20px;
  border: 1px solid #cccccc;
  border-radius : 4px;
`

export default function Home () {
  const dispatch = useDispatch();
  
  const onDispatch = () => {
    let result = dispatch({type: 'SAMPLE', text: 'test4'});
    console.log('redux', result);

  }

    return <section><Header />


    <button type="button" css={btnStyle} onClick={onDispatch}>
      redux sample
    </button>

    </section>;
  }