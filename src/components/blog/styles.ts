import styled from "styled-components";

export const Title = styled.h2 `
  font-size: 2rem;
`
export const BoxBlog = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  margin-bottom: 3rem;
  @media only screen and (max-width: 910px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 630px) {
    grid-gap: 0;
  }
`
export const TitleBlog = styled.p `
  font-size: 2rem;
  @media only screen and (max-width: 630px) {
    margin-bottom: 3rem;
  }
`
export const ImgBlogMin = styled.img `
  width: 100%;
`
export const BoxBlobgLg = styled.article `
  max-width: 60rem;
  @media only screen and (max-width: 910px) {
    justify-self: center;
  }
`
export const ImgBlogLg = styled.img `
  width: 100%;
`
export const BloxImgMin = styled.article `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  @media only screen and (max-width: 630px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`