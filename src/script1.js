      window.onload = () => {
        document.querySelector('#sendRequest').addEventListener('click', (event) => {
          fetch('http://localhost:2000/hoge', {
            mode: 'cors'
          })
          .then((ret) => {
              return ret.json()
          })
          .then((ret) => {
            console.log(ret)
          })
        })
      }
