// import styled from 'styled-components'

// const Container = styled.main`
//     background-color: #060910;
//     min-height: 100vh;
//     color: white;
//     overflow-y: hidden;
// `

export default function Container({ children }) {
  return <main style={{backgroundColor:"#060910",minHeight:"100vh",color:"white",overflowY:"hidden"}}>{children}</main>;
}
