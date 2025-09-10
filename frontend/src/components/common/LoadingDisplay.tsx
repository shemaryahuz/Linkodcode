import "../../styles/common/loadingDisplay.css";


export default function LoadingDisplay() {
  return (
    <section className="page loading">
      <img 
        src="/images/loading.gif"
        alt= "Loading gif"
      /> 
      <p>Loading...</p>
    </section>
  )
}
