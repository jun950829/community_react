import Link from 'next/link';
import Header from '../../components/header';

export default function Home () {

    function test() {
      fetch('http://localhost:3000/api/test')
      .then(res => res.json)
      .then(data => console.log(data));
    }

    return <section><Header />
    <button onClick={test}>
      test
    </button>

    </section>;
  }