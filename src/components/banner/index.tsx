import "./styles.css"

type BannerProps = {
  backgroundImg: string
  text: string
}

export function Banner({ backgroundImg, text }: BannerProps) {
  const imgPath = `url(${backgroundImg})`

  return (
    <div className="banner-container" style={{ backgroundImage: imgPath }}>
      {text}
    </div>
  )
}
