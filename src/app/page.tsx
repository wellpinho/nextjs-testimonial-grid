import { 
  Testimonials1, 
  Testimonials2, 
  Testimonials3, 
  Testimonials4, 
  Testimonials5
} from "./components/testimonials";

export default function Home() {
  return (
    <main className="
      container 
      mx-auto
    ">
      <div className="
        text-white  
          md:p-10   
          md:flex
          md:flex-row
          justify-between
        ">
        <Testimonials1 />
        <Testimonials2 />
        <Testimonials3 />
        <Testimonials4 />
        <Testimonials5 />
      </div>
    </main>
  )
}
