import SecondSection from "../../components/index/SecondSection"
import TitleSection from "../../components/index/TitleSection"
import TeamSection from "../../components/index/TeamSection"
import Footer from "../../components/index/Footer"
import YoutubeSection from "../../components/index/YoutubeSection"

export { Page }

function Page() {
  return (
    <>
      <TitleSection/>
      <YoutubeSection/>
      <SecondSection/>
      <TeamSection/>
      <Footer/>
    </>
  )
}
