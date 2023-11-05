import "./styles.css"

type BannerProps = {
  backgroundImg: string
}

export function Banner({ backgroundImg }: BannerProps) {
  const imgPath = `url(${backgroundImg})`

  return (
    <div className="banner-container" style={{ backgroundImage: imgPath }} />
  )
}
