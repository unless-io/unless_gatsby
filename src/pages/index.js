import * as React from "react"
import { useCallback } from "react"
import { StaticImage } from "gatsby-plugin-image"
import useIsMounted from "../hooks/use_is_mounted"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const isMounted = useIsMounted()

  const getRotation = (event, target) => {
    const x = event.pageX
    const y = event.pageY

    const targetX = target.getBoundingClientRect().left + target.offsetWidth / 2
    const targetY = target.getBoundingClientRect().top + target.offsetHeight / 2

    const angleX = (targetY - y) / 30
    const angleY = (targetX - x) / 80

    return `rotateX(${angleX}deg) rotateY(${angleY}deg)`
  }

  const HandleMove = useCallback(event => {
    const target = document.querySelector("#banner")
    const width = target.offsetWidth + target.getBoundingClientRect().left * 2
    const height = target.offsetHeight + target.getBoundingClientRect().top * 2
    const horizontalPercentage = event.clientX / width
    const verticalPercentage = event.clientY / height

    const values = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
    const horizontalOffset =
      values[Math.floor(horizontalPercentage * values.length)]
    const verticalOffset =
      values[Math.floor(verticalPercentage * values.length)]
    target.style.boxShadow = `${horizontalOffset * -5}px ${
      verticalOffset * -5
    }px 25px rgba(1,1,1,0.2)`
    target.style.transform = `translateX(${
      horizontalOffset * -1
    }px) translateY(${verticalOffset * -1}px) scale(1.03) ${getRotation(
      event,
      target
    )}`
  }, [])

  const handleClick = event => {
    const target = event.currentTarget
    target.closest(".gatsby-image-wrapper").style.overflow = "visible"
    target.style.transition = `transform 300ms ease, box-shadow 300ms ease`
    if (target.classList.contains("active")) {
      target.classList.remove("active")
      document.body.removeEventListener("mousemove", HandleMove, true)
      target.style.boxShadow = `0px 0px 0px rgba(0, 0, 0, 0)`
      target.style.transform = `translateX(0px) translateY(0px) scale(1)`
    } else {
      if (event.view.outerWidth > 900) {
        target.classList.add("active")
        target.style.transform = `translateX(0px) translateY(0px) scale(1.03)`
        document.body.addEventListener("mousemove", HandleMove, true)
      }
    }
  }

  return (
    <Layout>
      <Seo title="Home" />
      <StaticImage
        id="banner"
        src="../images/banner.png"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Hands at a desk working on a computer"
        className={isMounted ? "slideIn banner" : "banner"}
        onClick={handleClick}
        style={{
          marginBottom: `1.45rem`,
          height: `calc(100vh - 290px)`,
          width: `100%`,
          opacity: `0`,
        }}
      />
    </Layout>
  )
}

export default IndexPage
