/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import Header from '../../components/header';

const btnStyle = css`
  width: 200px;
  height: 100px;
  font-size : 20px;
  border: 1px solid #cccccc;
  border-radius : 4px;
`

export default function Home () {

    function test() {
      fetch('http://localhost:3000/api/test')
      .then(res => res.json)
      .then(data => console.log(data));
    }

    return <section><Header />
    <button css={btnStyle} onClick={test}>
      test
    </button>

    </section>;
  }