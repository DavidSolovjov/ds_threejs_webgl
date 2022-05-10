import Image from "next/image"

const Developer = () => {
  return (
    <>
      <Image src={'/assets/img/developer.gif'} width={750} height={550} alt='image' placeholder="blur" blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"/>
    </>
  )
}

export default Developer;